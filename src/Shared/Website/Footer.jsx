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
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="200"
      className="p-4 "
    >
      <div className="bg-stone-100 rounded-[48px] p-5 lg:py-20">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-12 gap-1 lg:gap-10 mb-10 lg:mb-[69px] lg:text-start text-center">
            <div className="col-span-12 lg:col-span-5 mb-7 lg:mb-0 ">
              <Link className="block mb-6 " to="/">
                <img className="mx-auto lg:mx-0" src={logo} alt="" />
              </Link>
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <Link
                  to="/"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                >
                  <InstagramLogo size={20} weight="fill" />
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                >
                  <LinkedinLogo size={20} weight="fill" />
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                >
                  <img src={xlogo} alt="" />
                </Link>
                <Link
                  to="/"
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center"
                >
                  <YoutubeLogo size={20} weight="fill" />
                </Link>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-10">
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
          <div className="flex items-center gap-6 justify-between flex-wrap pt-8 text-slate-950 text-base font-normal">
            <p className="text-center">
              © 2024 SoCreative Media Pty Ltd. All Right Reserved
            </p>

            <div className="flex items-center justify-center w-full lg:w-auto gap-6">
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
