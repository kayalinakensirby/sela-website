import svgPaths from "./svg-pltthxiona";
import imgImageHeroBackground from "figma:asset/0a80897977869a91b3c39d1857b18a09a898c8a4.png";
import imgPetalMarkWhite1 from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import imgImageWithFallback from "figma:asset/aa414892451a43c009d71639f9bc5bdd2e871441.png";
import imgContainer from "figma:asset/d0917de6246d836816db890211ef010dde3634e0.png";
import imgContainer1 from "figma:asset/c56ab9aa59cca389f03509616f3154296aa29304.png";
import imgImageBlog from "figma:asset/3cb7d244a82405134488c1a954c8ca60e7fdb64b.png";
import imgImageBlog1 from "figma:asset/ff1f1771c07088519d7a680879dfa9b1dd418b4a.png";
import imgImagePress from "figma:asset/b06212fe620b12b80e0fb366d1183cd5e47003ba.png";
import imgImageSelaLogo from "figma:asset/593e929702c07c3ea84e0d4292a6079407c7d021.png";

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

function Button() {
  return (
    <div className="absolute bg-[#ffff8d] h-[48.797px] left-[308.8px] rounded-[6px] top-[339.59px] w-[198.406px]" data-name="Button">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[32px] not-italic text-[14px] text-black text-nowrap top-[15px] uppercase whitespace-pre">Get Started Free</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[84px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.797px] relative w-[84px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[-1px] uppercase whitespace-pre">learn more</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.6)] grow min-h-px min-w-px relative shrink-0 w-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-px">
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] top-[0.7px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "54", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[54px]">
              <div className="absolute bottom-[-3.68px] left-0 right-[-0.93%] top-[-3.68px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 8">
                  <path d={svgPaths.p191fec00} fill="var(--stroke-0, white)" fillOpacity="0.6" id="Arrow 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[8px_6px_0px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[8px] w-[12px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88.797px] items-center left-0 top-0 w-[84px]" data-name="Container">
      <Text />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[88.797px] left-[366px] top-[456.89px] w-[84px]" data-name="Button">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[545.688px] left-[130px] top-[59.66px] w-[816px]" data-name="Container">
      <div className="absolute h-[430px] left-[192px] top-[58.34px] w-[431px]" data-name="PetalMark_White 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.12] pointer-events-none size-full" src={imgPetalMarkWhite1} />
      </div>
      <Button />
      <Button1 />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="HeroSection">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">OBGYN</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[100.57px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[100.57px]">
        <HeroSection />
      </div>
    </div>
  );
}

function HeroSection1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="HeroSection">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Midwives</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[107.57px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[107.57px]">
        <HeroSection1 />
      </div>
    </div>
  );
}

function HeroSection2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="HeroSection">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Doulas</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[93.586px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[93.586px]">
        <HeroSection2 />
      </div>
    </div>
  );
}

function HeroSection3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="HeroSection">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Fertility Specialists</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[165.922px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[165.922px]">
        <HeroSection3 />
      </div>
    </div>
  );
}

function HeroSection4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="HeroSection">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Hormone Specialists</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[178.391px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[178.391px]">
        <HeroSection4 />
      </div>
    </div>
  );
}

function HeroSection5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="HeroSection">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Menopause Specialists</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[193.977px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffff8d] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[193.977px]">
        <HeroSection5 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">OBGYN</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[100.57px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffff8d] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[100.57px]">
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Midwives</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[107.57px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffff8d] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[107.57px]">
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Doulas</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[93.586px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffff8d] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[93.586px]">
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Fertility Specialists</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[165.922px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffff8d] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[165.922px]">
        <Text4 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Hormone Specialists</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[178.391px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffff8d] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[178.391px]">
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex h-[16px] items-start relative shrink-0 w-full" data-name="Text">
      <p className="font-['Helvetica:Regular',_sans-serif] leading-[21px] not-italic relative shrink-0 text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Menopause Specialists</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[rgba(255,255,255,0.05)] h-[42px] relative rounded-[1.67772e+07px] shrink-0 w-[193.977px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffff8d] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[42px] items-start pb-px pt-[14px] px-[25px] relative w-[193.977px]">
        <Text6 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] h-[42px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="box-border content-stretch flex flex-col h-[42px] items-center overflow-clip pr-[873.365px] py-0 relative shrink-0 w-[1085px]" data-name="Container">
      <Container18 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col h-[90px] items-start left-0 overflow-clip top-[665px] w-[1076px]" data-name="Container">
      <Container19 />
    </div>
  );
}

function HeroSection6() {
  return (
    <div className="h-[755px] relative shrink-0 w-full" data-name="HeroSection">
      <Container1 />
      <Container5 />
      <Container20 />
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-[rgba(47,20,100,0.1)] h-[48px] relative shrink-0 w-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] w-px" />
    </div>
  );
}

