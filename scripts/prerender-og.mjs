/**
 * 빌드 후 정적 OG 프리렌더.
 *
 * react-helmet-async 는 브라우저에서 태그를 주입하므로 카카오톡·페이스북
 * 크롤러(JS 미실행)는 결과 페이지의 OG를 못 읽는다. 그래서 16유형마다
 * dist/result/{CODE}/index.html 을 미리 찍어 둔다. Vercel 은 정적 파일을
 * rewrite 보다 먼저 매칭하므로 사람은 그대로 SPA를, 봇은 메타를 받는다.
 *
 * 실행: pnpm build (postbuild)
 */

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITE_URL = (process.env.VITE_SITE_URL || 'https://acti.acttub.com').replace(/\/$/, '');

const START = '<!-- OG:START -->';
const END = '<!-- OG:END -->';

function esc(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function metaBlock({ title, description, image, url }) {
  return [
    START,
    `    <title>${esc(title)}</title>`,
    `    <meta name="description" content="${esc(description)}" />`,
    `    <meta property="og:title" content="${esc(title)}" />`,
    `    <meta property="og:description" content="${esc(description)}" />`,
    `    <meta property="og:image" content="${esc(image)}" />`,
    `    <meta property="og:url" content="${esc(url)}" />`,
    '    <meta property="og:type" content="website" />',
    '    <meta name="twitter:card" content="summary_large_image" />',
    `    ${END}`,
  ].join('\n');
}

const shell = await readFile(path.join(DIST, 'index.html'), 'utf8');
if (!shell.includes(START) || !shell.includes(END)) {
  throw new Error(`index.html 에 ${START} / ${END} 마커가 없습니다. 프리렌더를 할 수 없습니다.`);
}

const before = shell.slice(0, shell.indexOf(START));
const after = shell.slice(shell.indexOf(END) + END.length);

// 콘텐츠는 TS 소스라 vite 의 SSR 로더로 읽는다 (node 단독으로는 확장자 없는 import 해석 불가).
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
let getAllTypes;
try {
  ({ getAllTypes } = await vite.ssrLoadModule('/src/content/types.ts'));
} finally {
  await vite.close();
}

let count = 0;
for (const type of getAllTypes()) {
  const html =
    before +
    metaBlock({
      title: `${type.code} ${type.name} — ACTI`,
      description: type.tagline,
      image: `${SITE_URL}/og/${type.code}.jpg`,
      url: `${SITE_URL}/result/${type.code}`,
    }) +
    after;

  const dir = path.join(DIST, 'result', type.code);
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, 'index.html'), html, 'utf8');
  count += 1;
}

console.log(`[prerender-og] ${count}개 결과 페이지 생성 (base: ${SITE_URL})`);
