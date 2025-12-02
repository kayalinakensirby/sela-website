import imgScreenshot20250911At1107271 from "figma:asset/b6ecf31c8d37542f61d24dbe0a569417ccef703e.png";
import imgRectangle6 from "figma:asset/34b4a668a0ba2912c4ce7ff815659c5cc9b60053.png";
import imgExclude from "figma:asset/b1f95d7de1aebdbfe2ca172ad19413453d46fa67.png";
import imgExclude1 from "figma:asset/bcdf4511bf05da590338b8f83f6d22499eea490b.png";
import imgExclude2 from "figma:asset/781c02a8a6edb14bb850d18fe62d181284d5bb96.png";
import imgRectangle2 from "figma:asset/e40c34c65fdb07b0149bc63ec4c874fb18ff61fc.png";
import imgRectangle3 from "figma:asset/5b93901f65e8bae0f3dbf1f4bce5786bd5706ce9.png";
import imgRectangle4 from "figma:asset/e8b6eb12632c09da9654dc7cc36c1da92897ed63.png";

function LogoAppType() {
  return (
    <div className="content-stretch flex gap-[12px] h-[48px] items-center relative shrink-0" data-name="logo{-appType}">
      <div className="relative shrink-0 size-[65px]" data-name="Screenshot 2025-09-11 at 11.07.27 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[282.06%] left-[-98.69%] max-w-none top-[-92.92%] w-[478.05%]" src={imgScreenshot20250911At1107271} />
        </div>
      </div>
    </div>
  );
}

function PageLinks() {
  return (
    <div className="bg-[rgba(0,0,0,0)] content-stretch flex font-['IBM_Plex_Mono:Regular',_sans-serif] gap-[32px] items-start justify-center leading-[32px] not-italic relative shrink-0 text-[28px] text-[rgba(255,255,255,0.8)] text-center text-nowrap w-[1018px] whitespace-pre" data-name="pageLinks">
      <p className="relative shrink-0">{`My Sela `}</p>
      <p className="relative shrink-0">Community</p>
      <p className="relative shrink-0">Providers</p>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="bg-[rgba(115,161,255,0)] box-border content-stretch flex h-[60px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-[214px]" data-name="buttonLarge">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] text-center text-nowrap whitespace-pre">Join Free</p>
    </div>
  );
}

function PersonalOrAgencyWebsiteHeader() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex gap-[24px] items-center left-1/2 px-0 py-[24px] top-[26px] translate-x-[-50%] w-[1344px]" data-name="Personal or Agency Website Header">
      <LogoAppType />
      <PageLinks />
      <ButtonLarge />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Lato:Light',_sans-serif] h-[37px] leading-[24px] not-italic relative shrink-0 text-[24px] text-center text-white w-full">Insert email</p>
      <div className="h-0 relative shrink-0 w-[353px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 2">
            <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="2" x2="353" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Lato:Light',_sans-serif] h-[37px] leading-[24px] not-italic relative shrink-0 text-[24px] text-center text-white w-full">Speciality</p>
      <div className="h-0 relative shrink-0 w-[353px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 2">
            <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="2" x2="353" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <p className="font-['Lato:Light',_sans-serif] h-[37px] leading-[24px] not-italic relative shrink-0 text-[24px] text-center text-white w-full">Insert website</p>
      <div className="h-0 relative shrink-0 w-[353px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 2">
            <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="2" x2="353" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center justify-center relative shrink-0 w-[634px]">
      <Frame13 />
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function ButtonLarge1() {
  return (
    <div className="bg-[rgba(115,161,255,0.65)] box-border content-stretch flex flex-col h-[60px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-[214px]" data-name="buttonLarge">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.9)] text-center text-nowrap whitespace-pre">Apply</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-[633.777px]">
      <Frame16 />
      <ButtonLarge1 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[1282px]">
      <p className="font-['IBM_Plex_Mono:SemiBold',_sans-serif] h-[104px] leading-[120px] not-italic relative shrink-0 text-[64px] text-center text-white w-full">Join Sela’s provider network</p>
      <Frame6 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute content-stretch flex gap-[155px] items-center left-[99px] top-[267px] w-[1282px]">
      <Frame7 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-center w-full">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[52px] min-w-full relative shrink-0 text-[48px] text-[rgba(0,0,0,0.8)]" style={{ width: "min-content" }}>
        How it works
      </p>
      <div className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.4)] w-[997px]">
        <p className="mb-0">
          <span>
            Simple, supportive onboarding.
            <br aria-hidden="true" />
          </span>
          <span className="font-['IBM_Plex_Mono:Regular',_sans-serif] not-italic">Share your specialty, philosophy, and availability.</span>{" "}
        </p>
        <p className="not-italic">Women find you based on their needs and values.</p>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[216px] items-center relative shrink-0 w-full" data-name="textContent">
      <Frame22 />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[216px] items-center relative shrink-0 w-full" data-name="div">
      <TextContent />
    </div>
  );
}

