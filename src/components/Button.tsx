import Link from "next/link";

type IProps = {
  btnName: string;
  btnLink?: string;
  btnClass?: string;
};

const Button: React.FC<IProps> = ({ btnName, btnLink, btnClass }) => {
  return (
    <Link
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="400"
      href={btnLink ? btnLink : `#${btnName}`}
      className={btnClass ? btnClass : ""}>
      {btnName ? btnName : ""}
    </Link>
  );
};

export default Button;
