import svgPaths from "./svg-it9k9p826o";
import imgImageHeroBackground from "figma:asset/186a171053c7c1193c386d7646ce85496afbf26c.png";
import imgImageHowWePartnerBackground from "figma:asset/c56ab9aa59cca389f03509616f3154296aa29304.png";
import imgImageHollywoodHillsLandscape from "figma:asset/1ff7f2a1132eb27733190eaeb1bad93f3612ea21.png";
import imgImageSelaLogo from "figma:asset/593e929702c07c3ea84e0d4292a6079407c7d021.png";

function ImageHeroBackground() {
  return (
    <div className="absolute h-[528.5px] left-0 top-0 w-[1076px]" data-name="Image (Hero Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageHeroBackground} />
    </div>
  );
}

function Container() {
  return <div className="absolute bg-[rgba(0,0,0,0.3)] h-[529px] left-0 top-0 w-[1076px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute h-[528.5px] left-0 top-0 w-[1076px]" data-name="Container">
      <ImageHeroBackground />
      <Container />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[52.797px] left-[24px] top-[24px] w-[805.062px]" data-name="Heading 1">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[52.8px] left-[403px] not-italic text-[44px] text-center text-nowrap text-white top-0 translate-x-[-50%] whitespace-pre">Empowering Providers Who Care for Women</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-[90.53px] top-[100.8px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-[336.15px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">You care for women. We care for you.</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[84px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.797px] relative w-[84px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[-1px] uppercase whitespace-pre">APPLY NOW</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.6)] grow min-h-px min-w-px relative shrink-0 w-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full relative w-px">
        <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[0.5px] top-[0.7px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "54", "--transform-inner-height": "0" } as React.CSSProperties}>
          <div className="flex-none rotate-[90deg]">
            <div className="h-0 relative w-[54px]">
              <div className="absolute bottom-[-3.68px] left-0 right-[-0.93%] top-[-3.68px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 8">
                  <path d={svgPaths.p191fec00} fill="var(--stroke-0, white)" fillOpacity="0.6" id="Arrow 1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[8px_6px_0px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[8px] w-[12px]" />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88.797px] items-center left-0 top-0 w-[84px]" data-name="Container">
      <Text />
      <Container2 />
      <Container3 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[88.797px] left-[384.53px] top-[177.3px] w-[84px]" data-name="Button">
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[290.094px] left-[111.47px] top-[151.2px] w-[853.062px]" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Button />
    </div>
  );
}

function ProviderHero() {
  return (
    <div className="h-[528.5px] relative shrink-0 w-full" data-name="ProviderHero">
      <Container1 />
      <Container5 />
    </div>
  );
}

function HowWePartnerSection() {
  return (
    <div className="bg-white h-[229px] relative shrink-0 w-full" data-name="HowWePartnerSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-[538px] not-italic text-[16px] text-[rgba(0,0,0,0.6)] text-center top-[78.5px] translate-x-[-50%] w-[780px]">{`The future of women's healthcare is built with providers like you. Sela is your partner in building the practice you always envisioned—freeing you from the system's grind, connecting you with patients who value your expertise, and giving you the tools to thrive.`}</p>
    </div>
  );
}

function ImageHowWePartnerBackground() {
  return (
    <div className="absolute h-[534.797px] left-0 top-0 w-[1076px]" data-name="Image (How We Partner Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageHowWePartnerBackground} />
    </div>
  );
}

function Container6() {
  return <div className="absolute bg-[rgba(0,0,0,0.08)] h-[535px] left-0 top-[0.5px] w-[1076px]" data-name="Container" />;
}

function Container7() {
  return (
    <div className="absolute h-[534.797px] left-0 top-0 w-[1076px]" data-name="Container">
      <ImageHowWePartnerBackground />
      <Container6 />
    </div>
  );
}

function WhyProvidersChooseSelaSection() {
  return (
    <div className="content-stretch flex h-[34.797px] items-start relative shrink-0 w-full" data-name="WhyProvidersChooseSelaSection">
      <p className="basis-0 capitalize font-['Times:Regular',_sans-serif] grow leading-[34.8px] min-h-px min-w-px not-italic relative shrink-0 text-[29px] text-center text-white">How We Partner</p>
    </div>
  );
}

