"use client";
import { headerNavItems } from "@/app/utils";
import HeaderDropDown from "@/components/HeaderDropDown";
import { CaretDown, List } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import BrandLogo from "../../public/assets/logo.svg";

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<number>(0);

  const handleNavDropDown = (id: number) => {
    setActiveDropdown(activeDropdown === id ? 0 : id);
  };

  return (
    <header className="mt-12 absolute w-full z-10">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between py-5">
          <Link href={"/"} className="nav-brand block mb-5">
            <Image src={BrandLogo} width={320} height={40} alt="brand-logo" />
          </Link>
          <nav>
            <ul className="flex flex-wrap items-center gap-8 lg:gap-14 relative mb-5">
              {headerNavItems &&
                headerNavItems.map((navItem, index) => (
                  <li key={index} className="relative">
                    <Link
                      onClick={() => handleNavDropDown(navItem.id)}
                      href={navItem.path}
                      className={`text-lg text-white font-semibold flex items-center gap-2 text-nowrap`}>
                      {navItem.name}
                      {navItem.dropdown.length > 0 && (
                        <CaretDown size={20} weight="fill" />
                      )}
                    </Link>
                    {activeDropdown === navItem.id && (
                      <>
                        <HeaderDropDown onNavItem={navItem} />
                      </>
                    )}
                  </li>
                ))}
            </ul>
          </nav>
          <button>
            <List color="white" size={32} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
