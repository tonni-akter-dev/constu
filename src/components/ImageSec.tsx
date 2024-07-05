import Image from "next/image";
import secImg from "/public/assets/imgscbg.png";

const ImageSec = () => {
  return (
    <section>
      <Image  style={{ width: "100%" }} src={secImg} alt="sec-img" />
    </section>
  );
}

export default ImageSec;