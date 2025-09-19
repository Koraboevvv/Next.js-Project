import { memo } from "react";
import logo from "../footer/assets/SHOP.CO.svg";
import Image from "next/image";
import Link from "next/link";

const MainLogo = () => {
  return (
    <Link href={"/"}>
      <Image
        src={logo}
        alt="Site Logo"
        width={160}
        height={22}
        loading="eager"
      />
    </Link>
  );
};

export default memo(MainLogo);