import imgScreenshot20250911At1107271 from "figma:asset/b6ecf31c8d37542f61d24dbe0a569417ccef703e.png";
import imgRectangle6 from "figma:asset/6b0b26a055b9e7f833849f360de1cc7e3eb12d5c.png";

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
    <div className="absolute bottom-0 content-stretch flex gap-[80px] items-end justify-center left-0 right-[4px]" data-name="Footer Desktop">
      <Section02 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-white">
      <p className="font-['IBM_Plex_Mono:SemiBold',_sans-serif] leading-[120px] relative shrink-0 text-[64px] text-center text-nowrap whitespace-pre">CONTACT US</p>
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] relative shrink-0 text-[18px] w-[538px]">
        <p className="leading-[24px]">Questions or feedback? We’d love to hear from you.</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-nowrap whitespace-pre">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[32px] text-white">Email</p>
      <p className="font-['Aileron:Regular',_sans-serif] font-['Poppins:Regular',_sans-serif] leading-[24px] relative shrink-0 text-[#f7f7f7] text-[0px] text-[18px] text-white">
        Email
        <span>
          : info@sela.com
          <br aria-hidden="true" />P
        </span>
        hone: +1 55 9155 7610
      </p>
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start not-italic relative shrink-0 text-nowrap text-white whitespace-pre">
      <p className="font-['IBM_Plex_Mono:Medium',_sans-serif] leading-[24px] relative shrink-0 text-[32px]">Socials</p>
      <p className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid font-['Poppins:Regular',_sans-serif] leading-[normal] relative shrink-0 text-[18px] underline">Instagram</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex flex-col gap-[54px] items-start relative shrink-0">
      <Frame82 />
      <Frame81 />
      <Frame85 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Name</p>
      </div>
      <div className="h-[46px] relative shrink-0 w-[563px]">
        <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Email</p>
      </div>
      <div className="h-[46px] relative shrink-0 w-[563px]">
        <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Subject</p>
      </div>
      <div className="h-[46px] relative shrink-0 w-[563px]">
        <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <div className="flex flex-col font-['Aileron:Regular',_sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white">
        <p className="leading-[24px] whitespace-pre">Message (optional)</p>
      </div>
      <div className="h-[165px] relative shrink-0 w-[563px]">
        <div aria-hidden="true" className="absolute border-[0.4px] border-solid border-white inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="bg-[#a1bcf2] box-border content-stretch flex h-[62px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0 w-[115px]">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-center text-nowrap text-white whitespace-pre">SUBMIT</p>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-end relative shrink-0">
      <Frame83 />
      <Frame94 />
      <Frame84 />
      <Frame87 />
      <Frame93 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="absolute content-stretch flex gap-[135px] items-center justify-center left-[104px] top-[278px]">
      <Frame95 />
      <Frame96 />
    </div>
  );
}

export default function SelaContactPage() {
  return (
    <div className="bg-[#f6edda] relative size-full" data-name="Sela - Contact Page">
      <div className="absolute h-[1432px] left-[-16px] top-0 w-[1484px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgRectangle6} />
      </div>
      <PersonalOrAgencyWebsiteHeader />
      <FooterDesktop />
      <Frame97 />
    </div>
  );
}