function WhyProvidersChooseSelaSection1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="WhyProvidersChooseSelaSection">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-[514.16px] not-italic text-[16px] text-[rgba(255,255,255,0.6)] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">Sela supports your practice by:</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[66.797px] items-start relative shrink-0 w-full" data-name="Container">
      <WhyProvidersChooseSelaSection />
      <WhyProvidersChooseSelaSection1 />
    </div>
  );
}

function WhyProvidersChooseSelaSection2() {
  return <div className="absolute h-[340px] left-0 rounded-[10px] top-0 w-[332px]" data-name="WhyProvidersChooseSelaSection" />;
}

function Container9() {
  return <div className="absolute bg-[#e7e3a4] left-0 rounded-[1.67772e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="absolute h-[21px] left-[16px] top-0 w-[234.195px]" data-name="Text">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] whitespace-pre">Tech-enabled scheduling and follow-up</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Container9 />
      <Text1 />
    </div>
  );
}

function Container10() {
  return <div className="absolute bg-[#e7e3a4] left-0 rounded-[1.67772e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text2() {
  return (
    <div className="absolute h-[40px] left-[16px] top-[-0.3px] w-[234px]" data-name="Text">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[15px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[5px] w-[267px]">Patient education handled before appointments</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[35px] relative shrink-0 w-full" data-name="List Item">
      <Container10 />
      <Text2 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[#e7e3a4] left-0 rounded-[1.67772e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text3() {
  return (
    <div className="absolute h-[21px] left-[16px] top-0 w-[234.195px]" data-name="Text">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] text-nowrap top-[0.5px] whitespace-pre">More time for meaningful clinical work</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Container11 />
      <Text3 />
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[216px] w-[284px]" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[14.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.797px] items-start relative w-[14.406px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[#73a1ff] text-[12px] text-nowrap whitespace-pre">01</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#ffff8d] box-border content-stretch flex items-center justify-center left-[272px] opacity-75 p-[2px] rounded-[1.67772e+07px] size-[40px] top-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#ffff8d] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Text4 />
    </div>
  );
}

function WhyProvidersChooseSelaSection3() {
  return (
    <div className="absolute h-[340px] left-0 top-0 w-[332px]" data-name="WhyProvidersChooseSelaSection">
      <List />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0)] overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <WhyProvidersChooseSelaSection2 />
      <WhyProvidersChooseSelaSection3 />
    </div>
  );
}

function WhyProvidersChooseSelaSection4() {
  return <div className="absolute h-[340px] left-0 rounded-[10px] top-0 w-[332px]" data-name="WhyProvidersChooseSelaSection" />;
}

function Container14() {
  return <div className="absolute bg-[#e7e3a4] left-0 rounded-[1.67772e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text5() {
  return (
    <div className="absolute h-[21px] left-[16px] top-0 w-[234.195px]" data-name="Text">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[15px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.7px] w-[280px]">Patients who specifically seek your philosophy of care</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="List Item">
      <Container14 />
      <Text5 />
    </div>
  );
}

function Container15() {
  return <div className="absolute bg-[#e7e3a4] left-0 rounded-[1.67772e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text6() {
  return (
    <div className="absolute h-[40px] left-[16px] top-[-0.3px] w-[234px]" data-name="Text">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[15px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.7px] w-[267px]">Reduced no-shows through better engagement</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="List Item">
      <Container15 />
      <Text6 />
    </div>
  );
}

function Container16() {
  return <div className="absolute bg-[#e7e3a4] left-0 rounded-[1.67772e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text7() {
  return (
    <div className="absolute h-[21px] left-[16px] top-0 w-[234.195px]" data-name="Text">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[15px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.7px] w-[273px]">Build your practice with women who value what you offer</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Container16 />
      <Text7 />
    </div>
  );
}

function List1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[216px] w-[284px]" data-name="List">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Text8() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[14.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.797px] items-start relative w-[14.406px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[#73a1ff] text-[12px] text-nowrap whitespace-pre">02</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#ffff8d] box-border content-stretch flex items-center justify-center left-[272px] opacity-75 p-[2px] rounded-[1.67772e+07px] size-[40px] top-[20px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#ffff8d] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Text8 />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[24px] top-[163.7px]">
      <div className="absolute h-[33px] left-[24px] rounded-[20px] top-[163.7px] w-[296px]">
        <div aria-hidden="true" className="absolute border border-[#e7e3a4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="absolute capitalize font-['Times:Regular',_sans-serif] leading-[23.4px] left-[33px] not-italic text-[18px] text-white top-[168.7px] w-[292px]">Connecting You with Aligned Patients</p>
    </div>
  );
}

