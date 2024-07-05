import BannerText from "@/components/BannerText";
import Button from "./Button";

const Banner = () => {
  return (
    <section className="bg-headerImg h-screen bg-no-repeat bg-cover">
      <div className="container">
        <div className="flex justify-center pt-[460px] lg:pt-[250px]">
          <div className="text-center">
            <BannerText />
            <Button
              btnName="Book a call"
              btnClass="common-btn bg-clr_18 hover:bg-[#B39B87] transition-all duration-300 text-white max-w-[310px] w-full h-[58px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Banner;
