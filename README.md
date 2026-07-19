# 연기 스타일 MBTI

연영과/배우를 위한 4축 16유형 위트 진단. 12~14문항, 2~3분.

## 스택

Vite 8 + React 19 + TypeScript 6 + react-router-dom 7 / lucide-react / html-to-image / react-helmet-async / Kakao JS SDK v2

> - 디자인 시스템: `outputs/stage-2/design-tokens.md`
> - 컴포넌트 명세: `outputs/stage-2/component-spec-web.md`
> - 데이터 모델: `outputs/stage-3/data-model.md`

## 로컬 실행

```bash
pnpm install
pnpm dev
# → http://localhost:5173
```

### 환경 변수

`.env.local` 작성 (`.env.example` 참고):

```env
VITE_KAKAO_APP_KEY=...   # https://developers.kakao.com 에서 발급
VITE_SITE_URL=https://acti.example.com
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX  # (선택) GA4 Measurement ID
```

키가 비어 있어도 앱은 동작합니다. 카톡 공유만 비활성됩니다.
GA Measurement ID가 비어 있으면 Google Analytics 스크립트도 로드하지 않습니다.

> **PIPA 동의 안내**: 현재 GA 활성화 시 동의 배너 없이 즉시 트래킹됩니다. 일반 사용자 대상 정식 런칭 전에는 동의 UI 또는 GA `consent mode` 도입을 고려하세요.

## 빌드 & 배포

```bash
pnpm build      # → dist/
pnpm preview    # 로컬에서 dist/ 미리보기 (모바일 실기 검증용)
```

### Vercel 배포

`vercel.json` 동봉. GitHub 연동만 하면 됩니다.

- Build Command: `pnpm build` (vercel.json 명시)
- Output: `dist`
- SPA Rewrites: 모든 경로 → `/index.html` (라우터용)
- 환경 변수: Vercel 대시보드에서 `VITE_KAKAO_APP_KEY`, `VITE_SITE_URL` 설정

### Netlify 배포

`public/_redirects` 동봉. 동일하게 자동 처리됩니다.

## 테스트

```bash
pnpm test          # 단발 실행
pnpm test:watch    # 와치 모드
```

- 점수 계산 / localStorage / 애널리틱스 / 콘텐츠 invariant 46개 테스트
- `outputs/stage-3/test-report.md` 참고

## 디렉토리 구조

```
src/
  components/     # Badge, ChoiceCard, PrimaryButton, SecondaryButton,
                  # ProgressBar, CaptureCard, TypeCard, ShareActionButton, Toast
  pages/          # LandingPage, QuizPage, ResultPage, NotFoundPage
  content/        # questions, types, schema (정적 콘텐츠)
  lib/            # scoring, storage, share, kakao
  styles/
    globals.css   # 디자인 토큰 + 베이스 리셋
scripts/          # prerender-og.mjs (빌드 후 OG), make_landing_og.py
```

## 콘텐츠

- 시나리오 문항 14개 (`src/content/questions.ts`)
- 16유형 전체 폴리싱 완료 (`src/content/types.ts` 의 `POLISHED`)
- 캐릭터 이미지 16개 (`public/characters/{CODE}.png`)

문항이나 유형 카피를 고치면 `pnpm test` 로 콘텐츠 invariant를 다시 통과시킨다.

## 공유 미리보기 (OG)

- 유형별 카드: `public/og/{CODE}.jpg` 16개 (1200×630)
- 랜딩 카드: `public/og/landing.jpg` — `python3 scripts/make_landing_og.py` 로 재생성
  (Pretendard가 `~/Library/Fonts` 에 없으면 `ACTI_FONT_DIR=<폰트폴더>` 로 지정)

`react-helmet-async` 는 브라우저에서 태그를 주입하므로 **카카오톡·페이스북 봇은
결과 페이지의 OG를 못 읽는다.** 그래서 `pnpm build` 가 `scripts/prerender-og.mjs` 를
이어 실행해 `dist/result/{CODE}/index.html` 16개를 미리 찍는다. Vercel이 정적 파일을
rewrite보다 먼저 매칭하므로 사람은 SPA를, 봇은 정적 메타를 받는다.

- `index.html` 의 `<!-- OG:START --> ~ <!-- OG:END -->` 마커를 지우면 빌드가 실패한다.
- 절대 URL 베이스는 빌드 시점의 `VITE_SITE_URL` (없으면 `https://acti.acttub.com`).

## acti 의 목적

acti 는 유형 진단 자체가 목적이 아니라 **acttub 본 서비스 가입으로 넘기는 유입 서비스**다.
전환 지점은 결과 페이지 하단의 `ActtubCTA` 한 곳이고, 링크는 utm 이 붙은 `acttub.com` 이다
(`src/components/ActtubCTA.tsx` 의 `ACTTUB_URL`). GA 이벤트는 `acttub_cta`.

흐름 중간에서 이메일·설문으로 사용자를 붙잡지 않는다. 결과 → 공유 → acttub 로만 간다.

## 남은 것

- [ ] GA 동의 배너 / `consent mode` — 정식 런칭 전 (현재는 GA 켜면 즉시 트래킹)
- [ ] Kakao 앱 키 미설정 시 카톡 공유 비활성 (Vercel 환경변수 확인)
- [ ] 라이선스 미정

## 라이선스

(미정)
