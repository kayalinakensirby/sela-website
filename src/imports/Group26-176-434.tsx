import imgRectangle6 from "figma:asset/6b0b26a055b9e7f833849f360de1cc7e3eb12d5c.png";
import imgRectangle7 from "figma:asset/91ccaaf048ef9927f58ce87d55380950956037ad.png";
import imgRectangle8 from "figma:asset/7a208be52b4a48d89f8244cb40b3da294b24edf9.png";
import imgExclude from "figma:asset/43603895f5c4987314dfd3eaa5d89f1fdbbf5892.png";
import imgExclude1 from "figma:asset/2f2199ea7606f0c95e26d329481011f03b5d9c0c.png";
import imgExclude2 from "figma:asset/eec64a2a099f8ae1d47a92b0498a7478f044b18c.png";

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative">
      <div className="[grid-area:1_/_1] h-[262px] ml-0 mt-0 relative rounded-tl-[20px] rounded-tr-[20px] w-[1237px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-tl-[20px] rounded-tr-[20px] size-full" src={imgRectangle6} />
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
      <div className="[grid-area:1_/_1] h-[262px] ml-0 mt-0 relative w-[1237px]">
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
      <div className="[grid-area:1_/_1] h-[262px] ml-0 mt-0 relative rounded-bl-[20px] rounded-br-[20px] w-[1237px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[20px] rounded-br-[20px]">
          <img alt="" className="absolute h-[672.71%] left-0 max-w-none top-[-395.73%] w-full" src={imgRectangle8} />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start leading-[0] left-0 rounded-[20px] top-0 w-[1237px]">
      <Group5 />
      <Group11 />
      <Group9 />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['FONTSPRING_DEMO_-_Deca_Serif_New:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[32px] text-white uppercase w-[443px]">Create Free Profile</p>
      <div className="h-0 relative shrink-0 w-[227px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 227 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" x2="227" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="font-['PP_Neue_Montreal:Book',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.9)] w-[339px]">We connect you with the best care providers.</p>
    </div>
  );
}

function Div() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[31.58px] top-[71px] w-[314.075px]" data-name="div">
      <TextContent />
    </div>
  );
}

function Group10() {
  return (
    <div className="absolute contents left-[31.58px] top-[71px]">
      <Div />
    </div>
  );
}

function Group13() {
  return (
    <div className="absolute contents left-[31.58px] top-[71px]">
      <Group10 />
    </div>
  );
}

function Group17() {
  return (
    <div className="absolute contents left-[31.58px] top-[71px]">
      <Group13 />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['FONTSPRING_DEMO_-_Deca_Serif_New:Regular',_sans-serif] h-[37px] leading-[24px] not-italic relative shrink-0 text-[32px] text-white uppercase w-[589px]">Match with Trusted Providers</p>
      <div className="h-0 relative shrink-0 w-[227px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 227 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" x2="227" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="font-['PP_Neue_Montreal:Book',_sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.9)] w-[min-content]">We connect you with the best care providers.</p>
    </div>
  );
}

function Div1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[31.58px] top-[333px] w-[314.075px]" data-name="div">
      <TextContent1 />
    </div>
  );
}

function Group18() {
  return (
    <div className="absolute contents left-[31.58px] top-[333px]">
      <Div1 />
    </div>
  );
}

function Group19() {
  return (
    <div className="absolute contents left-[31.58px] top-[333px]">
      <Group18 />
    </div>
  );
}

function Group12() {
  return (
    <div className="absolute contents left-[31.58px] top-[333px]">
      <Group19 />
    </div>
  );
}

function TextContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['FONTSPRING_DEMO_-_Deca_Serif_New:Regular',_sans-serif] leading-[24px] not-italic relative shrink-0 text-[32px] text-white uppercase w-[648px]">{`Access Care Plans & Resources`}</p>
      <div className="h-0 relative shrink-0 w-[227px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 227 2">
            <line id="Line 1" stroke="var(--stroke-0, white)" strokeWidth="2" x2="227" y1="1" y2="1" />
          </svg>
        </div>
      </div>
      <p className="font-['PP_Neue_Montreal:Book',_sans-serif] leading-[32px] min-w-full not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.9)] w-[min-content]">We connect you with the best care providers.</p>
    </div>
  );
}

function Div2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[31.58px] top-[595px] w-[314.075px]" data-name="div">
      <TextContent2 />
    </div>
  );
}

function Group20() {
  return (
    <div className="absolute contents left-[31.58px] top-[595px]">
      <Div2 />
    </div>
  );
}

function Group21() {
  return (
    <div className="absolute contents left-[31.58px] top-[595px]">
      <Group20 />
    </div>
  );
}

function Group8() {
  return (
    <div className="absolute contents left-[31.58px] top-[595px]">
      <Group21 />
    </div>
  );
}

function Group22() {
  return (
    <div className="absolute contents left-[31.58px] top-[595px]">
      <Group8 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[1066.64px] top-[74.77px]">
      <div className="absolute h-[111.5px] left-[1066.64px] top-[74.77px] w-[110.832px]" data-name="Exclude">
        <img alt="" className="block max-w-none size-full" height="111.5" src={imgExclude} width="110.832" />
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="absolute contents left-[1066.64px] top-[74.77px]">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[1048.08px] top-[312.03px]">
      <div className="absolute h-[148.779px] left-[1048.08px] top-[312.03px] w-[147.987px]" data-name="Exclude">
        <img alt="" className="block max-w-none size-full" height="148.779" src={imgExclude1} width="147.987" />
      </div>
    </div>
  );
}

function Group15() {
  return (
    <div className="absolute contents left-[1048.08px] top-[312.03px]">
      <Group2 />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[1028.45px] top-[571.98px]">
      <div className="absolute h-[177.023px] left-[1028.45px] top-[571.98px] w-[176.092px]" data-name="Exclude">
        <img alt="" className="block max-w-none size-full" height="177.023" src={imgExclude2} width="176.092" />
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="absolute contents left-[1028.45px] top-[571.98px]">
      <Group3 />
    </div>
  );
}

function Group26() {
  return (
    <div className="absolute contents left-[31.58px] top-[71px]">
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