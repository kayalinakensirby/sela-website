import imgRectangle6 from "figma:asset/6b0b26a055b9e7f833849f360de1cc7e3eb12d5c.png";
import imgRectangle7 from "figma:asset/91ccaaf048ef9927f58ce87d55380950956037ad.png";
import imgRectangle8 from "figma:asset/7a208be52b4a48d89f8244cb40b3da294b24edf9.png";
import imgExclude from "figma:asset/b1f95d7de1aebdbfe2ca172ad19413453d46fa67.png";
import imgExclude1 from "figma:asset/bcdf4511bf05da590338b8f83f6d22499eea490b.png";
import imgExclude2 from "figma:asset/781c02a8a6edb14bb850d18fe62d181284d5bb96.png";

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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[663.92%] left-[-0.05%] max-w-none top-[-425.33%] w-full" src={imgRectangle7} />
        </div>
      </div>
    </div>
  );
}

function Group9() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] h-[262px] ml-0 mt-0 relative w-[1410px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[672.71%] left-0 max-w-none top-[-395.73%] w-full" src={imgRectangle8} />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-0 top-0 w-[1410px]">
      <Group5 />
      <Group11 />
      <Group9 />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[32px] text-white w-[443px]">Create Free Profile</p>
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

function Div() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[36px] top-[71px] w-[358px]" data-name="div">
      <TextContent />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[36px] top-[71px]">
      <Div />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[36px] top-[71px]">
      <Group10 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[36px] top-[71px]">
      <Group13 />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] h-[37px] leading-[24px] not-italic relative shrink-0 text-[32px] text-white w-[589px]">Match with Trusted Providers</p>
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

function Div1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[36px] top-[333px] w-[358px]" data-name="div">
      <TextContent1 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[36px] top-[333px]">
      <Div1 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[36px] top-[333px]">
      <Group18 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[36px] top-[333px]">
      <Group19 />
    </div>
  );
}

function TextContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[32px] text-white w-[648px]">{`Access Care Plans & Resources`}</p>
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

function Div2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[36px] top-[595px] w-[358px]" data-name="div">
      <TextContent2 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[36px] top-[595px]">
      <Div2 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[36px] top-[595px]">
      <Group20 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[36px] top-[595px]">
      <Group21 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[36px] top-[595px]">
      <Group8 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[1219.82px] top-[71px]">
      <div className="absolute h-[119px] left-[1219.82px] top-[71px] w-[118.37px]" data-name="Exclude">
        <img alt="" className="block max-w-none size-full" height="119" src={imgExclude} width="118.37" />
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[1219.82px] top-[71px]">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[1200px] top-[307px]">
      <div className="absolute h-[158.84px] left-[1200px] top-[307px] w-[158px]" data-name="Exclude">
        <img alt="" className="block max-w-none size-full" height="158.84" src={imgExclude1} width="158" />
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[1200px] top-[307px]">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[1185px] top-[560px]">
      <div className="absolute h-[189px] left-[1185px] top-[560px] w-[188px]" data-name="Exclude">
        <img alt="" className="block max-w-none size-full" height="189" src={imgExclude2} width="188" />
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[1185px] top-[560px]">
      <Group3 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[36px] top-[71px]">
      <Group17 />
      <Group12 />
      <Group22 />
      <Group14 />
      <Group15 />
      <Group16 />
    </div>
  );
}

export default function Group27() {
  return (
    <div className="relative size-full">
      <Frame3 />
      <Group26 />
    </div>
  );
}