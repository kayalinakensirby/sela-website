import imgImageSelaLogo from "figma:asset/593e929702c07c3ea84e0d4292a6079407c7d021.png";

function ImageSelaLogo() {
  return (
    <div className="h-[29px] relative shrink-0 w-[66.625px]" data-name="Image (Sela Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageSelaLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[29px] w-[66.625px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[75.602px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.797px] relative w-[75.602px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-1px] uppercase whitespace-pre">Community</p>
      </div>
    </div>
  );
}

function Button1() {
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
    <div className="h-[16px] relative shrink-0 w-[626px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[32px] h-[16px] items-center justify-center relative w-[626px]">
        <Button />
        <Button1 />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="h-[38.797px] relative rounded-[6px] shrink-0 w-[100.805px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38.797px] relative w-[100.805px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[21px] not-italic text-[14px] text-nowrap text-white top-[10px] uppercase whitespace-pre">Sign In</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="basis-0 bg-[rgba(115,161,255,0.9)] grow h-[36.797px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36.797px] relative w-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[20px] not-italic text-[14px] text-nowrap text-white top-[9px] uppercase whitespace-pre">Join Free</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[38.797px] relative shrink-0 w-[228.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[38.797px] items-center relative w-[228.406px]">
        <Button2 />
        <Button3 />
      </div>
    </div>
  );
}

export default function ProviderHeader() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-name="ProviderHeader">
      <ImageSelaLogo />
      <Navigation />
      <Container />
    </div>
  );
}