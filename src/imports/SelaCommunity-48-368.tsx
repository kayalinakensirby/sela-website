import imgScreenshot20250911At1107271 from "figma:asset/b6ecf31c8d37542f61d24dbe0a569417ccef703e.png";
import imgRectangle2 from "figma:asset/3cb7d244a82405134488c1a954c8ca60e7fdb64b.png";
import imgRectangle3 from "figma:asset/ff1f1771c07088519d7a680879dfa9b1dd418b4a.png";
import imgRectangle4 from "figma:asset/b06212fe620b12b80e0fb366d1183cd5e47003ba.png";
import imgRectangle5 from "figma:asset/646303927483c329210a49e9847e323bf9e12355.png";

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
    <div className="absolute content-stretch flex gap-[80px] items-end justify-center left-[2px] top-[3199px] w-[1440px]" data-name="Footer Desktop">
      <Section02 />
    </div>
  );
}

function Group13() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] flex flex-col font-['Work_Sans:Light',_sans-serif] font-light h-[37px] justify-center ml-[0.334px] mt-[18.5px] relative text-[#f2f6fa] text-[24px] translate-y-[-50%] w-[395.443px]">
        <p className="leading-[32px]">Insert email</p>
      </div>
      <div className="[grid-area:1_/_1] h-0 ml-0 mt-[53px] relative w-[353px]">
        <div className="absolute bottom-0 left-0 right-0 top-[-2px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 2">
            <line id="Line 2" stroke="var(--stroke-0, white)" strokeWidth="2" x2="353" y1="1" y2="1" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function ButtonLarge1() {
  return (
    <div className="bg-[#2f1463] box-border content-stretch flex h-[60px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-[233px]" data-name="buttonLarge">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] text-center text-nowrap whitespace-pre">Join Community</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0">
      <Group13 />
      <ButtonLarge1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[85px] items-center left-[50px] top-[272px] w-[1344px]">
      <div className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[52px] min-w-full not-italic relative shrink-0 text-[48px] text-[rgba(255,255,255,0.8)] text-center" style={{ width: "min-content" }}>
        <p className="mb-0">{`Stories, insights, `}</p>
        <p>and voices from women’s health</p>
      </div>
      <Frame5 />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[32px] text-white" style={{ width: "min-content" }}>
        Blog
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

function Div() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-[13px] mt-[24px] relative w-[358px]" data-name="div">
      <TextContent />
    </div>
  );
}

function Group1() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[43px] mt-[447px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[rgba(115,161,255,0.65)] h-[168px] ml-0 mt-0 rounded-[4px] w-[384px]" />
      <Div />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[644px] ml-0 mt-0 relative w-[470px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle2} />
      </div>
      <Group1 />
    </div>
  );
}

function TextContent1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[32px] text-white" style={{ width: "min-content" }}>
        Blog
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

function Div1() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-[13px] mt-[24px] relative w-[358px]" data-name="div">
      <TextContent1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[50px] mt-[447px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[rgba(115,161,255,0.65)] h-[168px] ml-0 mt-0 rounded-[4px] w-[384px]" />
      <Div1 />
    </div>
  );
}

function Group3() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[645px] ml-0 mt-0 relative w-[473px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.26%] left-[-4.81%] max-w-none top-0 w-[109.62%]" src={imgRectangle3} />
        </div>
      </div>
      <Group5 />
    </div>
  );
}

function TextContent2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[32px] text-white" style={{ width: "min-content" }}>
        Press
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

function Div2() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-[13px] mt-[20px] relative w-[358px]" data-name="div">
      <TextContent2 />
    </div>
  );
}

function Group6() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[43px] mt-[447px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[rgba(47,20,99,0.65)] h-[168px] ml-0 mt-0 rounded-[4px] w-[384px]" />
      <Div2 />
    </div>
  );
}

function Group4() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[644px] ml-0 mt-0 relative w-[470px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle4} />
      </div>
      <Group6 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center leading-[0] relative shrink-0 w-[1425px]">
      <Group2 />
      <Group3 />
      <Group4 />
    </div>
  );
}