function TrustBadgesSection() {
  return (
    <div className="bg-white h-[166px] relative shrink-0 w-full" data-name="TrustBadgesSection">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[166px] items-center justify-between pl-[114px] pr-[113.992px] py-0 relative w-full">
          <Container21 />
          <p className="font-['Helvetica:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-black text-center w-[780px]">{`When doctors dismiss your concerns or appointments are months away, you need a partner who's always there—combining expert care with the empathy and support you deserve.`}</p>
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return <div className="absolute h-[580px] left-0 top-0 w-[1076px]" data-name="Container" />;
}

function Container24() {
  return <div className="absolute bg-[rgba(115,161,255,0.2)] blur-[120px] filter left-0 rounded-[1.67772e+07px] size-[600px] top-[-0.27px]" data-name="Container" />;
}

function Container25() {
  return <div className="absolute bg-[rgba(251,186,155,0.15)] blur-[100px] filter left-[576px] rounded-[1.67772e+07px] size-[500px] top-[187.15px]" data-name="Container" />;
}

function Heading2() {
  return (
    <div className="h-[52.797px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[52.8px] left-0 not-italic text-[44px] text-nowrap text-white top-0 whitespace-pre">Talk to Sela Anytime</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[23.398px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[23.4px] left-0 not-italic text-[18px] text-[rgba(242,233,255,0.9)] text-nowrap top-[-1px] uppercase whitespace-pre">Real Answers, When You Need Them</p>
    </div>
  );
}

function TalkToSelaSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[92.195px] items-start relative shrink-0 w-full" data-name="TalkToSelaSection">
      <Heading2 />
      <Heading3 />
    </div>
  );
}

function TalkToSelaSection1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="TalkToSelaSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.8)] top-[-0.5px] w-[470px]">Ask Sela anything about your body, mind, or health. Get evidence-based answers tailored to you — with the warmth of a doctor best friend.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[16.797px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['IBM_Plex_Mono:Regular',_sans-serif] grow leading-[16.8px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-[rgba(242,233,255,0.7)] tracking-[0.6px] uppercase">What makes Sela different</p>
    </div>
  );
}

function TalkToSelaSection2() {
  return <div className="absolute bg-[#73a1ff] left-0 rounded-[1.67772e+07px] size-[6px] top-[10px]" data-name="TalkToSelaSection" />;
}

function TalkToSelaSection3() {
  return (
    <div className="absolute h-[21px] left-[18px] top-0 w-[161.086px]" data-name="TalkToSelaSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] whitespace-pre">Reliable, cited information</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <TalkToSelaSection2 />
      <TalkToSelaSection3 />
    </div>
  );
}

function TalkToSelaSection4() {
  return <div className="absolute bg-[#fbba9b] left-0 rounded-[1.67772e+07px] size-[6px] top-[10px]" data-name="TalkToSelaSection" />;
}

function TalkToSelaSection5() {
  return (
    <div className="absolute h-[21px] left-[18px] top-0 w-[243.188px]" data-name="TalkToSelaSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] whitespace-pre">{`24/7 support when Google isn't enough`}</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <TalkToSelaSection4 />
      <TalkToSelaSection5 />
    </div>
  );
}

function TalkToSelaSection6() {
  return <div className="absolute bg-[#f2e9ff] left-0 rounded-[1.67772e+07px] size-[6px] top-[10px]" data-name="TalkToSelaSection" />;
}

function TalkToSelaSection7() {
  return (
    <div className="absolute h-[21px] left-[18px] top-0 w-[262.266px]" data-name="TalkToSelaSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] whitespace-pre">AI that stays with you until you understand</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <TalkToSelaSection6 />
      <TalkToSelaSection7 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[87px] items-start relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function TalkToSelaSection8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[135.797px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="TalkToSelaSection">
      <Paragraph />
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[347.992px] items-start left-0 top-[62px] w-[490px]" data-name="Container">
      <TalkToSelaSection />
      <TalkToSelaSection1 />
      <TalkToSelaSection8 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute h-[533px] left-[24px] top-[48px] w-[1028px]" data-name="Container">
      <Container30 />
    </div>
  );
}

function TalkToSelaSection9() {
  return (
    <div className="h-[582px] overflow-clip relative shrink-0 w-full" data-name="TalkToSelaSection">
      <Container23 />
      <Container24 />
      <Container25 />
      <Container31 />
    </div>
  );
}

function Container32() {
  return <div className="absolute h-[718px] left-0 top-[-78px] w-[1076px]" data-name="Container" />;
}

function ActionPlanSection() {
  return (
    <div className="h-[105.594px] relative shrink-0 w-full" data-name="ActionPlanSection">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[52.8px] left-0 not-italic text-[#1e1b2c] text-[44px] top-0 w-[360px]">From Overwhelm to Empowerment</p>
    </div>
  );
}

function ActionPlanSection1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(30,27,44,0.7)] top-[-0.5px] w-[469px]">{`We help you make sense of what's happening with personalized recommendations and step-by-step action plans designed for your body, your goals, and your stage of life.`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[16.797px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['IBM_Plex_Mono:Regular',_sans-serif] grow leading-[16.8px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-[rgba(47,20,100,0.7)] tracking-[0.6px] uppercase">Clear guidance on:</p>
    </div>
  );
}

