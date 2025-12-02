import svgPaths from "./svg-883hi0a9fd";
import imgImageSelaLogo from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import imgImageDrJenniferPark from "figma:asset/810ce3bbea53b832d80bbd5fbf9d63b24bf0860d.png";

function Container() {
  return <div className="absolute bg-[rgba(242,233,255,0.4)] blur-3xl filter left-[80px] rounded-[1.67772e+07px] size-[288px] top-[80px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(115,161,255,0.3)] blur-3xl filter left-[564px] rounded-[1.67772e+07px] size-[384px] top-[160px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute h-[317.711px] left-[131px] top-[135.4px] w-[930px]" data-name="Container" />;
}

function AiChatInterface() {
  return (
    <div className="absolute h-[755px] left-0 top-0 w-[1076px]" data-name="AIChatInterface">
      <Container />
      <Container1 />
      <Container2 />
    </div>
  );
}

function ImageSelaLogo() {
  return (
    <div className="opacity-25 relative shrink-0 size-[284px]" data-name="Image (Sela Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageSelaLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[284px]" />
    </div>
  );
}

function ImageSelaLogo1() {
  return (
    <div className="opacity-25 relative shrink-0 size-[146px]" data-name="Image (Sela Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageSelaLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[146px]" />
    </div>
  );
}