function Frame4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[226px] items-start p-[10px] relative shrink-0 w-[1006px]">
      <Div />
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[262px] ml-0 mt-0 relative w-[1410px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-0 mt-0 place-items-start relative">
      <Group6 />
    </div>
  );
}

function Group5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <Group7 />
    </div>
  );
}

function Group11() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] h-[262px] ml-0 mt-0 relative w-[1410px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.85] pointer-events-none size-full" src={imgRectangle6} />
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] h-[262px] ml-0 mt-0 relative w-[1410px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover opacity-[0.65] pointer-events-none size-full" src={imgRectangle6} />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col items-start ml-0 mt-0 relative w-[1410px]">
      <Group5 />
      <Group11 />
      <Group9 />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[32px] text-white w-[590px]">Reach the right patients</p>
      <div className="h-0 relative shrink-0 w-[227px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 227 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" x2="227" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',_sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[21px] text-[rgba(255,255,255,0.8)]" style={{ width: "min-content" }}>
        Get matched with women actively seeking your specialty.
      </p>
    </div>
  );
}

function Div1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-0 mt-0 relative w-[358px]" data-name="div">
      <TextContent1 />
    </div>
  );
}

function Group10() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Div1 />
    </div>
  );
}

function Group12() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group10 />
    </div>
  );
}

function Group18() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[44px] mt-[71px] place-items-start relative">
      <Group12 />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[119px] ml-0 mt-0 relative w-[118.37px]" data-name="Exclude">
        <img alt="" className="block max-w-none size-full" height="119" src={imgExclude} width="118.37" />
      </div>
      <div className="[grid-area:1_/_1] flex h-[85.619px] items-center justify-center ml-[13.852px] mt-[15.741px] relative w-[88.913px]">
        <div className="flex-none rotate-[43.274deg]">
          <div className="bg-white h-[23.071px] w-[100.42px]" />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[87.502px] items-center justify-center ml-[14.722px] mt-[15.111px] relative w-[87.152px]">
        <div className="flex-none rotate-[134.817deg]">
          <div className="bg-white h-[23.071px] w-[100.449px]" />
        </div>
      </div>
    </div>
  );
}

function Group19() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1227.82px] mt-[71px] place-items-start relative">
      <Group1 />
    </div>
  );
}

function Group13() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[158.84px] ml-0 mt-0 relative w-[158px]" data-name="Exclude">
        <img alt="" className="block max-w-none size-full" height="158.84" src={imgExclude1} width="158" />
      </div>
      <div className="[grid-area:1_/_1] flex h-[114.288px] items-center justify-center ml-[18.489px] mt-[21.011px] relative w-[118.686px]">
        <div className="flex-none rotate-[43.274deg]">
          <div className="bg-white h-[30.795px] w-[134.039px]" />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[116.795px] items-center justify-center ml-[19.651px] mt-[20.17px] relative w-[116.328px]">
        <div className="flex-none rotate-[134.817deg]">
          <div className="bg-white h-[30.795px] w-[134.078px]" />
        </div>
      </div>
    </div>
  );
}

function Group20() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1208px] mt-[307px] place-items-start relative">
      <Group13 />
    </div>
  );
}

function TextContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] h-[37px] leading-[24px] not-italic relative shrink-0 text-[32px] text-white w-[589px]">Streamlined booking</p>
      <div className="h-0 relative shrink-0 w-[227px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 227 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" x2="227" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',_sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[21px] text-[rgba(255,255,255,0.8)]" style={{ width: "min-content" }}>
        Simple request-to-book system, no complex integrations.
      </p>
    </div>
  );
}

function Div2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-0 mt-0 relative w-[358px]" data-name="div">
      <TextContent2 />
    </div>
  );
}

function Group14() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Div2 />
    </div>
  );
}

function Group15() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group14 />
    </div>
  );
}

function Group21() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[44px] mt-[333px] place-items-start relative">
      <Group15 />
    </div>
  );
}

function Group16() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[189px] ml-0 mt-0 relative w-[188px]" data-name="Exclude">
        <img alt="" className="block max-w-none size-full" height="189" src={imgExclude2} width="188" />
      </div>
      <div className="[grid-area:1_/_1] flex h-[136.002px] items-center justify-center ml-[22px] mt-[25px] relative w-[141.234px]">
        <div className="flex-none rotate-[43.274deg]">
          <div className="bg-white h-[36.643px] w-[159.49px]" />
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[138.992px] items-center justify-center ml-[23.382px] mt-[24px] relative w-[138.436px]">
        <div className="flex-none rotate-[134.817deg]">
          <div className="bg-white h-[36.643px] w-[159.536px]" />
        </div>
      </div>
    </div>
  );
}

