import svgPaths from "./svg-jasn3vhpjd";
import imgImageCommunityHeroBackground from "figma:asset/126809036d65724d99ff4dc4ed28b34d6fdb2e12.png";
import imgImageBlog from "figma:asset/3cb7d244a82405134488c1a954c8ca60e7fdb64b.png";
import imgImageBlog1 from "figma:asset/ff1f1771c07088519d7a680879dfa9b1dd418b4a.png";
import imgImagePress from "figma:asset/b06212fe620b12b80e0fb366d1183cd5e47003ba.png";
import imgImageSelaLogo from "figma:asset/593e929702c07c3ea84e0d4292a6079407c7d021.png";

function ImageCommunityHeroBackground() {
  return (
    <div className="absolute h-[768px] left-0 top-0 w-[1076px]" data-name="Image (Community Hero Background)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageCommunityHeroBackground} />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[768px] left-0 top-0 w-[1076px]" data-name="Container">
      <ImageCommunityHeroBackground />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute font-['Times:Regular',_sans-serif] h-[105.594px] leading-[52.8px] left-[24px] not-italic text-[44px] text-center text-nowrap text-white top-0 w-[516.297px] whitespace-pre" data-name="Heading 1">
      <p className="absolute left-[258.5px] top-0 translate-x-[-50%]">When women come together,</p>
      <p className="absolute left-[258.32px] top-[52.8px] translate-x-[-50%]">we are unstoppable.</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[24px] left-[24px] top-[129.59px] w-[516.297px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[24px] left-[258.16px] not-italic text-[16px] text-center text-nowrap text-white top-[-0.5px] translate-x-[-50%] whitespace-pre">Sometimes we need an expert opinion. Sometimes we need each other.</p>
    </div>
  );
}

function Form() {
  return <div className="absolute h-[225.297px] left-[26.15px] top-[201.59px] w-[512px]" data-name="Form" />;
}

function Text() {
  return (
    <div className="h-[16.797px] relative shrink-0 w-[84px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[16.797px] relative w-[84px]">
        <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[-1px] uppercase whitespace-pre">Read blogs</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.6)] grow min-h-px min-w-px relative shrink-0 w-px" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-full w-px" />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[8px] relative shrink-0 w-[12px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[8px_6px_0px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[8px] w-[12px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[88.797px] items-center left-0 top-0 w-[84px]" data-name="Container">
      <Text />
      <Container1 />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "49", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[49px]">
            <div className="absolute bottom-[-7.36px] left-0 right-[-2.04%] top-[-7.36px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 50 16">
                <path d={svgPaths.p34ad7000} fill="var(--stroke-0, white)" fillOpacity="0.6" id="Arrow 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Container2 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[88.797px] left-[240.15px] top-[479.39px] w-[84px]" data-name="Button">
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[568.188px] left-[255.85px] top-[176px] w-[564.297px]" data-name="Container">
      <Heading1 />
      <Paragraph />
      <Form />
      <Button />
    </div>
  );
}

function CommunityHero() {
  return (
    <div className="h-[840.188px] relative shrink-0 w-full" data-name="CommunityHero">
      <Container />
      <Container4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[23.398px] left-[114px] top-[-0.19px] w-[848px]" data-name="Heading 2">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[34.8px] left-[424.79px] not-italic text-[29px] text-[rgba(0,0,0,0.8)] text-center text-nowrap top-[-1px] translate-x-[-50%] whitespace-pre">Stories, insights, and voices from our community</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[72px] left-[154px] top-[49.81px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] h-[116px] leading-[24px] left-[384.5px] not-italic text-[16px] text-[rgba(0,0,0,0.7)] text-center top-[-1px] translate-x-[-50%] w-[757px]">For generations, women have cared for each other in community. Sela is creating space for that to happen. Join our Sela Communities — where we can come to discuss challenges, triumphs, and the uncomfortable in between.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#7aa1f5] h-[49px] left-[calc(50%+0.5px)] rounded-[12px] top-[calc(50%+76.313px)] translate-x-[-50%] translate-y-[-50%] w-[161px]" data-name="Button">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[13px] not-italic text-[14px] text-nowrap text-white top-[16px] uppercase whitespace-pre">SHARE YOUR STORY</p>
    </div>
  );
}

function Group42() {
  return (
    <div className="absolute contents left-[calc(50%+0.5px)] top-[calc(50%+76.313px)] translate-x-[-50%] translate-y-[-50%]">
      <Button1 />
    </div>
  );
}

function CombinedTextSection() {
  return (
    <div className="bg-white h-[202px] relative shrink-0 w-full" data-name="CombinedTextSection">
      <Heading2 />
      <Paragraph1 />
      <Group42 />
    </div>
  );
}

function ImageBlog() {
  return (
    <div className="absolute h-[644px] left-0 top-0 w-[342.664px]" data-name="Image (Blog)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBlog} />
    </div>
  );
}

function Container5() {
  return <div className="absolute bg-[rgba(0,0,0,0.2)] h-[644px] left-0 top-0 w-[342.664px]" data-name="Container" />;
}

function Text1() {
  return (
    <div className="bg-[#73a1ff] box-border content-stretch flex h-[29px] items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase whitespace-pre">Blog</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[231px]">
      <p className="capitalize font-['Times:Regular',_sans-serif] leading-[23.4px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">{`Modern Women's Healthcare`}</p>
      <Text1 />
    </div>
  );
}

function Container6() {
  return <div className="bg-white h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Paragraph2() {
  return (
    <div className="h-[63px] relative shrink-0 w-[230.664px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[0.5px] w-[189px]">{`Discover the latest in women's healthcare innovations and accessible treatment options.`}</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame14 />
      <Container6 />
      <Paragraph2 />
    </div>
  );
}

function Heading3() {
  return <div className="h-[46.797px] shrink-0 w-[230.664px]" data-name="Heading 3" />;
}

function Container7() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[16px] h-[231.797px] items-start left-[32px] pb-px pt-[25px] px-[25px] rounded-[24px] top-[264px] w-[278.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Frame21 />
      <Heading3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[527px] overflow-clip relative shrink-0 w-[343px]" data-name="Container">
      <ImageBlog />
      <Container5 />
      <Container7 />
    </div>
  );
}