function ImageSelaLogo2() {
  return (
    <div className="opacity-25 relative shrink-0 size-[68px]" data-name="Image (Sela Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageSelaLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[68px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex h-[294px] items-center justify-center left-px overflow-clip top-[97px] w-[633px]" data-name="Container">
      <ImageSelaLogo />
      <ImageSelaLogo1 />
      <ImageSelaLogo2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[26px] items-start relative shrink-0 w-[571px]" data-name="Heading 1">
      <p className="basis-0 font-['Times:Regular',_sans-serif] grow leading-[26.4px] min-h-px min-w-px not-italic relative shrink-0 text-[#2f1464] text-[22px] uppercase">Sela AI Assistant</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21px] relative shrink-0 w-[571px]" data-name="Paragraph">
      <p className="absolute font-['PP_Neue_Montreal:Book',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(47,20,100,0.7)] text-nowrap top-0 whitespace-pre">{`Your personal women's health companion`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col h-[47px] items-start relative shrink-0 w-[583px]" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute box-border content-stretch flex flex-col h-[96.398px] items-end left-px pb-px pl-[24px] pr-0 pt-[24px] top-px" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Container4 />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[79.17%]" data-name="Vector">
        <div className="absolute inset-[-33.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 5">
            <path d="M0.833333 0.833333V3.33333" id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_20.83%_20.83%_20.83%]" data-name="Vector">
        <div className="absolute inset-[-11.11%_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 10">
            <path d={svgPaths.p1a8a3b00} id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_37.5%_37.5%_37.5%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 13">
            <path d={svgPaths.p127c7400} id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.8" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] box-border content-stretch flex flex-col h-[50px] items-start pb-px pt-[15px] px-[13px] relative rounded-[14px] shrink-0 w-[46px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Icon />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.32%_8.32%_8.33%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-4.999%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
            <path d={svgPaths.p228d3dc0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.95%_8.94%_45.48%_45.48%]" data-name="Vector">
        <div className="absolute inset-[-9.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p2920ab80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-r box-border content-stretch flex flex-col from-[rgba(47,20,100,0.8)] h-[50px] items-start pb-0 pt-[15px] px-[24px] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 to-[#73a1ff] w-[68px]" data-name="Button">
      <Icon1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[470px] top-0">
      <Button />
      <Button1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.34%_9.76%_8.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-5%_-5.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 15">
            <path d={svgPaths.p3fed9680} id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative rounded-[16px] shrink-0 size-[24px]" data-name="Button">
      <Icon2 />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.7)] h-[50px] left-0 rounded-[14px] top-0 w-[460px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[50px] items-center justify-end overflow-clip px-[16px] py-[12px] relative rounded-[inherit] w-[460px]">
        <p className="font-['PP_Neue_Montreal:Book',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(47,20,100,0.6)] w-[404px]">{`Ask about women's health...`}</p>
        <Button2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[50px] left-0 top-0 w-[522px]" data-name="Container">
      <TextInput />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute h-[50px] left-[24px] top-[189px] w-[609px]" data-name="Container">
      <Frame3 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute h-[264px] left-px rounded-[30px] top-[415px] w-[633px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[30px]" />
      <Container7 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#2f1464] text-[16px] top-0 w-[404px]">Of course! Here’s a recommended doctor based on personalised needs.</p>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[16.797px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['IBM_Plex_Mono:Regular',_sans-serif] grow leading-[16.8px] min-h-px min-w-px not-italic relative shrink-0 text-[12px] text-[rgba(47,20,100,0.8)] uppercase">Generated Care Plan</p>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[259.68px]" data-name="Heading 5">
      <p className="absolute capitalize font-['Helvetica:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#2f1464] text-[16px] text-nowrap top-[-0.5px] whitespace-pre">Dr. Jennifer Park</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-0 top-[29.5px] w-[57.602px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[#73a1ff] text-[12px] text-nowrap uppercase whitespace-pre">Advanced</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[48px] relative shrink-0 w-[259.68px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] relative w-[259.68px]">
        <Heading4 />
        <Text />
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.6" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Icon3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(255,255,141,0.47)] h-[82px] relative rounded-[14px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[82px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[110.797px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading3 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.9)] box-border content-stretch flex flex-col gap-[16px] h-[215px] items-start left-[25px] pb-px pt-[17px] px-[17px] rounded-[16px] top-[189px] w-[438px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Paragraph1 />
      <Container12 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute flex flex-col font-['PP_Neue_Montreal:Book',_sans-serif] h-[31px] justify-center leading-[0] left-0 not-italic text-[#2f1464] text-[16px] top-[calc(50%+3.5px)] translate-y-[-50%] w-[259px]">
        <p className="leading-[24px]">Can you recommend me a doctor?</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(115,161,255,0.75)] box-border content-stretch flex flex-col h-[58px] items-start left-[317px] opacity-75 pb-px pt-[13px] px-[17px] rounded-[14px] top-[113px] w-[309px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Paragraph2 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[679px] left-[425px] rounded-[24px] top-[38px] w-[634px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container3 />
      <Container5 />
      <Container8 />
      <Container13 />
      <Container14 />
    </div>
  );
}

function AiChatInterface1() {
  return (
    <div className="absolute h-[755px] left-0 top-0 w-[1076px]" data-name="AIChatInterface">
      <Container15 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d={svgPaths.p1b096080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p34751d50} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gradient-to-r from-[rgba(115,161,255,0.8)] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[52.8px] to-[rgba(47,20,100,0.8)]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52.8px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] h-[50px] items-center relative shrink-0 w-[54px]" data-name="Container">
      <Button3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d="M16.0417 2.91667V5.83333" id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.29167 2.91667V5.83333" id="Vector_2" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2867e040} id="Vector_3" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b606d80} id="Vector_4" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1fce1800} id="Vector_5" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[14px] shrink-0 size-[52px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52px]">
        <Icon5 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-full items-center relative w-[52px]">
        <Button4 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[67px] items-center relative shrink-0 w-full" data-name="Container">
      <Container17 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d={svgPaths.p29307700} id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p20baf300} id="Vector_2" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 13.125H11.6667" id="Vector_3" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M23.3333 18.9583H11.6667" id="Vector_4" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M23.3333 24.7917H11.6667" id="Vector_5" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[14px] shrink-0 size-[52px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-full items-center relative w-[52px]">
        <Button5 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[67px] items-center relative shrink-0 w-full" data-name="Container">
      <Container19 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d={svgPaths.p11a65070} id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[14px] shrink-0 size-[52px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-center relative shrink-0 w-full" data-name="Container">
      <Button6 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start relative shrink-0 w-[58px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Container21 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[-0.16px] top-[48px] w-[73.688px]">
      <Container16 />
      <Container18 />
      <Container20 />
      <Container22 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[545px] left-[11.16px] top-[113px] w-[73.688px]" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d={svgPaths.p1dd7a920} id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M30.625 17.5H13.125" id="Vector_2" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p21698300} id="Vector_3" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow min-h-px min-w-px relative rounded-[14px] shrink-0 w-[48px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center relative w-[48px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 size-[52px]" data-name="Container">
      <Button7 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-[23px] top-[664px] w-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Container24 />
    </div>
  );
}

function ImageSelaLogo3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Image (Sela Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageSelaLogo} />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip rounded-[14px] size-[48px] top-[37px]" data-name="Container">
      <ImageSelaLogo3 />
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-[#2f1464] box-border content-stretch flex h-[29px] items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0 w-[113px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase whitespace-pre">Personalized</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[259px]">
      <Text1 />
      <p className="capitalize font-['Helvetica:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[#2f1464] text-[16px] w-[249px]">Comprehensive PCOS Management</p>
    </div>
  );
}

function Container27() {
  return <div className="bg-[#73a1ff] h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="h-[63px] relative shrink-0 w-[230.664px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.8)] top-px w-[264px]">Comprehensive management for PCOS involves a combination of lifestyle changes, medication, and addressing specific fertility goals.</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[211px] items-start relative shrink-0">
      <Frame />
      <Container27 />
      <Paragraph3 />
    </div>
  );
}

function Container28() {
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
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">Your Action Plan</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[131.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[16.797px] items-center relative w-[131.203px]">
        <Container28 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="box-border content-stretch flex h-[37.797px] items-center justify-between pb-px pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="bg-black relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function ActionPlanSection() {
  return (
    <div className="absolute bg-[rgba(115,161,255,0.3)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.5)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container31 />
    </div>
  );
}

function ActionPlanSection1() {
  return (
    <div className="absolute h-[21px] left-[32px] top-0 w-[134.852px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-black text-nowrap top-[0.5px] whitespace-pre">Track symptoms daily</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection />
      <ActionPlanSection1 />
    </div>
  );
}

function Container33() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function ActionPlanSection2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container33 />
    </div>
  );
}

function ActionPlanSection3() {
  return (
    <div className="absolute h-[21px] left-[32px] top-0 w-[188.336px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.8)] text-nowrap top-[0.5px] whitespace-pre">Schedule follow-up in 2 weeks</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection2 />
      <ActionPlanSection3 />
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] relative rounded-[1.67772e+07px] shrink-0 size-[8px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[8px]" />
    </div>
  );
}

function ActionPlanSection4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] box-border content-stretch flex items-center justify-center left-0 p-px rounded-[1.67772e+07px] size-[20px] top-[2px]" data-name="ActionPlanSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Container35 />
    </div>
  );
}

