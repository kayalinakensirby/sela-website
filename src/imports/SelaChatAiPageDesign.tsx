import svgPaths from "./svg-micnbb5qsy";
import imgImageSelaLogo from "figma:asset/722ba57c46a3e59b3e750dc8239c93e6d59ce0b6.png";
import imgImageProfile from "figma:asset/186a171053c7c1193c386d7646ce85496afbf26c.png";

function Container() {
  return <div className="absolute bg-[rgba(242,233,255,0.4)] blur-3xl filter left-[80px] rounded-[1.67772e+07px] size-[288px] top-[80px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[rgba(115,161,255,0.3)] blur-3xl filter left-[564px] rounded-[1.67772e+07px] size-[384px] top-[160px]" data-name="Container" />;
}

function AiChatInterface() {
  return (
    <div className="absolute h-[755px] left-0 top-0 w-[1076px]" data-name="AIChatInterface">
      <Container />
      <Container1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d={svgPaths.p1b096080} id="Vector" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
          <path d={svgPaths.p34751d50} id="Vector_2" stroke="var(--stroke-0, #2F1464)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.83333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[14px] shrink-0 size-[52.8px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52.8px]">
        <Icon />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[1.6px] h-[50px] items-center relative shrink-0 w-[54px]" data-name="Container">
      <Button />
    </div>
  );
}

function Icon1() {
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

function Button1() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[14px] shrink-0 size-[52px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-full items-center relative w-[52px]">
        <Button1 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[67px] items-center relative shrink-0 w-full" data-name="Container">
      <Container3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g id="Icon">
          <path d={svgPaths.p29307700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p20baf300} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 13.125H11.6667" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M23.3333 18.9583H11.6667" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M23.3333 24.7917H11.6667" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-gradient-to-r from-[rgba(115,161,255,0.8)] relative rounded-[14px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 size-[52px] to-[rgba(47,20,100,0.8)]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[52px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-full items-center relative w-[52px]">
        <Button2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[67px] items-center relative shrink-0 w-full" data-name="Container">
      <Container5 />
    </div>
  );
}

function Icon3() {
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

function Button3() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[14px] shrink-0 size-[52px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[52px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[52px] items-center relative shrink-0 w-full" data-name="Container">
      <Button3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col h-[52px] items-start relative shrink-0 w-[58px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Container7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-center left-[-0.16px] top-[48px] w-[73.688px]">
      <Container2 />
      <Container4 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[545px] left-[11.16px] top-[113px] w-[73.688px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Icon4() {
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

function Button4() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow min-h-px min-w-px relative rounded-[14px] shrink-0 w-[48px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-full items-center justify-center relative w-[48px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 size-[52px]" data-name="Container">
      <Button4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col h-[52px] items-start left-[23px] top-[646px] w-[50px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none" />
      <Container10 />
    </div>
  );
}

function ImageSelaLogo() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Image (Sela Logo)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageSelaLogo} />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] overflow-clip rounded-[14px] size-[48px] top-[37px]" data-name="Container">
      <ImageSelaLogo />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[755px] left-0 top-0 w-[96px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container9 />
      <Container11 />
      <Container12 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[32px] relative shrink-0 w-[194.758px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[32px] relative w-[194.758px]">
        <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[32px] left-0 not-italic text-[24px] text-black text-nowrap top-0 whitespace-pre">Profile Information</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#73a1ff] h-[44px] relative rounded-[14px] shrink-0 w-[148.805px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[148.805px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[24px] not-italic text-[14px] text-nowrap text-white top-[11.5px] uppercase whitespace-pre">Edit Profile</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[44px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Button5 />
    </div>
  );
}

function ImageProfile() {
  return (
    <div className="h-[160px] relative rounded-[15px] shrink-0 w-full" data-name="Image (Profile)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[15px] size-full" src={imgImageProfile} />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col items-start left-0 overflow-clip shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[160px] top-0" data-name="Container">
      <ImageProfile />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-0.5px] uppercase whitespace-pre">First Name</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-[-0.5px] whitespace-pre">Ashley</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Label />
      <Paragraph />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-0.5px] uppercase whitespace-pre">Last Name</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-[-0.5px] whitespace-pre">Johnson</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Label1 />
      <Paragraph1 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-0.5px] uppercase whitespace-pre">Email</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-[-0.5px] whitespace-pre">ashley.johnson@email.com</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Label2 />
      <Paragraph2 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-0.5px] uppercase whitespace-pre">Phone Number (Optional)</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-[-0.5px] whitespace-pre">(555) 123-4567</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="[grid-area:2_/_2] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Label3 />
      <Paragraph3 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-0.5px] uppercase whitespace-pre">City of Residence</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-[-0.5px] whitespace-pre">Santa Monica, CA</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:3_/_1] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Label4 />
      <Paragraph4 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-0.5px] uppercase whitespace-pre">Insurance</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-[-0.5px] whitespace-pre">Yes</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:3_/_2] content-stretch flex flex-col gap-[12px] items-start relative shrink-0" data-name="Container">
      <Label5 />
      <Paragraph5 />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] h-[244px] left-[208px] top-0 w-[658px]" data-name="Container">
      <Container16 />
      <Container17 />
      <Container18 />
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[244px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[32px] h-[386px] items-start pb-px pt-[33px] px-[33px] relative rounded-[16px] shrink-0 w-[875px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <Container14 />
      <Container23 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[28px] left-[21px] top-[21px] w-[630px]" data-name="Heading 2">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[18px] text-black text-nowrap top-[0.5px] whitespace-pre">Delete Profile</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[45.5px] left-[21px] top-[61px] w-[630px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[22.75px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.8)] top-0 w-[822px]">This action cannot be undone. Deleting your profile will remove all your saved providers, care plans, and personal information.</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[20px] size-[14px] top-[9px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon">
          <path d="M5.83333 6.41667V9.91667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M8.16667 6.41667V9.91667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2d36180} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d="M1.75 3.5H12.25" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
          <path d={svgPaths.p2a45fb00} id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.16667" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#ff7e00] h-[32px] left-[21px] rounded-[16px] top-[107px] w-[162.805px]" data-name="Button">
      <Icon5 />
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] left-[42px] not-italic text-[12px] text-nowrap text-white top-[8px] uppercase whitespace-pre">Delete Profile</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] h-[160px] relative rounded-[14px] shrink-0 w-[875px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,126,0,0.3)] border-solid inset-0 pointer-events-none rounded-[14px]" />
      <Heading2 />
      <Paragraph6 />
      <Button6 />
    </div>
  );
}

