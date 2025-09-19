import Image from "next/image";
import { memo } from "react";
import Hero_image from "@/components/hero/assets/b26fea69ccfd8aa5825862cdb9604a4fb4930464.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[#f2f0f1]">
      <div className="container w-full mx-auto px-5">
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-x-4">
          <div className="w-full md:w-1/2 max-md:pt-10 flex flex-col gap-y-4 md:gap-y-8 justify-center ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-[577px] w-full">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-[#00000099] max-sm:text-sm">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of
              style.
            </p>
            <Link
              href={"/product"}
              className="md:max-w-[200px] duration-200 grid place-items-center w-full h-12.5 rounded-[50px] bg-black text-white hover:bg-white hover:text-black border-2 hover:border-black"
            >
              Shop Now
            </Link>
            <div className="max-w-[596px] w-full grid grid-cols-2 sm:grid-cols-3 gap-y-2">
              <div className="flex flex-col gap-y-0.5">
                <b className="text-2xl md:text-3xl lg:text-4xl">200+</b>
                <span className="text-[#00000060] text-xs md:text-sm lg:text-base">
                  International Brands
                </span>
              </div>
              <div className="flex flex-col gap-y-0.5">
                <b className="text-2xl md:text-3xl lg:text-4xl">2,000+</b>
                <span className="text-[#00000060] text-xs md:text-sm lg:text-base">
                  High-Quality Products
                </span>
              </div>
              <div className="flex flex-col gap-y-0.5">
                <b className="text-2xl md:text-3xl lg:text-4xl">30,000+</b>
                <span className="text-[#00000060] text-xs md:text-sm lg:text-base">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Image
              src={Hero_image}
              alt="Hero Banner Image"
              width={400}
              height={500}
              className="object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