function Frame1618871919() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[10px] py-[24px] relative w-full">
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function TextContent3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[32px] text-white" style={{ width: "min-content" }}>{`Press `}</p>
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

function Div3() {
  return (
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-[13px] mt-[24px] relative w-[358px]" data-name="div">
      <TextContent3 />
    </div>
  );
}

function Group7() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[43px] mt-[447px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[rgba(47,20,99,0.65)] h-[168px] ml-0 mt-0 rounded-[4px] w-[384px]" />
      <Div3 />
    </div>
  );
}

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[644px] ml-0 mt-0 relative w-[470px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle2} />
      </div>
      <Group7 />
    </div>
  );
}

function TextContent4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[32px] text-white" style={{ width: "min-content" }}>
        Blog
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
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-[13px] mt-[24px] relative w-[358px]" data-name="div">
      <TextContent4 />
    </div>
  );
}

function Group9() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[50px] mt-[447px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[rgba(115,161,255,0.65)] h-[168px] ml-0 mt-0 rounded-[4px] w-[384px]" />
      <Div4 />
    </div>
  );
}

function Group10() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[645px] ml-0 mt-0 relative w-[473px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[101.26%] left-[-4.81%] max-w-none top-0 w-[109.62%]" src={imgRectangle3} />
        </div>
      </div>
      <Group9 />
    </div>
  );
}

function TextContent5() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] min-w-full not-italic relative shrink-0 text-[32px] text-white" style={{ width: "min-content" }}>
        Press
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
    <div className="[grid-area:1_/_1] box-border content-stretch flex flex-col gap-[32px] items-start ml-[13px] mt-[20px] relative w-[358px]" data-name="div">
      <TextContent5 />
    </div>
  );
}

function Group11() {
  return (
    <div className="[grid-area:1_/_1] grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] ml-[43px] mt-[447px] place-items-start relative">
      <div className="[grid-area:1_/_1] bg-[rgba(47,20,99,0.65)] h-[168px] ml-0 mt-0 rounded-[4px] w-[384px]" />
      <Div5 />
    </div>
  );
}

function Group12() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[644px] ml-0 mt-0 relative w-[470px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle4} />
      </div>
      <Group11 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center leading-[0] relative shrink-0 w-full">
      <Group8 />
      <Group10 />
      <Group12 />
    </div>
  );
}

function Frame1618871918() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[10px] py-[24px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Frame1618871920() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2px] top-[1167px] w-[1446px]">
      <Frame1618871919 />
      <Frame1618871918 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[52px] not-italic relative shrink-0 text-[48px] text-[rgba(0,0,0,0.8)] text-center w-full">Want to share your story?</p>
    </div>
  );
}

function ButtonLarge2() {
  return (
    <div className="bg-[#2f1463] box-border content-stretch flex h-[68px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="buttonLarge">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">Contact Us</p>
    </div>
  );
}

function TextContent6() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[256px] items-center relative shrink-0 w-full" data-name="textContent">
      <Frame22 />
      <ButtonLarge2 />
    </div>
  );
}

function Div6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[256px] items-center top-[2763px] w-[617px]" data-name="div" style={{ left: "calc(20% + 114.2px)" }}>
      <TextContent6 />
    </div>
  );
}

function TextContent7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="textContent">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[32px] text-[rgba(0,0,0,0.4)] text-center w-full">Real stories, expert insights, and shared wisdom. Explore articles, resources, and conversations designed to support you through every stage of womanhood. Learn, connect, and feel seen.</p>
    </div>
  );
}

function Div7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start top-[888px] translate-x-[-50%] w-[963px]" data-name="div" style={{ left: "calc(45% + 49.7px)" }}>
      <TextContent7 />
    </div>
  );
}

export default function SelaCommunity() {
  return (
    <div className="bg-white relative size-full" data-name="Sela - Community">
      <div className="absolute h-[736px] left-0 top-0 w-[1444px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle5} />
      </div>
      <PersonalOrAgencyWebsiteHeader />
      <FooterDesktop />
      <Frame1 />
      <Frame1618871920 />
      <Div6 />
      <Div7 />
    </div>
  );
}