function ActionPlanSection5() {
  return (
    <div className="absolute h-[21px] left-[32px] top-0 w-[203.898px]" data-name="ActionPlanSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.8)] text-nowrap top-[0.5px] whitespace-pre">Connect with specialist if needed</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[22px] relative shrink-0 w-full" data-name="Container">
      <ActionPlanSection4 />
      <ActionPlanSection5 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[90px] items-start relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container34 />
      <Container36 />
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[rgba(255,255,255,0.9)] h-[414px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.4)] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[414px] items-start pb-px pt-[17px] px-[17px] relative w-full">
          <Frame1 />
          <Container30 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function ImageDrJenniferPark() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Image (Dr. Jennifer Park)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageDrJenniferPark} />
    </div>
  );
}

function Container39() {
  return (
    <div className="relative rounded-[14px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-[64px]">
        <ImageDrJenniferPark />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[21px] overflow-clip relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute capitalize font-['Helvetica:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[#2f1464] text-[16px] text-nowrap top-[0.5px] whitespace-pre">Dr. Jennifer Park</p>
    </div>
  );
}

function Container40() {
  return <div className="bg-[#73a1ff] h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[#73a1ff] text-[12px] text-nowrap top-[-0.5px] whitespace-pre">Dermatologist</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] h-[17px] leading-[21px] left-0 not-italic text-[10px] text-black top-px w-[75px]">Beverly Hills, CA</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="basis-0 grow h-[76px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[76px] items-start relative w-full">
        <Heading2 />
        <Container40 />
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[16px] h-[76px] items-start relative shrink-0 w-full" data-name="Container">
      <Container39 />
      <Container41 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[40px] overflow-clip relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[219px]">Board-certified dermatologist specializing in hormonal acne and skin health.</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[calc(50%+1px)] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[calc(50%-49.5px)] not-italic text-[14px] text-nowrap text-white top-[calc(50%-8px)] uppercase whitespace-pre">View Details</p>
    </div>
  );
}

