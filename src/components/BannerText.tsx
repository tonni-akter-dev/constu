const BannerText = () => {
  return (
    <>
      <h2 data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="300" className="text-5xl lg:text-[88px] text-white font-bold font-alexandria leading-[120%] mb-4">
        Building is <span className="text-clr_18">HARD</span>,
        <br className="hidden lg:block" /> but we make it
        <span className="text-clr_18 ml-3">EASY</span>.
      </h2>
      <p className="text-white text-lg lg:text-2xl font-normal leading-[133%] mb-12" data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500">
        We specialize in building high-quality guest homes and offer a
        hassle-free, end-to-end <br className="hidden lg:block" /> service so
        you don&apos;t have to worry about anything else.
      </p>
    </>
  );
};

export default BannerText;