function ActionPlanSection2() {
  return <div className="absolute bg-[#73a1ff] left-0 rounded-[1.67772e+07px] size-[6px] top-[10px]" data-name="ActionPlanSection" />;
}

function ActionPlanSection3() {
  return (
    <div className="absolute h-[21px] left-[18px] top-0 w-[326.852px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(30,27,44,0.8)] text-nowrap top-[0.5px] whitespace-pre">What you can do at home vs. when to see a provider</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection2 />
      <ActionPlanSection3 />
    </div>
  );
}

function ActionPlanSection4() {
  return <div className="absolute bg-[#fbba9b] left-0 rounded-[1.67772e+07px] size-[6px] top-[10px]" data-name="ActionPlanSection" />;
}

function ActionPlanSection5() {
  return (
    <div className="absolute h-[21px] left-[18px] top-0 w-[311.633px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(30,27,44,0.8)] text-nowrap top-[0.5px] whitespace-pre">{`How to escalate when something doesn't feel right`}</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection4 />
      <ActionPlanSection5 />
    </div>
  );
}

function ActionPlanSection6() {
  return (
    <div className="absolute bg-[#f2e9ff] left-0 rounded-[1.67772e+07px] size-[6px] top-[10px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(47,20,100,0.2)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
    </div>
  );
}

function ActionPlanSection7() {
  return (
    <div className="absolute h-[21px] left-[18px] top-0 w-[341.609px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(30,27,44,0.8)] text-nowrap top-[0.5px] whitespace-pre">Complex decisions your provider might not explain fully</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection6 />
      <ActionPlanSection7 />
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[87px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
      <Container35 />
    </div>
  );
}

function ActionPlanSection8() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[135.797px] items-start pb-0 pt-[16px] px-0 relative shrink-0 w-full" data-name="ActionPlanSection">
      <Paragraph1 />
      <Container36 />
    </div>
  );
}

