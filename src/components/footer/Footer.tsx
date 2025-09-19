import { memo } from "react";
import Logo from "../logo.ui/Logo";
import Card from "../footer/assets/Frame 53.svg"
import Image from "next/image";

import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  TwitterIcon,
} from "lucide-react";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-28 bg-[#F0F0F0] pt-[150px] relative text-black">
      <div className="container mx-auto px-4">
        <div
          className="max-w-[1240px] w-5/6 sm:w-full absolute bg-black -top-[10%] lg:-top-2/12
           left-1/2 -translate-x-1/2 rounded-2xl px-6 py-5 md:py-6 lg:py-8 md:px-16"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:max-w-[551px] w-full text-center md:text-left">
              <h2 className="text-white text-3xl md:text-4xl font-semibold">
                STAY UPTO DATE ABOUT OUR LATEST OFFERS
              </h2>
            </div>
            <form className="md:max-w-[350px] w-full space-y-3.5">
              <input
                type="email"
                required
                min={5}
                className="bg-white text-lg indent-4 rounded-[50px] w-full h-12"
                placeholder="Enter Your Email Address"
              />
              <button type="submit" className="btn w-full bg-white h-12 rounded-[50px] cursor-pointer text-black font-semibold">
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-5 gap-y-7 mt-32">

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <Logo />
            <p className="text-sm sm:text-base my-10 text-[#00000099] max-w-[280px]">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <div className="flex space-x-4 text-gray-400 justify-center lg:justify-start">
              <Link href="#" className="p-2 rounded-full hover:bg-blue-500 hover:text-white transition">
                <TwitterIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full hover:bg-blue-600 hover:text-white transition">
                <FacebookIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:text-white transition">
                <InstagramIcon className="w-5 h-5" />
              </Link>
              <Link href="#" className="p-2 rounded-full hover:bg-gray-800 hover:text-white transition">
                <GithubIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-sm sm:text-base font-semibold mb-5 tracking-wide">COMPANY</h3>
            <ul className="space-y-4.5 text-base text-[#00000099]">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Features</a></li>
              <li><a href="#" className="hover:underline">Works</a></li>
              <li><a href="#" className="hover:underline">Career</a></li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-sm sm:text-base font-semibold mb-4 tracking-wide">HELP</h3>
            <ul className="space-y-4.5 text-base text-[#00000099]">
              <li><a href="#" className="hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:underline">Delivery Details</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-sm sm:text-base font-semibold mb-4 tracking-wide">FAQ</h3>
            <ul className="space-y-4.5 text-base text-[#00000099]">
              <li><a href="#" className="hover:underline">Account</a></li>
              <li><a href="#" className="hover:underline">Manage Deliveries</a></li>
              <li><a href="#" className="hover:underline">Orders</a></li>
              <li><a href="#" className="hover:underline">Payments</a></li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h3 className="text-sm sm:text-base font-semibold mb-4 tracking-wide">RESOURCES</h3>
            <ul className="space-y-4.5 text-base text-[#00000099]">
              <li><a href="#" className="hover:underline">Free eBooks</a></li>
              <li><a href="#" className="hover:underline">Development Tutorial</a></li>
              <li><a href="#" className="hover:underline">How to - Blog</a></li>
              <li><a href="#" className="hover:underline">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        <div className="flex justify-between border-t border-gray-700 mt-10 md:mt-12">
          <div className=" py-4 text-center text-sm sm:text-base text-gray-400">
            Shop.co © 2000-2023, All Rights Reserved
          </div>
          <div className="">
            <Image
              src={Card}
              alt="Site Logo"
              width={282}
              height={22}
              loading="eager"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
