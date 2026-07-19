"""랜딩 공유 미리보기 이미지(public/og/landing.jpg) 생성.

결과 페이지 OG는 유형별 카드가 있지만 랜딩(/)에는 없어서 카톡 공유 시
미리보기가 비어 보인다. 캐릭터 6종 + 카피로 1200×630 카드를 찍는다.

실행: python3 scripts/make_landing_og.py
필요: Pillow, Pretendard otf. 폰트는 ~/Library/Fonts 에서 찾고,
다른 곳에 있으면 ACTI_FONT_DIR 로 지정한다. 없으면 Apple SD Gothic Neo 폴백.
"""

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og" / "landing.jpg"

W, H = 1200, 630
BG = "#FAFAF8"
INK = "#1F1C18"
SUB = "#7A756B"

FONT_DIRS = [Path(p) for p in (os.environ.get("ACTI_FONT_DIR"),) if p] + [
    Path.home() / "Library" / "Fonts",
]
FALLBACK = "/System/Library/Fonts/AppleSDGothicNeo.ttc"

# 랜딩 히어로 6종 (컬러가 고르게 퍼지도록 컬러휠에서 띄엄띄엄 골랐다)
CHARACTERS = ["MINB", "MPAS", "TIAS", "TPNB", "MIAB", "TPAS"]


def font(name: str, size: int) -> ImageFont.FreeTypeFont:
    for d in FONT_DIRS:
        path = d / f"Pretendard-{name}.otf"
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.truetype(FALLBACK, size)


def main() -> None:
    canvas = Image.new("RGB", (W, H), BG)
    draw = ImageDraw.Draw(canvas)

    draw.text((80, 118), "ACTI", font=font("SemiBold", 30), fill=SUB)
    draw.text((80, 178), "연기 스타일을", font=font("ExtraBold", 82), fill=INK)
    draw.text((80, 274), "찾아봐요", font=font("ExtraBold", 82), fill=INK)
    draw.text(
        (80, 402),
        "4축 16유형으로 정리한 내 연기 스타일",
        font=font("Medium", 32),
        fill=SUB,
    )
    draw.text((80, 454), "약 2~3분 · 14문항", font=font("Medium", 28), fill=SUB)

    # 캐릭터 6종을 오른쪽에 2행 배치 (뒤로 갈수록 조금씩 작게)
    size = 210
    x, y = 560, 322
    for i, code in enumerate(CHARACTERS):
        src = ROOT / "public" / "characters" / f"{code}.png"
        if not src.exists():
            continue
        s = size - i * 12
        avatar = Image.open(src).convert("RGBA").resize((s, s), Image.LANCZOS)
        col, row = i % 3, i // 3
        canvas.paste(avatar, (x + col * 195, y - row * 175), avatar)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(OUT, "JPEG", quality=88, optimize=True)
    print(f"[make_landing_og] {OUT.relative_to(ROOT)} ({W}x{H})")


if __name__ == "__main__":
    main()
