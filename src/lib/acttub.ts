/**
 * acttub 본 서비스로 넘기는 경로.
 *
 * acti 의 목적은 유형 진단 자체가 아니라 acttub 가입이라, 이 링크가 이 앱의
 * 유일한 전환 지점이다. 링크를 바꿀 일이 생기면 여기만 고친다.
 */

/** 유입 출처를 GA에서 구분하려고 utm 을 붙인다. */
export const ACTTUB_URL =
  'https://acttub.com/?utm_source=acti&utm_medium=result&utm_campaign=acti_type';

/** acttub 을 새 탭으로 연다. 트래킹이 실패해도 이동은 막지 않는다. */
export function openActtub(onGo?: () => void): void {
  try {
    onGo?.();
  } catch {
    // 트래킹 실패가 이동을 막지 않도록 무시
  }
  window.open(ACTTUB_URL, '_blank', 'noopener,noreferrer');
}