function Container26() {
  return (
    <div className="box-border content-stretch flex flex-col h-[225px] items-start pl-0 pr-[260px] py-0 relative shrink-0 w-[875px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container25 />
    </div>
  );
}

function HealthProfilePage() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[48px] h-[1424.75px] items-start overflow-clip pb-0 pt-[32px] px-[24px] relative shrink-0 w-[980px]" data-name="HealthProfilePage">
      <Container24 />
      <Container26 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #73A1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1fa92f00} id="Vector_2" stroke="var(--stroke-0, #73A1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p230c5e00} id="Vector_3" stroke="var(--stroke-0, #73A1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[96px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(115,161,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[2px] relative size-[96px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[28px] left-0 overflow-clip top-0 w-[573.195px]" data-name="Heading 3">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-[-0.5px] whitespace-pre">Prenatal Care Journey</p>
    </div>
  );
}

function Text() {
  return (
    <div className="bg-green-100 h-[24px] relative rounded-[6px] shrink-0 w-[117.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-start px-[12px] py-[4px] relative w-[117.602px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#016630] text-[12px] text-nowrap uppercase whitespace-pre">Comprehensive</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="bg-green-100 h-[24px] relative rounded-[6px] shrink-0 w-[59.016px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[59.016px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#016630] text-[12px] text-nowrap top-[5px] whitespace-pre">Active</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-0 top-[36px] w-[573.195px]" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[40px] left-0 overflow-clip top-[72px] w-[573.195px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[465px]">A complete prenatal care plan covering all three trimesters with provider recommendations and milestone tracking.</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[57.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[57.602px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap uppercase whitespace-pre">Progress</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[21.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[21.609px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-0 w-[22px]">65%</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container30() {
  return <div className="bg-gradient-to-b from-[#73a1ff] h-[8px] rounded-[6px] shrink-0 to-[#2f1464] w-full" data-name="Container" />;
}

function Container31() {
  return (
    <div className="bg-gray-200 h-[8px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[8px] items-start pl-0 pr-[155.68px] py-0 relative w-full">
          <Container30 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[28px] items-start relative w-full">
        <Container29 />
        <Container31 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_542_2666)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_542_2666">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[93px] not-italic text-[#4a5565] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[112.406px]">
        <Icon7 />
        <Text4 />
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[28px] items-center left-0 top-[128px] w-[573.195px]" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="basis-0 grow h-[156px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[156px] relative w-full">
        <Heading1 />
        <Container28 />
        <Paragraph7 />
        <Container34 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#73a1ff] h-[44px] relative rounded-[6px] shrink-0 w-[148.805px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[148.805px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[24px] not-italic text-[14px] text-nowrap text-white top-[11.5px] uppercase whitespace-pre">View Details</p>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[37.2px] size-[16px] top-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0 w-[148.805px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[148.805px]">
        <Icon8 />
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[61.2px] not-italic text-[#e7000b] text-[14px] text-nowrap top-[12.5px] uppercase whitespace-pre">Remove</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[98px] relative shrink-0 w-[148.805px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[98px] items-start relative w-[148.805px]">
        <Button7 />
        <Button8 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[204px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[204px] items-center px-[24px] py-0 relative w-full">
          <Container27 />
          <Container35 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-white h-[206px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[206px] items-start p-px relative w-full">
          <Container37 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #73A1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1fa92f00} id="Vector_2" stroke="var(--stroke-0, #73A1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p230c5e00} id="Vector_3" stroke="var(--stroke-0, #73A1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[96px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(115,161,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[2px] relative size-[96px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[28px] left-0 overflow-clip top-0 w-[573.195px]" data-name="Heading 3">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-[-0.5px] whitespace-pre">Hormonal Balance Protocol</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-purple-100 h-[24px] relative rounded-[6px] shrink-0 w-[81.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-start px-[12px] py-[4px] relative w-[81.602px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#6e11b0] text-[12px] text-nowrap uppercase whitespace-pre">Advanced</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="bg-blue-100 h-[24px] relative rounded-[6px] shrink-0 w-[87.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[87.703px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#193cb8] text-[12px] text-nowrap top-[5px] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-0 top-[36px] w-[573.195px]" data-name="Container">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[40px] left-0 overflow-clip top-[72px] w-[573.195px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[560px]">Personalized plan to address hormonal imbalances through lifestyle changes, nutrition, and provider support.</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[16px] relative shrink-0 w-[57.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[57.602px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap uppercase whitespace-pre">Progress</p>
      </div>
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16px] relative shrink-0 w-[21.609px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[21.609px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-0 w-[22px]">40%</p>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text7 />
      <Text8 />
    </div>
  );
}

function Container42() {
  return <div className="bg-gradient-to-b from-[#73a1ff] h-[8px] rounded-[6px] shrink-0 to-[#2f1464] w-full" data-name="Container" />;
}

function Container43() {
  return (
    <div className="bg-gray-200 h-[8px] relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[8px] items-start pl-0 pr-[266.875px] py-0 relative w-full">
          <Container42 />
        </div>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[28px] items-start relative w-full">
        <Container41 />
        <Container43 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_542_2666)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_542_2666">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[93px] not-italic text-[#4a5565] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">In Progress</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[20px] relative shrink-0 w-[112.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[112.406px]">
        <Icon10 />
        <Text9 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[28px] items-center left-0 top-[128px] w-[573.195px]" data-name="Container">
      <Container44 />
      <Container45 />
    </div>
  );
}

function Container47() {
  return (
    <div className="basis-0 grow h-[156px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[156px] relative w-full">
        <Heading3 />
        <Container40 />
        <Paragraph8 />
        <Container46 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#73a1ff] h-[44px] relative rounded-[6px] shrink-0 w-[148.805px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[148.805px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[24px] not-italic text-[14px] text-nowrap text-white top-[11.5px] uppercase whitespace-pre">View Details</p>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[37.2px] size-[16px] top-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0 w-[148.805px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[148.805px]">
        <Icon11 />
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[61.2px] not-italic text-[#e7000b] text-[14px] text-nowrap top-[12.5px] uppercase whitespace-pre">Remove</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[98px] relative shrink-0 w-[148.805px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[98px] items-start relative w-[148.805px]">
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[204px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[204px] items-center px-[24px] py-0 relative w-full">
          <Container39 />
          <Container47 />
          <Container48 />
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="bg-white h-[206px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[206px] items-start p-px relative w-full">
          <Container49 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #73A1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1fa92f00} id="Vector_2" stroke="var(--stroke-0, #73A1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p230c5e00} id="Vector_3" stroke="var(--stroke-0, #73A1FF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="relative rounded-[6px] shrink-0 size-[96px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(115,161,255,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center p-[2px] relative size-[96px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute h-[28px] left-0 overflow-clip top-0 w-[573.195px]" data-name="Heading 3">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[28px] left-0 not-italic text-[20px] text-black text-nowrap top-[-0.5px] whitespace-pre">Mental Wellness Support</p>
    </div>
  );
}

function Text10() {
  return (
    <div className="bg-blue-100 h-[24px] relative rounded-[6px] shrink-0 w-[60px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[24px] items-start px-[12px] py-[4px] relative w-[60px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#193cb8] text-[12px] text-nowrap uppercase whitespace-pre">Basic</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="bg-purple-100 h-[24px] relative rounded-[6px] shrink-0 w-[85.836px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[85.836px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[16px] left-[12px] not-italic text-[#6e11b0] text-[12px] text-nowrap top-[5px] whitespace-pre">Completed</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-0 top-[36px] w-[573.195px]" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[40px] left-0 overflow-clip top-[72px] w-[573.195px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[#364153] text-[14px] top-[0.5px] tracking-[-0.1504px] w-[556px]">A foundational mental health plan focusing on stress management and emotional well-being.</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[57.602px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16px] items-start relative w-[57.602px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] not-italic relative shrink-0 text-[#4a5565] text-[12px] text-nowrap uppercase whitespace-pre">Progress</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16px] relative shrink-0 w-[28.805px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16px] relative w-[28.805px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16px] left-0 not-italic text-[#4a5565] text-[12px] top-0 w-[29px]">100%</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[16px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container54() {
  return <div className="bg-gradient-to-b from-[#73a1ff] h-[8px] rounded-[6px] shrink-0 to-[#2f1464] w-full" data-name="Container" />;
}

function Container55() {
  return (
    <div className="bg-gray-200 content-stretch flex flex-col h-[8px] items-start relative rounded-[6px] shrink-0 w-full" data-name="Container">
      <Container54 />
    </div>
  );
}

function Container56() {
  return (
    <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[4px] h-[28px] items-start relative w-full">
        <Container53 />
        <Container55 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_542_2666)" id="Icon">
          <path d="M8 4V8L10.6667 9.33333" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39ee6532} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_542_2666">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[68px] not-italic text-[#4a5565] text-[14px] text-nowrap text-right top-[-0.5px] translate-x-[-100%] whitespace-pre">Complete</p>
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[20px] relative shrink-0 w-[87.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[4px] h-[20px] items-center relative w-[87.203px]">
        <Icon13 />
        <Text14 />
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[28px] items-center left-0 top-[128px] w-[573.195px]" data-name="Container">
      <Container56 />
      <Container57 />
    </div>
  );
}

function Container59() {
  return (
    <div className="basis-0 grow h-[156px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[156px] relative w-full">
        <Heading4 />
        <Container52 />
        <Paragraph9 />
        <Container58 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#73a1ff] h-[44px] relative rounded-[6px] shrink-0 w-[148.805px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[148.805px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[24px] not-italic text-[14px] text-nowrap text-white top-[11.5px] uppercase whitespace-pre">View Details</p>
      </div>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[37.2px] size-[16px] top-[15px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6.66667 7.33333V11.3333" id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M9.33333 7.33333V11.3333" id="Vector_2" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p37e28100} id="Vector_3" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M2 4H14" id="Vector_4" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2ffbeb80} id="Vector_5" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[6px] shrink-0 w-[148.805px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#ffc9c9] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-[148.805px]">
        <Icon14 />
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-[61.2px] not-italic text-[#e7000b] text-[14px] text-nowrap top-[12.5px] uppercase whitespace-pre">Remove</p>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="h-[98px] relative shrink-0 w-[148.805px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[98px] items-start relative w-[148.805px]">
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[204px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[24px] h-[204px] items-center px-[24px] py-0 relative w-full">
          <Container51 />
          <Container59 />
          <Container60 />
        </div>
      </div>
    </div>
  );
}

function Container62() {
  return (
    <div className="bg-white h-[206px] relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col h-[206px] items-start p-px relative w-full">
          <Container61 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[650px] items-start relative shrink-0 w-full" data-name="Main Content">
      <Container38 />
      <Container50 />
      <Container62 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] h-[702px] items-start left-[127px] overflow-clip top-[53px] w-[916px]">
      <HealthProfilePage />
      <MainContent />
    </div>
  );
}

function AiChatInterface1() {
  return (
    <div className="absolute h-[755px] left-0 top-0 w-[1076px]" data-name="AIChatInterface">
      <Container13 />
      <Frame1 />
    </div>
  );
}

export default function SelaChatAiPageDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Sela Chat AI Page Design">
      <AiChatInterface />
      <AiChatInterface1 />
    </div>
  );
}