function ImageBlog1() {
  return (
    <div className="absolute h-[644px] left-0 top-0 w-[342.664px]" data-name="Image (Blog)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageBlog1} />
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-[#73a1ff] box-border content-stretch flex h-[29px] items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase whitespace-pre">Blog</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[231px]">
      <p className="capitalize font-['Times:Regular',_sans-serif] leading-[23.4px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">{`Modern Women's Healthcare`}</p>
      <Text2 />
    </div>
  );
}

function Container9() {
  return <div className="bg-white h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Paragraph3() {
  return (
    <div className="h-[63px] relative shrink-0 w-[230.664px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[0.5px] w-[189px]">{`Discover the latest in women's healthcare innovations and accessible treatment options.`}</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame15 />
      <Container9 />
      <Paragraph3 />
    </div>
  );
}

function Heading4() {
  return <div className="h-[46.797px] shrink-0 w-[230.664px]" data-name="Heading 3" />;
}

function Container10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[16px] h-[231.797px] items-start left-[32px] pb-px pt-[25px] px-[25px] rounded-[24px] top-[261px] w-[278.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Frame22 />
      <Heading4 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[644px] left-0 top-0 w-[342.664px]" data-name="Container">
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[527px] overflow-clip relative shrink-0 w-[342px]" data-name="Container">
      <ImageBlog1 />
      <Container11 />
    </div>
  );
}

function ImagePress() {
  return (
    <div className="absolute h-[644px] left-0 top-0 w-[342.664px]" data-name="Image (Press)">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImagePress} />
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-[#2f1464] box-border content-stretch flex h-[29px] items-center justify-center px-[12px] py-[4px] relative rounded-[6px] shrink-0 w-[63px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[12px] text-nowrap text-white uppercase whitespace-pre">PRESS</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[231px]">
      <p className="capitalize font-['Times:Regular',_sans-serif] leading-[23.4px] min-w-full not-italic relative shrink-0 text-[18px] text-white w-[min-content]">{`Modern Women's Healthcare`}</p>
      <Text3 />
    </div>
  );
}

function Container13() {
  return <div className="bg-white h-[2px] shrink-0 w-[64px]" data-name="Container" />;
}

function Paragraph4() {
  return (
    <div className="h-[63px] relative shrink-0 w-[230.664px]" data-name="Paragraph">
      <p className="absolute font-['Helvetica:Regular',_sans-serif] leading-[21px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.8)] top-[0.5px] w-[189px]">{`Discover the latest in women's healthcare innovations and accessible treatment options.`}</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0">
      <Frame16 />
      <Container13 />
      <Paragraph4 />
    </div>
  );
}

function Heading5() {
  return <div className="h-[46.797px] shrink-0 w-[230.664px]" data-name="Heading 3" />;
}

