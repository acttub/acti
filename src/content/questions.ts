/**
 * 연습실에서 공감할 수 있는 구체적인 상황 + 짧고 유쾌한 구어체 선택지.
 * 2026-10-04 사용자 승인 문안. 14문항·56개 선택지의 ID/축/순서는 유지한다.
 * 실력의 우열이 아닌 평소 연기 접근 방식을 돌아보는 문항이다.
 */

import {
  Zap, Ruler, Microscope,
  Cloud, Layers, Shirt, BookOpen,
  Music, Map, Smile, Repeat,
  Waves, HelpCircle, Shuffle,
  Activity, Moon, Search, Drama,
  AudioLines, Pencil,
  Coffee, Phone, MessageCircle,
  Flame, Brain, Footprints, Heart,
  Camera, NotebookPen, Hand, Theater,
  Eye,
} from 'lucide-react';
import type { Question } from './schema';

export const QUESTIONS: Question[] = [
  // ── 1. 리허설 (즉흥 합) ───────────────────────────
  {
    id: 1,
    scenario: '어제는 화내던 상대가 오늘은 웃으면서 같은 대사를 합니다. 내 다음 대사는 “왜 그렇게 화를 내?”인데요.',
    question: '상대 배우가 오늘은 다르게 연기한다면?',
    choices: [
      { label: '오, 그렇게 와? 나도 바꿔본다.', axis: 'I', icon: Zap },
      { label: '일단 준비한 흐름으로 받아본다.', axis: 'P', icon: Ruler },
      { label: '저 느낌 뭐지? 잠깐 느껴본다.', axis: 'N', icon: Waves },
      { label: '잠깐, 이 장면 해석이 달라졌는데?', axis: 'A', icon: Microscope },
    ],
  },

  // ── 2. 새 대본 준비 ───────────────────────
  {
    id: 2,
    scenario: '첫 연습은 다음 주. 아직 아무도 준비물을 말하지 않았지만, 벌써 하나쯤 시작하고 있죠.',
    question: '새 대본을 받았다. 제일 먼저 하는 건?',
    choices: [
      { label: '이 사람, 어떤 인생을 산 거야?', axis: 'M', icon: Cloud },
      { label: '형광펜부터 꺼낸다. 장면부터 나누자.', axis: 'T', icon: Layers },
      { label: '일단 일어나본다. 어떻게 걷는 사람이지?', axis: 'B', icon: Shirt },
      { label: '말은 이렇게 하는데, 속마음은 뭐지?', axis: 'S', icon: BookOpen },
    ],
  },

  // ── 3. 공연 직전 분장실 ─────────────────────────────
  {
    id: 3,
    scenario: '대사는 외웠습니다. 적어도 분장실에 들어오기 전까지는요.',
    question: '공연 시작 10분 전, 나는?',
    choices: [
      { label: '오늘 몸 상태 보고 그때그때 준비한다.', axis: 'I', icon: Music },
      { label: '동선 한 번만 더. 진짜 마지막으로.', axis: 'P', icon: Map },
      { label: '어깨 풀고, 턱 풀고, 숨부터 쉰다.', axis: 'B', icon: Smile },
      { label: '나는 지금 어디서 와서 왜 여기 있지?', axis: 'S', icon: Repeat },
    ],
  },

  // ── 4. 디렉션 받기 ──────────────────────────────────
  {
    id: 4,
    scenario: '익숙한 디렉션입니다. 이번에는 “상대를 놓치고 싶지 않은 마음이 더 보였으면 좋겠다”는 말이 붙었습니다.',
    question: '연출이 “조금만 더”라고 한다면?',
    choices: [
      { label: '말 못 한 속마음을 좀 더 채워본다.', axis: 'S', icon: Moon },
      { label: '그 ‘조금’을 느낌으로 찾아본다.', axis: 'N', icon: Waves },
      { label: '어느 부분이요? 거기부터 잡아볼게요.', axis: 'A', icon: HelpCircle },
      { label: '그럼 이번엔 이렇게 가볼게요!', axis: 'I', icon: Shuffle },
    ],
  },

  // ── 5. 오디션 영상 복기 ─────────────────────────────
  {
    id: 5,
    scenario: '할 때는 분명 절박했습니다. 영상에서는 생각보다 얌전한 사람이 서 있습니다.',
    question: '오디션 영상 속 내가 생각보다 밋밋하다면?',
    choices: [
      { label: '몸이 너무 얌전했네. 다시 움직여보자.', axis: 'B', icon: Activity },
      { label: '머릿속이 비어 보이네. 속마음부터.', axis: 'S', icon: Moon },
      { label: '어디서 힘이 빠졌지? 구간별로 돌려본다.', axis: 'A', icon: Cloud },
      { label: '이게 진짜 내 일이면 저렇게 말할까?', axis: 'M', icon: Drama },
    ],
  },

  // ── 6. 리딩 첫 날 (인물 관찰) ────────────────────────
  {
    id: 6,
    scenario: '내가 상상한 상대는 차가운 사람이었는데, 눈앞의 배우는 유난히 다정하게 읽습니다.',
    question: '첫 리딩, 상대의 해석이 예상과 다르다면?',
    choices: [
      { label: '저렇게 말하면 내 인물은 어떨까?', axis: 'M', icon: Eye },
      { label: '오, 저 박자에 내 대사를 얹으면?', axis: 'T', icon: AudioLines },
      { label: '재밌는데? 바로 받아본다.', axis: 'I', icon: Smile },
      { label: '메모부터. 이 부분은 같이 맞춰보자.', axis: 'P', icon: Pencil },
    ],
  },

  // ── 7. 합이 안 맞음 ─────────────────────────────────
  {
    id: 7,
    scenario: '서로 대사는 정확합니다. 너무 정확해서 각자 외운 것을 차례대로 발표하는 것 같습니다.',
    question: '대사는 주고받는데 대화가 안 된다면?',
    choices: [
      { label: '우리 서로 뭘 원하는지부터 맞추자.', axis: 'A', icon: Coffee },
      { label: '잠깐, 대사 사이가 너무 칼같아.', axis: 'T', icon: Ruler },
      { label: '외운 말투는 빼고 한 번 해볼까?', axis: 'I', icon: Theater },
      { label: '어디서 붙고 떨어질지 다시 짜보자.', axis: 'P', icon: NotebookPen },
    ],
  },

  // ── 8. 대본에 없는 시간 ───────────────────────
  {
    id: 8,
    scenario: '앞 장면에서는 헤어지자던 인물이 다음 장면에서는 돌아옵니다. 돌아오기까지의 시간은 대본에 없습니다.',
    question: '대본에 없는 인물의 시간을 채운다면?',
    choices: [
      { label: '혼자 무슨 생각 했는지 써본다.', axis: 'S', icon: NotebookPen },
      { label: '그 시간의 걸음걸이부터 해본다.', axis: 'B', icon: Camera },
      { label: '떠오르는 장면이 있다. 일단 따라가본다.', axis: 'N', icon: Cloud },
      { label: '단서는 앞뒤 대사에 있다. 찾아보자.', axis: 'A', icon: Search },
    ],
  },

  // ── 9. 오디션장 대기 ────────────────────────────────
  {
    id: 9,
    scenario: '옆 사람의 발성은 아주 잘 들리고, 내 준비 시간은 5분 남았습니다.',
    question: '오디션, 내 앞에 이제 한 명 남았다면?',
    choices: [
      { label: '여긴 오디션장이 아니다. 장면 속이다.', axis: 'M', icon: Brain },
      { label: '첫 대사 한 번만. 호흡까지 같이.', axis: 'T', icon: AudioLines },
      { label: '어깨 내려. 턱 풀어. 발바닥 느껴.', axis: 'B', icon: Footprints },
      { label: '첫마디 전에 무슨 생각을 하고 있지?', axis: 'S', icon: Brain },
    ],
  },

  // ── 10. 디렉션 vs 직감 충돌 ──────────────────────────
  {
    id: 10,
    scenario: '나는 붙잡고 있었는데, 연출은 밀어내랍니다. 같은 대본을 읽었는데 장면의 방향이 정반대입니다.',
    question: '연출의 해석이 나와 정반대라면?',
    choices: [
      { label: '좋아요. 그 방향으로 먼저 맞춰볼게요.', axis: 'P', icon: Ruler },
      { label: '궁금한데요. 어디서 그렇게 읽으셨어요?', axis: 'A', icon: HelpCircle },
      { label: '저는 좀 다르게 느꼈는데, 같이 볼까요?', axis: 'N', icon: Heart },
      { label: '둘 다 해보죠. 해보면 뭐가 나오겠죠!', axis: 'I', icon: Shuffle },
    ],
  },

  // ── 11. 컷 사인 후 ──────────────────────────────────
  {
    id: 11,
    scenario: '좋았다니 다행입니다. 그런데 방금 내가 정확히 뭘 했더라?',
    question: '“방금 좋았어요. 똑같이 한 번 더!”',
    choices: [
      { label: '방금 속도, 호흡, 동선. 일단 저장.', axis: 'T', icon: Coffee },
      { label: '방금 그 상황으로 다시 들어간다.', axis: 'M', icon: Drama },
      { label: '그 느낌 안 날아가게 잠깐만요.', axis: 'N', icon: Eye },
      { label: '방금 내 머릿속에서 무슨 일이 있었더라?', axis: 'S', icon: Moon },
    ],
  },

  // ── 12. 대본 외우는 방식 ────────────────────────────
  {
    id: 12,
    scenario: '대본을 덮는 순간, 상대의 첫 대사부터 새로운 작품이 됩니다.',
    question: '눈으로는 외웠는데 입이 모른 척한다면?',
    choices: [
      { label: '걸으면서 말한다. 몸도 같이 외워라.', axis: 'B', icon: Hand },
      { label: '장면이 떠오르면 대사도 따라오더라.', axis: 'N', icon: Cloud },
      { label: '왜 이 말을 하는지 알면 덜 까먹는다.', axis: 'M', icon: MessageCircle },
      { label: '상대 대사부터 틀어놓고 반복한다.', axis: 'T', icon: Phone },
    ],
  },

  // ── 13. 반복되는 표현 ───────────────────────────────────────
  {
    id: 13,
    scenario: '분명 매번 새롭게 하려고 했습니다. 그런데 영상 속 나는 같은 말에 같은 표정을 짓고 있습니다.',
    question: '또 같은 대사에서 같은 눈썹이 올라갔다면?',
    choices: [
      { label: '대본 다시 보자. 놓친 재미가 있겠지.', axis: 'N', icon: Theater },
      { label: '표정 말고, 속에서 다른 생각을 해보자.', axis: 'S', icon: Moon },
      { label: '또 여기네. 영상 멈추고 원인을 본다.', axis: 'A', icon: NotebookPen },
      { label: '자리부터 바꿔보자. 다르게 해보게.', axis: 'I', icon: Phone },
    ],
  },

  // ── 14. 공연·촬영 후 복기 ──────────────────────────────
  {
    id: 14,
    scenario: '공연이나 촬영은 끝났는데, 돌아가는 길에도 자꾸 떠오르는 부분이 있습니다.',
    question: '끝나고 집에 가면서 자꾸 떠오르는 건?',
    choices: [
      { label: '아까는 진짜 그 사람으로 산 것 같아.', axis: 'M', icon: Flame },
      { label: '그 대사, 호흡 한 번 더 쓸걸.', axis: 'T', icon: Brain },
      { label: '내일은 거기서 한 박자 기다려야겠다.', axis: 'P', icon: Map },
      { label: '상대가 그 말을 하니까 진짜 마음이 바뀌더라.', axis: 'S', icon: Moon },
    ],
  },
];

export const QUESTION_COUNT = QUESTIONS.length;