function ActionPlanSection9() {
  return (
    <div className="h-[29px] relative shrink-0 w-full" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Oblique',_sans-serif] italic leading-[21px] left-0 text-[14px] text-[rgba(47,20,100,0.6)] text-nowrap top-[8.5px] whitespace-pre">No barriers. No cost. No more carrying the burden alone.</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[414.391px] items-start left-[546px] top-[32.8px] w-[482px]" data-name="Container">
      <ActionPlanSection />
      <ActionPlanSection1 />
      <ActionPlanSection8 />
      <ActionPlanSection9 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[480px] left-0 top-0 w-[482px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[480px] left-0 top-0 w-[482px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute h-[480px] left-0 top-0 w-[482px]" data-name="Container">
      <ImageWithFallback />
      <Container38 />
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[#73a1ff] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="basis-0 grow h-[16.797px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.797px] items-start relative w-full">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-nowrap text-white whitespace-pre">Your Action Plan</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[131.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16.797px] items-center relative w-[131.203px]">
        <Container40 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[16.797px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.9)] text-nowrap whitespace-pre">Personalized</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[24.797px] relative rounded-[1.67772e+07px] shrink-0 w-[110.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[24.797px] items-start pb-0 pt-[4px] px-[12px] relative w-[110.406px]">
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="box-border content-stretch flex h-[37.797px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Container41 />
      <Container42 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function ActionPlanSection10() {
  return (
    <div className="absolute bg-[rgba(115,161,255,0.3)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.5)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container44 />
    </div>
  );
}

function ActionPlanSection11() {
  return (
    <div className="absolute h-[21px] left-[32px] top-0 w-[134.852px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.5px] whitespace-pre">Track symptoms daily</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection10 />
      <ActionPlanSection11 />
    </div>
  );
}

function Container46() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function ActionPlanSection12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container46 />
    </div>
  );
}

function ActionPlanSection13() {
  return (
    <div className="absolute h-[21px] left-[32px] top-0 w-[188.336px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.5px] whitespace-pre">Schedule follow-up in 2 weeks</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection12 />
      <ActionPlanSection13 />
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function ActionPlanSection14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container48 />
    </div>
  );
}

function ActionPlanSection15() {
  return (
    <div className="absolute h-[21px] left-[32px] top-0 w-[203.898px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[0.5px] whitespace-pre">Connect with specialist if needed</p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection14 />
      <ActionPlanSection15 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[90px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container47 />
      <Container49 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[16px] h-[193.797px] items-start left-[32px] pb-px pt-[25px] px-[25px] rounded-[24px] top-[254.2px] w-[418px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Container43 />
      <Container50 />
    </div>
  );
}

function ActionPlanSection16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[480px] left-0 overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[482px]" data-name="ActionPlanSection">
      <Container39 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return <div className="absolute bg-[rgba(251,186,155,0.2)] blur-3xl filter left-[-49.73px] opacity-[0.431] rounded-[1.67772e+07px] size-[195.467px] top-[334.27px]" data-name="Container" />;
}

function Container53() {
  return (
    <div className="absolute h-[480px] left-0 top-0 w-[482px]" data-name="Container">
      <ActionPlanSection16 />
      <Container52 />
    </div>
  );
}

function Container54() {
  return (
    <div className="absolute h-[480px] left-[24px] top-[80px] w-[1028px]" data-name="Container">
      <Container37 />
      <Container53 />
    </div>
  );
}

function ActionPlanSection17() {
  return (
    <div className="h-[640px] overflow-clip relative shrink-0 w-full" data-name="ActionPlanSection">
      <Container32 />
      <Container54 />
    </div>
  );
}

function Container55() {
  return <div className="absolute h-[718px] left-0 top-[-78px] w-[1076px]" data-name="Container" />;
}

function ActionPlanSection18() {
  return (
    <div className="h-[105.594px] relative shrink-0 w-full" data-name="ActionPlanSection">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[52.8px] left-0 not-italic text-[#1e1b2c] text-[44px] top-0 w-[360px]">Find Providers Who Actually Get It</p>
    </div>
  );
}

function ActionPlanSection19() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(30,27,44,0.7)] top-[-0.5px] w-[469px]">Sela matches you with healthcare professionals based on what matters most to you.</p>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#73a1ff] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="basis-0 grow h-[16.797px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.797px] items-start relative w-full">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">Match by what traditional directories miss</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[131.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16.797px] items-center relative w-[131.203px]">
        <Container56 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="box-border content-stretch flex h-[37.797px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="bg-[#73a1ff] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function ActionPlanSection20() {
  return (
    <div className="absolute bg-[rgba(115,161,255,0.3)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.5)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container59 />
    </div>
  );
}

function ActionPlanSection21() {
  return (
    <div className="absolute h-[21px] left-[32px] top-0 w-[134.852px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Provider philosophy and style of care</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection20 />
      <ActionPlanSection21 />
    </div>
  );
}

function Container61() {
  return (
    <div className="bg-[#ffff8d] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function ActionPlanSection22() {
  return (
    <div className="absolute bg-[rgba(255,255,141,0.25)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container61 />
    </div>
  );
}

function ActionPlanSection23() {
  return (
    <div className="absolute h-[21px] left-[32px] top-0 w-[188.336px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Demographics and shared lived experience</p>
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection22 />
      <ActionPlanSection23 />
    </div>
  );
}

function Container63() {
  return (
    <div className="bg-[#ffff8d] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function ActionPlanSection24() {
  return (
    <div className="absolute bg-[rgba(255,255,141,0.25)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container63 />
    </div>
  );
}

function ActionPlanSection25() {
  return (
    <div className="absolute h-[21px] left-[32px] top-0 w-[203.898px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">C-section rates and outcomes data</p>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection24 />
      <ActionPlanSection25 />
    </div>
  );
}

function Container65() {
  return (
    <div className="bg-[#ffff8d] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function ActionPlanSection26() {
  return (
    <div className="absolute bg-[rgba(255,255,141,0.25)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container65 />
    </div>
  );
}

function ActionPlanSection27() {
  return (
    <div className="absolute h-[21px] left-[32px] top-0 w-[203.898px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Hospital affiliations and insurance</p>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection26 />
      <ActionPlanSection27 />
    </div>
  );
}

function Container67() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Container60 />
      <Container62 />
      <Container64 />
      <Container66 />
    </div>
  );
}

function Container68() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[218px] relative rounded-[24px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[218px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Container58 />
          <Container67 />
        </div>
      </div>
    </div>
  );
}

function ActionPlanSection28() {
  return <div className="h-[29px] shrink-0 w-full" data-name="ActionPlanSection" />;
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[414.391px] items-start relative shrink-0 w-[482px]" data-name="Container">
      <ActionPlanSection18 />
      <ActionPlanSection19 />
      <Container68 />
      <ActionPlanSection28 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[480px] left-0 top-0 w-[482px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Paragraph5() {
  return <div className="h-[79.8px] shrink-0 w-full" data-name="Paragraph" />;
}

function TalkToSelaSection10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col h-[103.716px] items-start left-[60px] pb-px pt-[12.35px] px-[16.15px] rounded-[14px] top-[316px] w-[361.757px]" data-name="TalkToSelaSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Paragraph5 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents left-[60px] top-[316px]">
      <TalkToSelaSection10 />
      <p className="absolute font-['Helvetica:Regular',_sans-serif] h-[83px] leading-[21px] left-[76px] not-italic text-[14px] text-[rgba(255,255,255,0.9)] top-[328px] w-[330px]">{`“I had to have a physician friend help me find better care. I was so sick and depressed, and the nurse kept gaslighting me. I wish Sela existed then." — Naomi, San Diego`}</p>
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents left-[60px] top-[316px]">
      <Group53 />
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute h-[480px] left-0 top-0 w-[482px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgContainer1} />
      <Group48 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute h-[480px] left-0 top-0 w-[482px]" data-name="Container">
      <ImageWithFallback1 />
      <Container70 />
    </div>
  );
}

function ActionPlanSection29() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[480px] left-0 overflow-clip rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[482px]" data-name="ActionPlanSection">
      <Container71 />
    </div>
  );
}

function Container72() {
  return <div className="absolute bg-[rgba(251,186,155,0.2)] blur-3xl filter left-[-49.73px] opacity-[0.431] rounded-[1.67772e+07px] size-[195.467px] top-[334.27px]" data-name="Container" />;
}

function Container73() {
  return (
    <div className="h-[480px] relative shrink-0 w-[482px]" data-name="Container">
      <ActionPlanSection29 />
      <Container72 />
    </div>
  );
}

function Frame1618871945() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-px top-0 w-[1027px]">
      <Container69 />
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute h-[480px] left-[24px] top-[80px] w-[1028px]" data-name="Container">
      <Frame1618871945 />
    </div>
  );
}

