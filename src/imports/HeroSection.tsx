import imgImageHeroBackground from "figma:asset/0a80897977869a91b3c39d1857b18a09a898c8a4.png";
import imgPetalMarkWhite1 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";

function ImageHeroBackground() {
  return (
    <div className="absolute h-[755px] left-0 top-0 w-[1076px]" data-name="Image (Hero Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageHeroBackground} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(0,0,0,0.3)] h-[755px] left-0 top-0 w-[1076px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[755px] left-0 top-0 w-[1076px]" data-name="Container">
      <ImageHeroBackground />
      <Container />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[545.688px] left-[130px] top-[59.66px] w-[816px]" data-name="Container">
      <div className="absolute h-[430px] left-[192px] top-[58.34px] w-[431px]" data-name="PetalMark_White 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.12] pointer-events-none size-full" src={imgPetalMarkWhite1} />
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div className="relative size-full" data-name="HeroSection">
      <Container1 />
      <Container2 />
    </div>
  );
}