function WhyProvidersChooseSelaSection5() {
  return (
    <div className="absolute h-[340px] left-0 top-0 w-[332px]" data-name="WhyProvidersChooseSelaSection">
      <List1 />
      <Container17 />
      <Group32 />
    </div>
  );
}

function Container18() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0)] overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <WhyProvidersChooseSelaSection4 />
      <WhyProvidersChooseSelaSection5 />
    </div>
  );
}

function WhyProvidersChooseSelaSection6() {
  return <div className="absolute h-[340px] left-0 rounded-[10px] top-0 w-[332px]" data-name="WhyProvidersChooseSelaSection" />;
}

function Container19() {
  return <div className="absolute bg-[#e7e3a4] left-0 rounded-[1.67772e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text9() {
  return (
    <div className="absolute h-[21px] left-[16px] top-0 w-[234.195px]" data-name="Text">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.7px] w-[280px]">AI-assisted patient triage</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Container19 />
      <Text9 />
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-[#e7e3a4] left-0 rounded-[1.67772e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text10() {
  return (
    <div className="absolute h-[40px] left-[16px] top-[-0.3px] w-[234px]" data-name="Text">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[15px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.7px] w-[267px]">Direct patient access through Sela platform</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[31px] relative shrink-0 w-full" data-name="List Item">
      <Container20 />
      <Text10 />
    </div>
  );
}

function Container21() {
  return <div className="absolute bg-[#e7e3a4] left-0 rounded-[1.67772e+07px] size-[6px] top-[8px]" data-name="Container" />;
}

function Text11() {
  return (
    <div className="absolute h-[21px] left-[16px] top-0 w-[234.195px]" data-name="Text">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.7)] top-[0.7px] w-[273px]">Premium service opportunities</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="List Item">
      <Container21 />
      <Text11 />
    </div>
  );
}

function List2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[24px] top-[216px] w-[284px]" data-name="List">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Group34() {
  return (
    <div className="absolute contents left-[24px] top-[163.7px]">
      <div className="absolute h-[33px] left-[24px] rounded-[20px] top-[163.7px] w-[189px]">
        <div aria-hidden="true" className="absolute border border-[#e7e3a4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="absolute capitalize font-['Times:Regular',_sans-serif] leading-[23.4px] left-[33px] not-italic text-[18px] text-white top-[168.7px] w-[292px]">Revenue Opportunities</p>
    </div>
  );
}

function WhyProvidersChooseSelaSection7() {
  return (
    <div className="absolute h-[340px] left-0 top-0 w-[332px]" data-name="WhyProvidersChooseSelaSection">
      <List2 />
      <Group34 />
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:1_/_3] bg-[rgba(255,255,255,0)] overflow-clip relative rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0" data-name="Container">
      <WhyProvidersChooseSelaSection6 />
      <WhyProvidersChooseSelaSection7 />
    </div>
  );
}

function Container23() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[696px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container18 />
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[32px] h-[438.797px] items-start left-0 px-[24px] py-0 top-[48px] w-[1076px]" data-name="Container">
      <Container8 />
      <Container23 />
    </div>
  );
}