function ActionPlanSection30() {
  return (
    <div className="h-[640px] overflow-clip relative shrink-0 w-full" data-name="ActionPlanSection">
      <Container55 />
      <Container74 />
    </div>
  );
}

function Container75() {
  return <div className="absolute h-[367.594px] left-0 top-0 w-[1076px]" data-name="Container" />;
}

function Container76() {
  return (
    <div className="absolute h-[367.594px] left-0 top-0 w-[1076px]" data-name="Container">
      <Container75 />
    </div>
  );
}

function Container77() {
  return <div className="absolute bg-[rgba(242,233,255,0.2)] blur-3xl filter left-[79.03px] opacity-[0.307] rounded-[1.67772e+07px] size-[129.929px] top-[79.03px]" data-name="Container" />;
}

function Heading4() {
  return (
    <div className="absolute h-[52.797px] left-0 top-0 w-[624px]" data-name="Heading 2">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[52.8px] left-[312.48px] not-italic text-[44px] text-black text-center text-nowrap top-0 translate-x-[-50%] whitespace-pre">Join Our Community</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[24px] left-[56px] top-[68.8px] w-[512px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-[256.4px] not-italic text-[16px] text-[rgba(0,0,0,0.8)] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">Connect with others who understand your journey</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(115,161,255,0.9)] h-[50.797px] left-[211.8px] rounded-[6px] top-[124.8px] w-[200.406px]" data-name="Button">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[33px] not-italic text-[14px] text-nowrap text-white top-[16px] uppercase whitespace-pre">Get Started Free</p>
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[175.594px] left-[226px] top-[96px] w-[624px]" data-name="Container">
      <Heading4 />
      <Paragraph6 />
      <Button2 />
    </div>
  );
}

function CommunitySection() {
  return (
    <div className="h-[271px] overflow-clip relative shrink-0 w-full" data-name="CommunitySection">
      <Container76 />
      <Container77 />
      <Container78 />
    </div>
  );
}

function ImageBlog() {
  return (
    <div className="absolute h-[644px] left-0 top-0 w-[342.664px]" data-name="Image (Blog)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBlog} />
    </div>
  );
}

function Container79() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] h-[644px] left-0 top-0 w-[342.664px]" data-name="Container" />;
}

function Text7() {
  return (
    <div className="bg-[#73a1ff] box-border content-stretch flex h-[29px] items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase whitespace-pre">Blog</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[231px]">
      <Text7 />
      <p className="capitalize font-['Times:Regular',_sans-serif] leading-[23.4px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">{`Modern Women's Healthcare`}</p>
    </div>
  );
}

function Container80() {
  return <div className="bg-white h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Paragraph7() {
  return (
    <div className="h-[63px] relative shrink-0 w-[230.664px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[0.5px] w-[189px]">{`Discover the latest in women's healthcare innovations and accessible treatment options.`}</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame14 />
      <Container80 />
      <Paragraph7 />
    </div>
  );
}

function Heading5() {
  return <div className="h-[46.797px] shrink-0 w-[230.664px]" data-name="Heading 3" />;
}

function Container81() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[16px] h-[231.797px] items-start left-[32px] pb-px pt-[25px] px-[25px] rounded-[24px] top-[264px] w-[278.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Frame21 />
      <Heading5 />
    </div>
  );
}

function Container82() {
  return (
    <div className="h-[527px] overflow-clip relative shrink-0 w-[343px]" data-name="Container">
      <ImageBlog />
      <Container79 />
      <Container81 />
    </div>
  );
}

function ImageBlog1() {
  return (
    <div className="absolute h-[644px] left-0 top-0 w-[342.664px]" data-name="Image (Blog)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBlog1} />
    </div>
  );
}

function Text8() {
  return (
    <div className="bg-[#73a1ff] box-border content-stretch flex h-[29px] items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase whitespace-pre">Blog</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[231px]">
      <Text8 />
      <p className="capitalize font-['Times:Regular',_sans-serif] leading-[23.4px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">{`Modern Women's Healthcare`}</p>
    </div>
  );
}

