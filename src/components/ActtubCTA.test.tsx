/**
 * acti 의 전환 지점은 이 카드 하나다. 링크가 끊기거나 트래킹이 빠지면
 * 유입 서비스로서의 목적 자체가 사라지므로 테스트로 고정한다.
 */

import { render, screen } from '@testing-library/react';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import ActtubCTA, { ACTTUB_URL } from './ActtubCTA';

describe('ActtubCTA', () => {
  beforeEach(() => {
    vi.stubGlobal('open', vi.fn());
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('acttub 으로 보내는 링크에 유입 출처(utm)가 붙어 있다', () => {
    const url = new URL(ACTTUB_URL);
    expect(url.origin).toBe('https://acttub.com');
    expect(url.searchParams.get('utm_source')).toBe('acti');
  });

  it('버튼을 누르면 acttub 을 새 탭으로 열고 전환을 추적한다', () => {
    const onGo = vi.fn();
    render(<ActtubCTA onGo={onGo} />);

    screen.getByRole('button', { name: /acttub 시작하기/ }).click();

    expect(onGo).toHaveBeenCalledTimes(1);
    expect(window.open).toHaveBeenCalledWith(
      ACTTUB_URL,
      '_blank',
      'noopener,noreferrer'
    );
  });

  it('트래킹이 실패해도 이동을 막지 않는다', () => {
    render(
      <ActtubCTA
        onGo={() => {
          throw new Error('gtag 없음');
        }}
      />
    );

    screen.getByRole('button', { name: /acttub 시작하기/ }).click();

    expect(window.open).toHaveBeenCalledWith(
      ACTTUB_URL,
      '_blank',
      'noopener,noreferrer'
    );
  });
});