function Group22() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[1193px] mt-[560px] place-items-start relative">
      <Group16 />
    </div>
  );
}

function TextContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[32px] text-white w-[648px]">Grow your practice</p>
      <div className="h-0 relative shrink-0 w-[227px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 227 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" x2="227" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',_sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[21px] text-[rgba(255,255,255,0.8)]" style={{ width: "min-content" }}>
        Expand your reach with women-first healthcare.
      </p>
    </div>
  );
}

function Div3() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-0 mt-0 relative w-[358px]" data-name="div">
      <TextContent3 />
    </div>
  );
}

function Group17() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Div3 />
    </div>
  );
}

function Group25() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group17 />
    </div>
  );
}

function Group8() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <Group25 />
    </div>
  );
}

function Group23() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[44px] mt-[595px] place-items-start relative">
      <Group8 />
    </div>
  );
}

function Group24() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame23 />
      <Group18 />
      <Group19 />
      <Group20 />
      <Group21 />
      <Group22 />
      <Group23 />
    </div>
  );
}

function Frame1618871917() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[45px] items-center left-[17px] top-[959px] w-[1410px]">
      <Frame4 />
      <Group24 />
    </div>
  );
}

function TextContent4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[32px] text-white" style={{ width: "min-content" }}>
        Testimonial
      </p>
      <div className="h-0 relative shrink-0 w-[227px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 227 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" x2="227" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',_sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[21px] text-[rgba(255,255,255,0.8)]" style={{ width: "min-content" }}>
        We connect you with the best care providers.
      </p>
    </div>
  );
}

function Div4() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-[10.096px] mt-[24px] relative w-[278.021px]" data-name="div">
      <TextContent4 />
    </div>
  );
}

function Group26() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[33.394px] mt-[446.5px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[rgba(115,161,255,0.65)] h-[168px] ml-0 mt-0 rounded-[4px] w-[298.213px]" />
      <Div4 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[644px] ml-0 mt-0 relative w-[365px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle2} />
      </div>
      <Group26 />
    </div>
  );
}

function TextContent5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[32px] text-white" style={{ width: "min-content" }}>
        Testimonial
      </p>
      <div className="h-0 relative shrink-0 w-[227px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 227 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" x2="227" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',_sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[21px] text-[rgba(255,255,255,0.8)]" style={{ width: "min-content" }}>
        We connect you with the best care providers.
      </p>
    </div>
  );
}

function Div5() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-[14.429px] mt-[24px] relative w-[397.357px]" data-name="div">
      <TextContent5 />
    </div>
  );
}

function Group27() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[55.497px] mt-[447px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[rgba(115,161,255,0.65)] h-[168px] ml-0 mt-0 rounded-[4px] w-[426.216px]" />
      <Div5 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[645px] ml-0 mt-0 relative w-[525px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
      <Group27 />
    </div>
  );
}

function TextContent6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[32px] text-white" style={{ width: "min-content" }}>
        Testimonial
      </p>
      <div className="h-0 relative shrink-0 w-[227px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 227 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" x2="227" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="font-['Lato:Regular',_sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[21px] text-[rgba(255,255,255,0.8)]" style={{ width: "min-content" }}>
        We connect you with the best care providers.
      </p>
    </div>
  );
}

function Div6() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-[14.417px] mt-[20px] relative w-[397.028px]" data-name="div">
      <TextContent6 />
    </div>
  );
}

function Group28() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[47.688px] mt-[447px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[#2f1463] h-[168px] ml-0 mt-0 rounded-[4px] w-[425.862px]" />
      <Div6 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[644px] ml-0 mt-0 relative w-[521.237px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle3} />
      </div>
      <Group28 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex items-center leading-[0] left-[15px] top-[2175px] w-[1410px]">
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function Heading2Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[16px] pl-0 pr-[45.57px] pt-0 relative shrink-0" data-name="Heading 2:margin">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function Item() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.25px] pt-0 px-0 relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Instagram</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.25px] pl-0 pr-[16.75px] pt-0 relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">LinkedIn</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.25px] pl-0 pr-[71.34px] pt-0 relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">FAQ</p>
      </div>
    </div>
  );
}

function Item3() {
  return <div className="h-[24.25px] shrink-0 w-[41.73px]" data-name="Item" />;
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Section">
      <Heading2Margin />
      <List />
    </div>
  );
}

function Heading2Margin1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[16px] pl-0 pr-[7.66px] pt-0 relative shrink-0" data-name="Heading 2:margin">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Quick Links</p>
    </div>
  );
}

