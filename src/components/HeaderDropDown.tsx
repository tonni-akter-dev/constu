import { IHeaderNavItems } from "@/utils";
import Link from "next/link";

type IProps = {
  onNavItem: IHeaderNavItems;
}

const HeaderDropDown: React.FC<IProps> = ({ onNavItem }) => {
  
  return (
    <ul className="absolute -bottom-5">
      {onNavItem?.dropdown.map((navItemDropdown, index) => (
        <li key={index}>
          <Link href={navItemDropdown.name} className="text-white">
            {navItemDropdown.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeaderDropDown;