function Container83() {
  return <div className="bg-white h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Paragraph8() {
  return (
    <div className="h-[63px] relative shrink-0 w-[230.664px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[0.5px] w-[189px]">{`Discover the latest in women's healthcare innovations and accessible treatment options.`}</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame15 />
      <Container83 />
      <Paragraph8 />
    </div>
  );
}

function Heading6() {
  return <div className="h-[46.797px] shrink-0 w-[230.664px]" data-name="Heading 3" />;
}

function Container84() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[16px] h-[231.797px] items-start left-[32px] pb-px pt-[25px] px-[25px] rounded-[24px] top-[261px] w-[278.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Frame22 />
      <Heading6 />
    </div>
  );
}

function Container85() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[644px] left-0 top-0 w-[342.664px]" data-name="Container">
      <Container84 />
    </div>
  );
}

function Container86() {
  return (
    <div className="h-[527px] overflow-clip relative shrink-0 w-[342px]" data-name="Container">
      <ImageBlog1 />
      <Container85 />
    </div>
  );
}

function ImagePress() {
  return (
    <div className="absolute h-[644px] left-0 top-0 w-[342.664px]" data-name="Image (Press)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePress} />
    </div>
  );
}

function Text9() {
  return (
    <div className="bg-[#2f1464] box-border content-stretch flex h-[29px] items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase whitespace-pre">PRESS</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[231px]">
      <Text9 />
      <p className="capitalize font-['FONTSPRING_DEMO_-_Deca_Serif_New:Regular',_'Noto_Sans:Regular',_sans-serif] leading-[23.4px] min-w-full relative shrink-0 text-[18px] text-white w-[min-content]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Modern Women’s Healthcare
      </p>
    </div>
  );
}

function Container87() {
  return <div className="bg-white h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Paragraph9() {
  return (
    <div className="h-[63px] relative shrink-0 w-[230.664px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[0.5px] w-[189px]">{`Discover the latest in women's healthcare innovations and accessible treatment options.`}</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame16 />
      <Container87 />
      <Paragraph9 />
    </div>
  );
}

function Heading7() {
  return <div className="h-[46.797px] shrink-0 w-[230.664px]" data-name="Heading 3" />;
}

function Container88() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[16px] h-[231.797px] items-start left-[33px] pb-px pt-[25px] px-[25px] rounded-[24px] top-[264px] w-[278.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Frame23 />
      <Heading7 />
    </div>
  );
}

function Container89() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[644px] left-0 top-0 w-[343px]" data-name="Container">
      <Container88 />
    </div>
  );
}

function Container90() {
  return (
    <div className="h-[527px] overflow-clip relative shrink-0 w-[343px]" data-name="Container">
      <ImagePress />
      <Container89 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[1048px]">
      <Container82 />
      <Container86 />
      <Container90 />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(47,20,100,0.9)] h-[48.797px] relative rounded-[6px] shrink-0 w-[164.805px]" data-name="Button">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[32px] not-italic text-[14px] text-nowrap text-white top-[15px] uppercase whitespace-pre">Explore More</p>
    </div>
  );
}

function BlogSection2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[35px] h-[748.594px] items-center pb-0 pt-[42px] px-0 relative shrink-0 w-full" data-name="BlogSection2">
      <Frame10 />
      <Button3 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] whitespace-pre">About</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[18.5px] items-start left-0 top-[-1px] w-[75.602px]" data-name="Link">
      <p className="capitalize font-['Helvetica:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Instagram</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[18.5px] items-start left-0 top-[23.8px] w-[67.203px]" data-name="Link">
      <p className="capitalize font-['Helvetica:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">LinkedIn</p>
    </div>
  );
}

function Container91() {
  return (
    <div className="h-[41.594px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-0 top-0 w-[310.664px]" data-name="Container">
      <Heading8 />
      <Container91 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[16.797px] left-0 top-0 w-[50.406px]" data-name="Button">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-1px] whitespace-pre">Log In</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[16.797px] left-0 top-[24.8px] w-[58.805px]" data-name="Button">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-1px] whitespace-pre">Sign Up</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute h-[16.797px] left-0 top-[49.59px] w-[84px]" data-name="Button">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-1px] whitespace-pre">Contact Us</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute h-[16.797px] left-0 top-[74.39px] w-[25.203px]" data-name="Button">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-1px] whitespace-pre">FAQ</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[18.5px] items-start left-0 top-[98.19px] w-[142.805px]" data-name="Link">
      <p className="capitalize font-['Helvetica:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Become a Provider</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[115.984px] relative shrink-0 w-full" data-name="Container">
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Link2 />
    </div>
  );
}

function Container94() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-[358.66px] top-0 w-[310.664px]" data-name="Container">
      <Heading9 />
      <Container93 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] whitespace-pre">{`Let's keep in Touch`}</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] top-[0.5px] w-[301px]">Sign up to hear about events, news and updates from Sela.</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="h-[47px] relative rounded-[6px] shrink-0 w-full" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex h-[47px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Helvetica:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[14px] text-[rgba(10,10,10,0.5)] text-nowrap whitespace-pre">Insert your email</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[rgba(115,161,255,0.9)] box-border content-stretch flex h-[40.797px] items-center justify-center px-0 py-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-nowrap text-white uppercase whitespace-pre">Submit</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[103.797px] items-start relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Button8 />
    </div>
  );
}

