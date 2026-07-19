/**
 * ActtubCTA — 결과 페이지에서 acttub 본 서비스로 넘기는 카드.
 *
 * acti 의 목적은 유형 진단 자체가 아니라 acttub 가입이다. 결과를 다 본
 * 시점이 유일한 전환 지점이라 결과 카드 아래에 둔다.
 */

import { ArrowRight } from 'lucide-react';
import PrimaryButton from './PrimaryButton';
import './ActtubCTA.css';

/** 유입 출처를 GA에서 구분하려고 utm 을 붙인다. */
export const ACTTUB_URL =
  'https://acttub.com/?utm_source=acti&utm_medium=result&utm_campaign=acti_type';

type Props = {
  onGo?: () => void;
};

export default function ActtubCTA({ onGo }: Props) {
  const handleClick = () => {
    try {
      onGo?.();
    } catch {
      // 트래킹 실패가 이동을 막지 않도록 무시
    }
    window.open(ACTTUB_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="acttub-cta">
      <p className="acttub-cta__eyebrow">acttub</p>
      <h3 className="acttub-cta__title">
        스타일을 알았으면,<br />
        다음은 연습이에요
      </h3>
      <p className="acttub-cta__body">
        올린 연기 영상에 질문을 던져서, 놓쳤던 생각을 스스로 찾게 돕는
        AI 연습 파트너예요.
      </p>
      <PrimaryButton size="lg" fullWidth onClick={handleClick}>
        acttub 시작하기
        <ArrowRight size={18} aria-hidden="true" />
      </PrimaryButton>
    </section>
  );
}
