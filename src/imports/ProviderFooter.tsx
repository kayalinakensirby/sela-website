function Heading3() {
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

function Container() {
  return (
    <div className="h-[41.594px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-0 top-0 w-[310.664px]" data-name="Container">
      <Heading3 />
      <Container />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[16.797px] left-0 top-0 w-[50.406px]" data-name="Button">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-1px] whitespace-pre">Log In</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[16.797px] left-0 top-[24.8px] w-[58.805px]" data-name="Button">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-1px] whitespace-pre">Sign Up</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[16.797px] left-0 top-[49.59px] w-[84px]" data-name="Button">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-1px] whitespace-pre">Contact Us</p>
    </div>
  );
}

function Button3() {
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

function Container2() {
  return (
    <div className="h-[115.984px] relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Link2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-[358.66px] top-0 w-[310.664px]" data-name="Container">
      <Heading4 />
      <Container2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] whitespace-pre">{`Let's keep in Touch`}</p>
    </div>
  );
}

function Paragraph() {
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

function Button4() {
  return (
    <div className="bg-[rgba(115,161,255,0.9)] box-border content-stretch flex h-[40.797px] items-center justify-center px-0 py-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-nowrap text-white uppercase whitespace-pre">Submit</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[103.797px] items-start relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Button4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-[717.33px] top-0 w-[310.664px]" data-name="Container">
      <Heading5 />
      <Paragraph />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[201.797px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container3 />
      <Container5 />
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[109.203px]" data-name="Button">
      <p className="[text-underline-position:from-font] absolute decoration-solid font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-0.5px] underline whitespace-pre">Privacy Terms</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[18.5px] items-start left-[141.2px] top-[0.5px] w-[252px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Sela© 2025 All rights reserved</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[393.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[393.203px]">
        <Button5 />
        <Text />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center justify-between pb-0 pl-0 pr-[634.797px] pt-px relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

export default function ProviderFooter() {
  return (
    <div className="bg-[#f5ecd9] relative size-full" data-name="ProviderFooter">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] items-start pb-0 pt-[96px] px-[24px] relative size-full">
          <Container6 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}