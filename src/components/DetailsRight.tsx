import Image from "next/image";
import DetailsRightImg from "/public/assets/details-right-img.png";

const DetailsRight = () => {
  return (
    <div data-aos="fade-left"
    data-aos-duration="1000"
    data-aos-delay="300">
      <div className="mb-12">
        <Image
          width={906}
          height={527}
          src={DetailsRightImg}
          alt="section-img"
        />
      </div>
      <p className="text-2xl font-light text-clr_bb">
        <span className="font-semibold text-white">
          We take the stress out of building your dream guest home
        </span>
        . Our team handles all the necessary steps that are required to get a
        project from paper to reality. With our end-to-end service, you
        won&apos;t need to juggle architects or sub-contractors. Our decades of
        experience designing and building in Arizona will ensure every detail is
        taken care of, delivering a beautiful, high-quality guest home on time
        and within budget.
      </p>
    </div>
  );
};

export default DetailsRight;