function Button8() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(115,161,255,0.9)] h-[36px] ml-0 mt-0 relative rounded-[6px] w-[239px]" data-name="Button">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Button8 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-start relative shrink-0 w-full" data-name="Container">
      <Group1 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[252px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[252px] items-start pb-0 pt-[24px] px-[24px] relative w-full">
          <Container42 />
          <Paragraph7 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-white h-[235px] relative rounded-[16px] shrink-0 w-[289px]" data-name="Container">
      <div className="box-border content-stretch flex flex-col h-[235px] items-start overflow-clip p-px relative rounded-[inherit] w-[289px]">
        <Container44 />
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[11px] h-[414px] items-start left-[98px] top-[37px] w-[293px]">
      <Container38 />
      <Container45 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[755px] left-0 top-0 w-[413px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container23 />
      <Container25 />
      <Container26 />
      <Frame4 />
    </div>
  );
}

function ProviderModal() {
  return <div className="absolute bg-[rgba(0,0,0,0.5)] h-[755px] left-0 top-0 w-[1076px]" data-name="ProviderModal3" />;
}

function Container47() {
  return <div className="absolute h-[576px] left-px top-px w-[670px]" data-name="Container" />;
}

function Container48() {
  return <div className="absolute bg-white h-[576px] left-px top-px w-[670px]" data-name="Container" />;
}

