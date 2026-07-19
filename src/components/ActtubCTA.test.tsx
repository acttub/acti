/**
 * acti 의 목적은 acttub 가입이다. 링크가 끊기거나 트래킹이 빠지면
 * 유입 서비스로서의 목적 자체가 사라지므로 테스트로 고정한다.
 */

import { render, screen } from '@testing-library/react';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import ActtubCTA from './ActtubCTA';
import { ACTTUB_URL } from '../lib/acttub';

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

  it('sticky 버튼이 따로 있는 화면에서는 카드 안 버튼을 숨긴다', () => {
    render(<ActtubCTA withButton={false} />);

    expect(screen.queryByRole('button', { name: /acttub 시작하기/ })).toBeNull();
    expect(screen.getByText(/AI 연습 파트너예요/)).toBeTruthy();
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
