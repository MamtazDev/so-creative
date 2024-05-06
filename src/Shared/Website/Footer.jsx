import React from "react";
import logo from "../../assets/website/footer_logo.svg";
import xlogo from "../../assets/website/XLogo.svg";
import { Link } from "react-router-dom";
import { footerLink } from "../../utils/data";
import {
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <div className="p-4 ">
      <div className="bg-stone-100 rounded-[48px] p-5 lg:py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-4 lg:gap-10 mb-[69px]">
            <div className="col-span-12 lg:col-span-5">
              <Link className="block mb-6" to="/">
                <img src={logo} alt="" />
              </Link>
              <div className="flex items-center gap-3">
                <Link
                  to="/"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center"
                >
                  <InstagramLogo size={24} weight="fill" />
                </Link>
                <Link
                  to="/"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center"
                >
                  <LinkedinLogo size={24} weight="fill" />
                </Link>
                <Link
                  to="/"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center"
                >
                  <img src={xlogo} alt="" />
                </Link>
                <Link
                  to="/"
                  className="w-11 h-11 rounded-full bg-white flex items-center justify-center"
                >
                  <YoutubeLogo size={24} weight="fill" />
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
                {footerLink.map((links, index) => (
                  <div key={index}>
                    <p className="text-stone-950 text-lg font-bold mb-6">
                      {links.title}
                    </p>
                    <div className="flex flex-col gap-4">
                      {links.routes.map((data, idx) => (
                        <Link
                          className="text-base text-stone-800 font-medium"
                          key={idx}
                          to="/"
                        >
                          {data}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <hr />
          <div className="flex items-center gap-4 justify-between flex-wrap pt-8 text-slate-950 text-base font-normal">
            <p>© 2024 SoCreative Media Pty Ltd. All Right Reserved</p>

            <div className="flex items-center gap-6">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