function Container14() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] box-border content-stretch flex flex-col gap-[16px] h-[231.797px] items-start left-[33px] pb-px pt-[25px] px-[25px] rounded-[24px] top-[264px] w-[278.664px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
      <Frame23 />
      <Heading5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.2)] h-[644px] left-0 top-0 w-[343px]" data-name="Container">
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[527px] overflow-clip relative shrink-0 w-[343px]" data-name="Container">
      <ImagePress />
      <Container15 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-[1048px]">
      <Container8 />
      <Container12 />
      <Container16 />
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_1] bg-[#7aa1f5] h-[49px] ml-0 mt-0 relative rounded-[12px] w-[102px]" data-name="Button">
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[13px] not-italic text-[14px] text-nowrap text-white top-[16px] uppercase whitespace-pre">LOAD MORE</p>
    </div>
  );
}

function Group43() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Button2 />
    </div>
  );
}

function Frame7() {
  return <div className="h-[527px] shrink-0 w-full" />;
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 w-full">
      {[...Array(2).keys()].map((_, i) => (
        <Frame10 key={i} />
      ))}
      <Group43 />
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[25px] items-center left-[14px] top-[69.81px] w-[1048px]">
      <Frame9 />
    </div>
  );
}

function BlogSection() {
  return (
    <div className="bg-white h-[1278px] relative shrink-0 w-full" data-name="BlogSection">
      <Frame8 />
    </div>
  );
}