function Heading1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[240.133px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[240.133px]">
        <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-0 whitespace-pre">Prenatal Care Journey</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-green-100 h-[24px] relative rounded-[1.67772e+07px] shrink-0 w-[117.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-start px-[12px] py-[4px] relative w-[117.602px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px] text-nowrap uppercase whitespace-pre">Comprehensive</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-center relative shrink-0 w-full" data-name="Container">
      <Heading1 />
      <Text2 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M5.33333 1.33333V4" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d="M10.6667 1.33333V4" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d={svgPaths.p3ee34580} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d="M2 6.66667H14" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[151.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[151.875px]">
        <Icon9 />
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[14px] text-[rgba(0,0,0,0.7)] top-[0.25px] tracking-[-0.1504px] w-[160px]">Created 2025-01-15</p>
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_542_2951)" id="Icon">
          <path d={svgPaths.p39ee6532} id="Vector" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p245eb100} id="Vector_2" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p18635ff0} id="Vector_3" stroke="var(--stroke-0, #00C950)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_542_2951">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[59.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[59.953px]">
        <Icon10 />
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[#00c950] text-[14px] text-nowrap top-[0.5px] tracking-[-0.1504px] whitespace-pre">Active</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_542_2962)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_542_2962">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[116.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[116.203px]">
        <Icon11 />
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-[20px] not-italic text-[14px] text-[rgba(0,0,0,0.7)] top-[0.5px] tracking-[-0.1504px] w-[97px]">65% Complete</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[16px] h-[20px] items-center relative shrink-0 w-full" data-name="Container">
      <Text3 />
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container51() {
  return (
    <div className="basis-0 grow h-[64px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[12px] h-[64px] items-start relative w-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.333%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M13 1L1 13" id="Vector" stroke="var(--stroke-0, #0000FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-1/4" data-name="Vector">
        <div className="absolute inset-[-8.333%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d="M1 1L13 13" id="Vector" stroke="var(--stroke-0, #0000FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col items-start relative size-[24px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[64px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Button9 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.203px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[67.203px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.8)] text-nowrap top-[-0.5px] uppercase whitespace-pre">Progress</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[30.078px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[30.078px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.8)] top-[0.5px] tracking-[-0.1504px] w-[31px]">65%</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[20px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container54() {
  return <div className="bg-gradient-to-b from-[#73a1ff] h-[8px] rounded-[1.67772e+07px] shrink-0 to-[#2f1464] w-full" data-name="Container" />;
}

function Container55() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[8px] relative rounded-[1.67772e+07px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[8px] items-start pl-0 pr-[290.5px] py-0 relative w-full">
          <Container54 />
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[36px] items-start relative shrink-0 w-[605px]" data-name="Container">
      <Container53 />
      <Container55 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.5px] uppercase whitespace-pre">Description</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[26px] left-0 not-italic text-[16px] text-[rgba(0,0,0,0.9)] top-[-0.5px] tracking-[-0.3125px] w-[550px]">A complete prenatal care plan covering all three trimesters with provider recommendations and milestone tracking.</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[134px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[12px] h-[134px] items-start pb-px pt-[25px] px-[25px] relative w-full">
          <Heading5 />
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-black text-nowrap top-[-0.5px] uppercase whitespace-pre">Conversation</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[50px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#73a1ff] text-[12px] top-0 uppercase w-[29px]">You:</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[421.117px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[421.117px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[31px] leading-[26px] left-0 not-italic text-[16px] text-[rgba(0,0,0,0.9)] top-[-4.5px] tracking-[-0.3125px] w-[473px]">{`I just found out I'm pregnant and need guidance on prenatal care.`}</p>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Text8 />
      <Paragraph9 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[50px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[50px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#73a1ff] text-[12px] top-0 uppercase w-[37px]">Sela:</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[567.977px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[567.977px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[32px] leading-[26px] left-0 not-italic text-[16px] text-[rgba(0,0,0,0.9)] top-[-5.5px] tracking-[-0.3125px] w-[514px]">{`I've created a comprehensive prenatal care plan tailored to you.`}</p>
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex gap-[12px] h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <Text9 />
      <Paragraph10 />
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[52px] items-start relative shrink-0 w-full" data-name="Container">
      <Container58 />
      <Container59 />
    </div>
  );
}

function Container61() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[134px] items-start pb-px pt-[25px] px-[25px] relative rounded-[16px] shrink-0 w-[605px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Heading6 />
      <Container60 />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#73a1ff] h-[46px] relative rounded-[14px] shrink-0 w-[370px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[46px] relative w-[370px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[188px] not-italic text-[14px] text-center text-white top-[12.5px] translate-x-[-50%] uppercase w-[328px]">Continue Plan</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[rgba(255,255,255,0.7)] h-[46px] relative rounded-[14px] shrink-0 w-[215px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(115,161,255,0.3)] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[10px] h-[46px] items-center justify-end px-[16px] py-[12px] relative w-[215px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-center uppercase w-[188px]">View in Chat</p>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex gap-[16px] h-[46px] items-start relative shrink-0 w-[601px]" data-name="Container">
      <Button10 />
      <Button11 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[24px] h-[576px] items-start left-px pb-0 pt-[32px] px-[32px] top-px w-[670px]" data-name="Container">
      <Container52 />
      <Container56 />
      <Container57 />
      <Container61 />
      <Container62 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute bg-white h-[578px] left-[202px] rounded-[24px] top-[88.5px] w-[672px]" data-name="Container">
      <div className="h-[578px] overflow-clip relative rounded-[inherit] w-[672px]">
        <Container47 />
        <Container48 />
        <Container63 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
    </div>
  );
}

export default function SelaChatAiPageDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Sela Chat AI Page Design">
      <AiChatInterface />
      <AiChatInterface1 />
      <Container46 />
      <ProviderModal />
      <Container64 />
    </div>
  );
}