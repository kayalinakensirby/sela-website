function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start not-italic relative shrink-0 text-center w-full">
      <p className="font-['FONTSPRING_DEMO_-_Deca_Serif_New:Regular',_sans-serif] leading-[52px] relative shrink-0 text-[48px] text-[rgba(0,0,0,0.8)] w-full">HOW IT WORKS</p>
      <p className="font-['PP_Neue_Montreal:Book',_sans-serif] leading-[32px] relative shrink-0 text-[32px] text-[rgba(0,0,0,0.4)] w-full">We connect you with the best care providers...</p>
    </div>
  );
}

function ButtonLarge() {
  return (
    <div className="bg-[#2f1463] box-border content-stretch flex h-[68px] items-center justify-center px-[24px] py-[12px] relative rounded-[4px] shrink-0" data-name="buttonLarge">
      <p className="font-['PP_Neue_Montreal:Book',_sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-[rgba(255,255,255,0.8)] text-center text-nowrap whitespace-pre">Join Free</p>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[256px] items-center relative shrink-0 w-full" data-name="textContent">
      <Frame22 />
      <ButtonLarge />
    </div>
  );
}

function Div() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] h-[256px] items-center relative shrink-0 w-full" data-name="div">
      <TextContent />
    </div>
  );
}

export default function Frame4() {
  return (
    <div className="relative size-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative size-full">
          <Div />
        </div>
      </div>
    </div>
  );
}