function Heading9() {
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

function Container29() {
  return (
    <div className="h-[41.594px] relative shrink-0 w-full" data-name="Container">
      <Link />
      <Link1 />
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-0 top-0 w-[310.664px]" data-name="Container">
      <Heading9 />
      <Container29 />
    </div>
  );
}

function Heading10() {
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

function Container31() {
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

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-[358.66px] top-0 w-[310.664px]" data-name="Container">
      <Heading10 />
      <Container31 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Times:Regular',_sans-serif] leading-[24px] left-0 not-italic text-[16px] text-black text-nowrap top-[-0.5px] whitespace-pre">{`Let's keep in Touch`}</p>
    </div>
  );
}

function Paragraph8() {
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

function Button7() {
  return (
    <div className="bg-[rgba(115,161,255,0.9)] box-border content-stretch flex h-[40.797px] items-center justify-center px-0 py-[12px] relative rounded-[6px] shrink-0 w-full" data-name="Button">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] not-italic relative shrink-0 text-[14px] text-nowrap text-white uppercase whitespace-pre">Submit</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[103.797px] items-start relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Button7 />
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.797px] items-start left-[717.33px] top-0 w-[310.664px]" data-name="Container">
      <Heading11 />
      <Paragraph8 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[201.797px] relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container32 />
      <Container34 />
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

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[18.5px] items-start left-[141.2px] top-[0.5px] w-[252px]" data-name="Text">
      <p className="font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-[rgba(0,0,0,0.7)] text-nowrap whitespace-pre">Sela© 2025 All rights reserved</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[20px] relative shrink-0 w-[393.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[393.203px]">
        <Button8 />
        <Text7 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[53px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[53px] items-center justify-between pb-0 pl-0 pr-[634.797px] pt-px relative w-full">
          <Container36 />
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
          <Container35 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function CommunityPageNew() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[2815px] items-start left-0 top-0 w-[1076px]" data-name="CommunityPageNew">
      <CommunityHero />
      <CombinedTextSection />
      <BlogSection />
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

function Container38() {
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
      <Container38 />
    </div>
  );
}

function Button13() {
  return (
    <div className="[grid-area:1_/_1] h-[49px] ml-0 mt-0 relative rounded-[6px] w-[212px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[6px]" />
      <p className="absolute font-['IBM_Plex_Mono:Regular',_sans-serif] leading-[16.8px] left-[12.8px] not-italic text-[14px] text-nowrap text-white top-[14.91px] uppercase whitespace-pre">Select your Community</p>
    </div>
  );
}

function Group34() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Button13 />
    </div>
  );
}

function WhyProvidersChooseSelaSection() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[148px] left-0 rounded-[2000px] top-[-64px] w-[156px]" data-name="WhyProvidersChooseSelaSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2000px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Group32() {
  return (
    <div className="absolute contents left-[16px] top-[-14px]">
      <p className="absolute capitalize font-['Times:Regular',_sans-serif] h-[26.176px] leading-[23.4px] left-[78.18px] not-italic text-[18px] text-center text-white top-[-14px] translate-x-[-50%] w-[124.353px]">{`Perimenopause & Menopause`}</p>
    </div>
  );
}

function Group35() {
  return (
    <div className="absolute contents left-[16px] top-[-14px]">
      <Group32 />
    </div>
  );
}

function Group36() {
  return (
    <div className="absolute contents left-[16px] top-[-14px]">
      <Group35 />
    </div>
  );
}

function Group37() {
  return (
    <div className="absolute contents left-0 top-[-64px]">
      <WhyProvidersChooseSelaSection />
      <Group36 />
    </div>
  );
}

function WhyProvidersChooseSelaSection1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-[195px] rounded-[2000px] size-[142.821px] top-[5.59px]" data-name="WhyProvidersChooseSelaSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2000px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Group39() {
  return (
    <div className="absolute contents left-[217px] top-[55.41px]">
      <p className="absolute capitalize font-['Times:Regular',_sans-serif] h-[21.991px] leading-[23.4px] left-[265.99px] not-italic text-[18px] text-center text-white top-[55.41px] translate-x-[-50%] w-[97.989px]">{`Pregnancy & Postpartum`}</p>
    </div>
  );
}

function Group33() {
  return (
    <div className="absolute contents left-[217px] top-[55.41px]">
      <Group39 />
    </div>
  );
}

function Group44() {
  return (
    <div className="absolute contents left-[217px] top-[55.41px]">
      <Group33 />
    </div>
  );
}

function Group45() {
  return (
    <div className="absolute contents left-[217px] top-[55.41px]">
      <Group44 />
    </div>
  );
}

function Group38() {
  return (
    <div className="absolute contents left-[195px] top-[5.59px]">
      <WhyProvidersChooseSelaSection1 />
      <Group45 />
    </div>
  );
}

function WhyProvidersChooseSelaSection2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] h-[154px] left-[376.82px] rounded-[2000px] top-0 w-[170px]" data-name="WhyProvidersChooseSelaSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2000px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Group40() {
  return (
    <div className="absolute contents left-[376.82px] top-0">
      <WhyProvidersChooseSelaSection2 />
      <p className="absolute capitalize font-['Times:Regular',_sans-serif] h-[23.553px] leading-[23.4px] left-[461.82px] not-italic text-[18px] text-center text-white top-[53.45px] translate-x-[-50%] w-[128px]">{`PCOS & Hormone Health`}</p>
    </div>
  );
}

function Group46() {
  return (
    <div className="absolute contents left-[376.82px] top-0">
      <Group40 />
    </div>
  );
}

function Group47() {
  return (
    <div className="absolute contents left-[376.82px] top-0">
      <Group46 />
    </div>
  );
}

function Group48() {
  return (
    <div className="absolute contents left-[376.82px] top-0">
      <Group47 />
    </div>
  );
}

function Group49() {
  return (
    <div className="absolute contents left-[376.82px] top-0">
      <Group48 />
    </div>
  );
}

function Group50() {
  return (
    <div className="absolute contents left-[376.82px] top-0">
      <Group49 />
    </div>
  );
}

function WhyProvidersChooseSelaSection3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-[585.82px] rounded-[2000px] size-[153px] top-[0.5px]" data-name="WhyProvidersChooseSelaSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2000px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Group51() {
  return (
    <div className="absolute contents left-[611.82px] top-[42.5px]">
      <p className="absolute capitalize font-['Times:Regular',_sans-serif] h-[26.176px] leading-[23.4px] left-[663px] not-italic text-[18px] text-center text-white top-[42.5px] translate-x-[-50%] w-[102.353px]">{`Mental Health & Wellness`}</p>
    </div>
  );
}

function Group52() {
  return (
    <div className="absolute contents left-[611.82px] top-[42.5px]">
      <Group51 />
    </div>
  );
}

function Group53() {
  return (
    <div className="absolute contents left-[611.82px] top-[42.5px]">
      <Group52 />
    </div>
  );
}

function Group54() {
  return (
    <div className="absolute contents left-[585.82px] top-[0.5px]">
      <WhyProvidersChooseSelaSection3 />
      <Group53 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[154px] relative shrink-0 w-full">
      <Group37 />
      <Group38 />
      <Group50 />
      <Group54 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[35px] items-center left-[80px] top-[384px] w-[916.821px]">
      <Group34 />
      <Frame4 />
    </div>
  );
}

function WhyProvidersChooseSelaSection4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.1)] left-[872px] rounded-[2000px] size-[125px] top-[433px]" data-name="WhyProvidersChooseSelaSection">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.2)] border-solid inset-0 pointer-events-none rounded-[2000px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Group41() {
  return (
    <div className="absolute contents left-[872px] top-[433px]">
      <WhyProvidersChooseSelaSection4 />
      <p className="absolute capitalize font-['Times:Regular',_sans-serif] h-[23px] leading-[23.4px] left-[933.68px] not-italic text-[18px] text-center text-white top-[475.5px] translate-x-[-50%] w-[75px]">Fertility Journey</p>
    </div>
  );
}

export default function SelaCommunityPageDesign() {
  return (
    <div className="bg-white relative size-full" data-name="Sela Community Page Design">
      <CommunityPageNew />
      <ProviderHeader />
      <Frame5 />
      <Group41 />
    </div>
  );
}