function Container96() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-[717.33px] top-0 w-[310.664px]" data-name="Container">
      <Heading10 />
      <Paragraph10 />
      <Container95 />
    </div>
  );
}

function Container97() {
  return (
    <div className="h-[201.797px] relative shrink-0 w-full" data-name="Container">
      <Container92 />
      <Container94 />
      <Container96 />
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[109.203px]" data-name="Button">
      <p className="[text-underline-position:from-font] absolute decoration-solid font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-0.5px] underline whitespace-pre">Privacy Terms</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute content-stretch flex h-[18.5px] items-start left-[141.2px] top-[0.5px] w-[252px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Sela© 2025 All rights reserved</p>
    </div>
  );
}

function Container98() {
  return (
    <div className="h-[20px] relative shrink-0 w-[393.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[393.203px]">
        <Button9 />
        <Text10 />
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center justify-between pb-0 pl-0 pr-[634.797px] pt-px relative w-full">
          <Container98 />
        </div>
      </div>
    </div>
  );
}

function ProviderFooter() {
  return (
    <div className="bg-[#f5ecd9] h-[494.797px] relative shrink-0 w-full" data-name="ProviderFooter">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[494.797px] items-start pb-0 pt-[96px] px-[24px] relative w-full">
          <Container97 />
          <Container99 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[4321px] items-start left-0 top-0 w-[1076px]" data-name="App">
      <HeroSection6 />
      <TrustBadgesSection />
      <TalkToSelaSection9 />
      <ActionPlanSection17 />
      <ActionPlanSection30 />
      <CommunitySection />
      <BlogSection2 />
      <ProviderFooter />
    </div>
  );
}

function ImageSelaLogo() {
  return (
    <div className="h-[29px] relative shrink-0 w-[66.625px]" data-name="Image (Sela Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageSelaLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[29px] w-[66.625px]" />
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[75.602px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.797px] relative w-[75.602px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-1px] uppercase whitespace-pre">Community</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="basis-0 grow h-[16.797px] min-h-px min-w-px relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.797px] relative w-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-1px] uppercase whitespace-pre">Providers</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[183.203px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[16.797px] items-center relative w-[183.203px]">
        <Button10 />
        <Button11 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[38.797px] relative rounded-[6px] shrink-0 w-[100.805px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38.797px] relative w-[100.805px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[21px] not-italic text-[14px] text-nowrap text-white top-[10px] uppercase whitespace-pre">Sign In</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="basis-0 bg-[rgba(115,161,255,0.9)] grow h-[36.797px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36.797px] relative w-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[20px] not-italic text-[14px] text-nowrap text-white top-[9px] uppercase whitespace-pre">Join Free</p>
      </div>
    </div>
  );
}

function Container100() {
  return (
    <div className="h-[38.797px] relative shrink-0 w-[228.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[38.797px] items-center relative w-[228.406px]">
        <Button12 />
        <Button13 />
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[24px] top-[24px] w-[1028px]" data-name="Header2">
      <ImageSelaLogo />
      <Navigation />
      <Container100 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute font-['Times:Regular',_sans-serif] h-[105.594px] leading-[52.8px] left-[154px] not-italic text-[44px] text-center text-nowrap text-white top-[179.66px] w-[768px] whitespace-pre" data-name="Heading 1">
      <p className="absolute left-[384.7px] top-0 translate-x-[-50%]">Healthcare That Actually Listens</p>
      <p className="absolute left-[384.41px] top-[52.8px] translate-x-[-50%]">For every stage of your life</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[66px] left-[154px] top-[309px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-[384.04px] not-italic text-[16px] text-[rgba(255,255,255,0.9)] text-center top-[-0.5px] translate-x-[-50%] w-[649px]">{`When doctors dismiss your concerns or appointments are months away, you need a partner who's always there—combining expert care with the empathy and support you deserve.`}</p>
    </div>
  );
}

function Container101() {
  return <div className="absolute h-[532px] left-px opacity-70 top-0 w-[482px]" data-name="Container" style={{ backgroundImage: "linear-gradient(132.177deg, rgba(115, 161, 255, 0.3) 0%, rgba(0, 0, 0, 0) 45.192%, rgba(252, 203, 179, 0.3) 100%), linear-gradient(90deg, rgba(194, 194, 194, 0) 0%, rgba(194, 194, 194, 0) 100%)" }} />;
}

function Container102() {
  return <div className="absolute bg-[#73a1ff] blur-xl filter h-[66px] left-[68px] opacity-30 rounded-[14px] top-[26px] w-[378.797px]" data-name="Container" />;
}

function Paragraph12() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-white top-[0.5px] w-[340px]">{`I've been having irregular periods for 3 months. Should I be worried?`}</p>
    </div>
  );
}