function Item4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.25px] pl-0 pr-[16.82px] pt-0 relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Log In</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.25px] pl-0 pr-[16.82px] pt-0 relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Register</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.25px] pt-0 px-0 relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Contact Us</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[0.25px] pt-0 px-0 relative shrink-0" data-name="Item">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">Become a Provider</p>
      </div>
    </div>
  );
}

function Item8() {
  return <div className="h-[24.25px] shrink-0 w-0" data-name="Item" />;
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function Section1() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[32px] pt-0 px-0 relative self-stretch shrink-0" data-name="Section">
      <Heading2Margin1 />
      <List1 />
    </div>
  );
}

function DivGrid() {
  return (
    <div className="content-stretch flex flex-wrap gap-[80px] items-start relative shrink-0" data-name="div.grid">
      <Section />
      <Section1 />
    </div>
  );
}

function PFontObviously() {
  return (
    <div className="relative shrink-0 w-full" data-name="p.font-obviously">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-0 pr-[126.74px] py-0 relative w-full">
          <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">{`Let's keep in Touch`}</p>
        </div>
      </div>
    </div>
  );
}

function PMb4() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[8px] px-0 relative shrink-0" data-name="p.mb-4">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black w-[358px]">
        <p className="leading-[24px]">Sign up to hear about events, news and updates from Sela.</p>
      </div>
    </div>
  );
}

function PMb4Margin() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-[16px] pt-0 px-0 relative shrink-0" data-name="p.mb-4:margin">
      <PMb4 />
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#placeholder">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">{`Insert your email `}</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="box-border content-stretch flex flex-col h-[50px] items-center justify-between px-[16px] py-[12px] relative shrink-0 w-[360px]" data-name="Input">
      <div aria-hidden="true" className="absolute border-[0.4px] border-black border-solid inset-0 pointer-events-none" />
      <DivPlaceholder />
    </div>
  );
}

function Input1() {
  return (
    <div className="bg-[rgba(115,161,255,0.65)] box-border content-stretch flex h-[52px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-[360px]" data-name="Input">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] max-h-[40px] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] text-center text-nowrap whitespace-pre">SUBMIT</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0" data-name="Form">
      <Input />
      <Input1 />
    </div>
  );
}

function DivFlex() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[384px] relative shrink-0" data-name="div.flex">
      <PFontObviously />
      <PMb4Margin />
      <Form />
    </div>
  );
}

function Frame1618871908() {
  return (
    <div className="content-stretch flex gap-[581px] items-start relative shrink-0 w-[1309px]">
      <DivGrid />
      <DivFlex />
    </div>
  );
}

function Separator() {
  return (
    <div className="h-px relative shrink-0 w-[1458px]" data-name="Separator">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Link() {
  return (
    <div className="box-border content-stretch flex flex-col items-start opacity-80 pb-[0.25px] pt-0 px-0 relative self-stretch shrink-0" data-name="Link">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[24px] underline whitespace-pre">Privacy Terms</p>
      </div>
    </div>
  );
}

function PMrAuto() {
  return (
    <div className="content-stretch flex flex-col items-start opacity-50 relative self-stretch shrink-0" data-name="p.mr-auto">
      <div className="flex flex-col font-['Work_Sans:Light',_sans-serif] font-light justify-center leading-[0] relative shrink-0 text-[16px] text-black text-nowrap">
        <p className="leading-[24px] whitespace-pre">{`Sela© 2025 All rights reserved `}</p>
      </div>
    </div>
  );
}

function DivMt6() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0" data-name="div.mt-6">
      <Link />
      <PMrAuto />
    </div>
  );
}

function Frame1618871909() {
  return (
    <div className="content-stretch flex gap-[464px] items-center relative shrink-0">
      <DivMt6 />
    </div>
  );
}

function Frame1618871910() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-[1440px]">
      <Separator />
      <Frame1618871909 />
    </div>
  );
}

function Section02() {
  return (
    <div className="bg-[#f6edda] box-border content-stretch flex flex-col gap-[48px] h-[482px] items-center px-0 py-[80px] relative shrink-0 w-[1449px]" data-name="Section 02">
      <Frame1618871908 />
      <Frame1618871910 />
    </div>
  );
}

function FooterDesktop() {
  return (
    <div className="absolute content-stretch flex gap-[80px] items-end justify-center left-[4px] top-[2998px] w-[1440px]" data-name="Footer Desktop">
      <Section02 />
    </div>
  );
}

export default function SelaProvider() {
  return (
    <div className="bg-white relative size-full" data-name="Sela - Provider">
      <div className="absolute h-[875px] left-0 top-0 w-[1444px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle4} />
      </div>
      <PersonalOrAgencyWebsiteHeader />
      <Frame20 />
      <Frame1618871917 />
      <Frame21 />
      <FooterDesktop />
    </div>
  );
}