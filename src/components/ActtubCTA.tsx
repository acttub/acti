/** 결과 페이지 최상단에서 앱의 가치와 다운로드 행동을 먼저 보여준다. */
import { ArrowRight, MessageCircle, Video } from 'lucide-react';
import PrimaryButton from './PrimaryButton';
import { openActtub } from '../lib/acttub';
import './ActtubCTA.css';

type Props = {
  onGo?: () => void;
  withButton?: boolean;
};

export default function ActtubCTA({ onGo, withButton = true }: Props) {
  return (
    <section className="acttub-cta" aria-labelledby="acttub-cta-title">
      <p className="acttub-cta__eyebrow"><strong>ACTTUB</strong><span>AI 연기 코칭 앱</span></p>
      <h2 id="acttub-cta-title" className="acttub-cta__title">
        내 연기 습관,<br />
        영상으로 살펴보세요
      </h2>
      <p className="acttub-cta__body">
        연기 영상을 올리고, AI 코치와<br />
        말투·속도·쉼 같은 습관을 돌아보세요.
      </p>
      <div className="acttub-cta__journey" aria-label="앱 이용 순서">
        <span><Video size={17} aria-hidden="true" />연기 영상 업로드</span>
        <ArrowRight size={16} aria-hidden="true" />
        <span><MessageCircle size={17} aria-hidden="true" />AI 코치와 대화</span>
      </div>
      {withButton && (
        <div className="acttub-cta__action">
          <PrimaryButton size="xl" fullWidth onClick={() => openActtub(onGo)}>
            ACTTUB 앱 다운로드
            <ArrowRight size={20} aria-hidden="true" />
          </PrimaryButton>
          <p className="acttub-cta__download-note">App Store · Google Play</p>
        </div>
      )}
    </section>
  );
}