function WhyProvidersChooseSelaSection8() {
  return (
    <div className="h-[534.797px] overflow-clip relative shrink-0 w-full" data-name="WhyProvidersChooseSelaSection">
      <Container7 />
      <Container24 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[34.797px] items-start left-[114px] top-[96px] w-[848px]" data-name="Heading 2">
      <p className="basis-0 font-['Times:Regular',_sans-serif] grow leading-[34.8px] min-h-px min-w-px not-italic relative shrink-0 text-[29px] text-[rgba(0,0,0,0.8)] text-center">Apply Now</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-[114px] top-[146.8px] w-[848px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-[423.66px] not-italic text-[16px] text-[rgba(0,0,0,0.6)] text-center text-nowrap top-[-0.5px] translate-x-[-50%] whitespace-pre">Free to join (you only pay a small fee when you receive patients).</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute h-[58px] left-[73px] top-[-0.09px] w-[525px]" data-name="Email Input">
      <div className="box-border content-stretch flex h-[58px] items-center overflow-clip px-[4px] py-[16px] relative rounded-[inherit] w-[525px]">
        <p className="font-['Helvetica:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] text-nowrap whitespace-pre">Insert email</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[58px] left-[77px] top-[89.91px] w-[521px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[58px] items-center overflow-clip px-[4px] py-[16px] relative rounded-[inherit] w-[521px]">
        <p className="font-['Helvetica:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] text-nowrap whitespace-pre">Specialty</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function UrlInput() {
  return (
    <div className="absolute h-[58px] left-[77px] top-[179.91px] w-[521px]" data-name="URL Input">
      <div className="box-border content-stretch flex h-[58px] items-center overflow-clip px-[4px] py-[16px] relative rounded-[inherit] w-[521px]">
        <p className="font-['Helvetica:Regular',_sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.5)] text-nowrap whitespace-pre">Insert website</p>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_2px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#ffff8d] h-[48.797px] left-[266.19px] rounded-[6px] top-[270px] w-[139.602px]" data-name="Button">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[43.8px] not-italic text-[14px] text-black text-nowrap top-[14.91px] uppercase whitespace-pre">SUBMIT</p>
    </div>
  );
}

function Form() {
  return (
    <div className="absolute h-[318.797px] left-[202px] top-[218.8px] w-[672px]" data-name="Form">
      <EmailInput />
      <TextInput />
      <UrlInput />
      <Button1 />
    </div>
  );
}

function ApplyNowSection() {
  return (
    <div className="bg-white h-[633.594px] relative shrink-0 w-full" data-name="ApplyNowSection">
      <Heading2 />
      <Paragraph1 />
      <Form />
    </div>
  );
}

function ImageHollywoodHillsLandscape() {
  return (
    <div className="absolute h-[459.594px] left-0 top-0 w-[1076px]" data-name="Image (Hollywood Hills landscape)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageHollywoodHillsLandscape} />
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[459.594px] left-0 top-0 w-[1076px]" data-name="Container" />;
}

function Container26() {
  return (
    <div className="absolute h-[459.594px] left-0 top-0 w-[1076px]" data-name="Container">
      <ImageHollywoodHillsLandscape />
      <Container25 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex h-[34.797px] items-start left-[24px] top-0 w-[848px]" data-name="Heading 2">
      <p className="basis-0 font-['Times:Regular',_sans-serif] grow leading-[34.8px] min-h-px min-w-px not-italic relative shrink-0 text-[29px] text-center text-white">Become a Founding Provider</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[48px] left-[112px] top-[58.8px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-[336px] not-italic text-[16px] text-[rgba(255,255,255,0.8)] text-center top-[0.31px] translate-x-[-50%] w-[562px]">{`Become one of LA's first Sela providers — receive preferred launch placement & help shape the platform.`}</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(115,161,255,0.9)] h-[48px] left-[311px] rounded-[6px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[155.11px] w-[274px]" data-name="Button">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[32px] not-italic text-[14px] text-nowrap text-white top-[15px] uppercase whitespace-pre">Join the LA Founding TEAM</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[311px] top-[155.11px]">
      <Button2 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[203.594px] left-[90px] top-[128px] w-[896px]" data-name="Container">
      <Heading4 />
      <Paragraph2 />
      <Group33 />
    </div>
  );
}

function FoundingProviderSection() {
  return (
    <div className="h-[459.594px] relative shrink-0 w-full" data-name="FoundingProviderSection">
      <Container26 />
      <Container27 />
    </div>
  );
}

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

function Container28() {
  return (
    <div className="h-[41.594px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-0 top-0 w-[310.664px]" data-name="Container">
      <Heading3 />
      <Container28 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[16.797px] left-0 top-0 w-[50.406px]" data-name="Button">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-1px] whitespace-pre">Log In</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[16.797px] left-0 top-[24.8px] w-[58.805px]" data-name="Button">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-1px] whitespace-pre">Sign Up</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute h-[16.797px] left-0 top-[49.59px] w-[84px]" data-name="Button">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-1px] whitespace-pre">Contact Us</p>
    </div>
  );
}

function Button6() {
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

function Container30() {
  return (
    <div className="h-[115.984px] relative shrink-0 w-full" data-name="Container">
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Link2 />
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-[358.66px] top-0 w-[310.664px]" data-name="Container">
      <Heading5 />
      <Container30 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] whitespace-pre">{`Let's keep in Touch`}</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] top-[0.5px] w-[301px]">Sign up to hear about events, news and updates from Sela.</p>
    </div>
  );
}

function EmailInput1() {
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

function Button7() {
  return (
    <div className="bg-[rgba(115,161,255,0.9)] box-border content-stretch flex h-[40.797px] items-center justify-center px-0 py-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-nowrap text-white uppercase whitespace-pre">Submit</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[103.797px] items-start relative shrink-0 w-full" data-name="Container">
      <EmailInput1 />
      <Button7 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-[717.33px] top-0 w-[310.664px]" data-name="Container">
      <Heading6 />
      <Paragraph3 />
      <Container32 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[201.797px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Container31 />
      <Container33 />
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[109.203px]" data-name="Button">
      <p className="[text-underline-position:from-font] absolute decoration-solid font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap top-[-0.5px] underline whitespace-pre">Privacy Terms</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[18.5px] items-start left-[141.2px] top-[0.5px] w-[252px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Sela© 2025 All rights reserved</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[20px] relative shrink-0 w-[393.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[393.203px]">
        <Button8 />
        <Text12 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center justify-between pb-0 pl-0 pr-[634.797px] pt-px relative w-full">
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function ProviderFooter() {
  return (
    <div className="bg-[#f5ecd9] h-[494.797px] relative shrink-0 w-full" data-name="ProviderFooter">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[494.797px] items-start pb-0 pt-[96px] px-[24px] relative w-full">
          <Container34 />
          <Container36 />
        </div>
      </div>
    </div>
  );
}

function ProviderPageNew() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[2880px] items-start left-0 top-0 w-[1076px]" data-name="ProviderPageNew">
      <ProviderHero />
      <HowWePartnerSection />
      <WhyProvidersChooseSelaSection8 />
      <ApplyNowSection />
      <FoundingProviderSection />
      <ProviderFooter />
    </div>
  );
}

function ImageSelaLogo() {
  return (
    <div className="h-[29px] relative shrink-0 w-[66.625px]" data-name="Image (Sela Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgImageSelaLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[29px] w-[66.625px]" />
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[75.602px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.797px] relative w-[75.602px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] text-nowrap top-[-1px] uppercase whitespace-pre">Community</p>
      </div>
    </div>
  );
}

function Button10() {
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
        <Button9 />
        <Button10 />
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="h-[38.797px] relative rounded-[6px] shrink-0 w-[100.805px]" data-name="Button">
      <div aria-hidden="true" className="absolute border-0 border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[38.797px] relative w-[100.805px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[21px] not-italic text-[14px] text-nowrap text-white top-[10px] uppercase whitespace-pre">Sign In</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="basis-0 bg-[rgba(115,161,255,0.9)] grow h-[36.797px] min-h-px min-w-px relative rounded-[6px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[36.797px] relative w-full">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[20px] not-italic text-[14px] text-nowrap text-white top-[9px] uppercase whitespace-pre">Join Free</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[38.797px] relative shrink-0 w-[228.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[12px] h-[38.797px] items-center relative w-[228.406px]">
        <Button11 />
        <Button12 />
      </div>
    </div>
  );
}

function ProviderHeader() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-between left-[24px] top-[24px] w-[1028px]" data-name="ProviderHeader">
      <ImageSelaLogo />
      <Navigation />
      <Container37 />
    </div>
  );
}

function Group31() {
  return (
    <div className="absolute contents left-[48px] top-[1068px]">
      <div className="absolute h-[33px] left-[48px] rounded-[20px] top-[1068px] w-[261px]">
        <div aria-hidden="true" className="absolute border border-[#e7e3a4] border-solid inset-0 pointer-events-none rounded-[20px]" />
      </div>
      <p className="absolute capitalize font-['Times:Regular',_sans-serif] leading-[23.4px] left-[58px] not-italic text-[18px] text-white top-[1073px] w-[249px]">Reducing Administrative Burden</p>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[14.406px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[16.797px] items-start relative w-[14.406px]">
        <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[#73a1ff] text-[12px] text-nowrap whitespace-pre">03</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#ffff8d] box-border content-stretch flex items-center justify-center left-[992px] opacity-75 p-[2px] rounded-[1.67772e+07px] size-[40px] top-[924.3px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#ffff8d] border-solid inset-0 pointer-events-none rounded-[1.67772e+07px]" />
      <Text13 />
    </div>
  );
}

export default function SelaProvidersPageDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Sela Providers Page Design">
      <ProviderPageNew />
      <ProviderHeader />
      <Group31 />
      <Container38 />
    </div>
  );
}