function Container103() {
  return (
    <div className="absolute bg-[rgba(115,161,255,0.2)] box-border content-stretch flex flex-col h-[68px] items-start left-[66px] pb-px pt-[13px] px-[17px] rounded-[14px] top-[26px] w-[380.797px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Paragraph12 />
    </div>
  );
}

function Container104() {
  return <div className="absolute h-[104.5px] left-[11.2px] opacity-30 top-[102.75px] w-[425.6px]" data-name="Container" />;
}

function Container105() {
  return <div className="absolute h-[44.65px] left-[11.2px] opacity-30 top-[223.18px] w-[425.6px]" data-name="Container" />;
}

function Container106() {
  return <div className="absolute h-[104.5px] left-[11.2px] opacity-30 top-[283.75px] w-[425.6px]" data-name="Container" />;
}

function Paragraph13() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.4)] text-nowrap top-[0.5px] whitespace-pre">Ask Sela anything...</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.05)] grow h-[43px] min-h-px min-w-px relative rounded-[1.67772e+07px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col h-[43px] items-start pb-px pt-[11px] px-[17px] relative w-full">
          <Paragraph13 />
        </div>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3bc3c080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container108() {
  return (
    <div className="bg-[rgba(115,161,255,0.3)] relative rounded-[1.67772e+07px] shrink-0 size-[36px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.5)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-px relative size-[36px]">
        <Icon />
      </div>
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex gap-[10px] h-[43px] items-center relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <Container108 />
    </div>
  );
}

function Container110() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[60px] items-start left-0 pb-0 pt-[17px] px-0 top-[388px] w-[448px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Container109 />
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute h-[415px] left-[21px] top-[21px] w-[448px]" data-name="Container">
      <Container102 />
      <Container103 />
      <Container104 />
      <Container105 />
      <Container106 />
      <Container110 />
    </div>
  );
}

function TalkToSelaSection11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.05)] left-0 rounded-[16px] size-[482px] top-0" data-name="TalkToSelaSection">
      <div className="overflow-clip relative rounded-[inherit] size-[482px]">
        <Container101 />
        <Container111 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

function Container112() {
  return (
    <div className="absolute h-[529px] left-[566px] top-[972px] w-[490px]" data-name="Container">
      <TalkToSelaSection11 />
    </div>
  );
}

function Paragraph14() {
  return <div className="h-[79.8px] shrink-0 w-full" data-name="Paragraph" />;
}

function TalkToSelaSection12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col h-[85.355px] items-start left-[587px] pb-px pt-[12.35px] px-[16.15px] rounded-[14px] top-[1096.03px] w-[362px]" data-name="TalkToSelaSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Paragraph14 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents left-[587px] top-[1096.03px]">
      <TalkToSelaSection12 />
      <p className="absolute font-['Helvetica:Regular',_sans-serif] h-[62.527px] leading-[21px] left-[602.8px] not-italic text-[14px] text-white top-[1108.19px] w-[324px]">I understand your concern. Irregular periods can happen for many reasons. Let me help you understand what might be going on...</p>
    </div>
  );
}

function Paragraph15() {
  return <div className="h-[19.95px] shrink-0 w-full" data-name="Paragraph" />;
}

function TalkToSelaSection13() {
  return (
    <div className="absolute bg-[rgba(115,161,255,0.2)] box-border content-stretch flex flex-col h-[44.315px] items-start left-[825px] pb-px pt-[12.35px] px-[16.15px] rounded-[14px] top-[1192.3px] w-[198.654px]" data-name="TalkToSelaSection">
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Paragraph15 />
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents left-[825px] top-[1192.3px]">
      <TalkToSelaSection13 />
      <p className="absolute font-['Helvetica:Regular',_sans-serif] h-[20.842px] leading-[21px] left-[841.15px] not-italic text-[14px] text-white top-[1204.93px] w-[176px]">What could be causing this?</p>
    </div>
  );
}

function Paragraph16() {
  return <div className="h-[79.8px] shrink-0 w-full" data-name="Paragraph" />;
}

function TalkToSelaSection14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col h-[103.716px] items-start left-[587px] pb-px pt-[12.35px] px-[16.15px] rounded-[14px] top-[1247.88px] w-[361.757px]" data-name="TalkToSelaSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Paragraph16 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents left-[587px] top-[1247.88px]">
      <TalkToSelaSection14 />
      <p className="absolute font-['Helvetica:Regular',_sans-serif] h-[83.37px] leading-[21px] left-[603.15px] not-italic text-[14px] text-[rgba(255,255,255,0.9)] top-[1260.51px] w-[311px]">Common causes include stress, hormonal changes, thyroid issues, or PCOS. Based on your symptoms, I can help you create a plan and connect you with the right specialist.</p>
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents left-[566px] top-[972px]">
      <Container112 />
      <Group47 />
      <Group46 />
      <Group45 />
    </div>
  );
}

export default function SelaLandingPageDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Sela Landing Page Design">
      <App />
      <Header2 />
      <Heading1 />
      <Paragraph11 />
      <Group50 />
    </div>
  );
}