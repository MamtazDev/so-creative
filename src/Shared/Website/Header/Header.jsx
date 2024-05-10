import { Link } from "react-router-dom";
import NavLogo from "../../../assets/website/logo.svg";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const NavItemData = [
    {
      name: "Features",
      link: "#",
    },
    {
      name: "Use Cases",
      link: "#",
    },
    {
      name: "Pricing",
      link: "#",
    },
    {
      name: "Recourses",
      link: "#",
    },
    {
      name: "Company",
      link: "#",
    },
  ];
  return (
    <header className="py-4 ">
      <div className="website_contianer">
        <div className="navbar_wrapper flex gap-4 flex-col lg:flex-row items-center">
          <div className="nav_brand flex w-full lg:w-auto items-center gap-4 justify-between">
            <Link to={"/"}>
              <img
                className="max-w-[168px] h-12"
                src={NavLogo}
                alt="brand_nav"
              />
            </Link>
            <button
              onClick={() => setOpen(!open)}
              className="block lg:hidden bg-slate-900 text-white text-bold px-5 py-2 rounded-full"
            >
              {open ? (
                "✕"
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12ZM3.75 7.125H20.25C20.5484 7.125 20.8345 7.00647 21.0455 6.7955C21.2565 6.58452 21.375 6.29837 21.375 6C21.375 5.70163 21.2565 5.41548 21.0455 5.2045C20.8345 4.99353 20.5484 4.875 20.25 4.875H3.75C3.45163 4.875 3.16548 4.99353 2.9545 5.2045C2.74353 5.41548 2.625 5.70163 2.625 6C2.625 6.29837 2.74353 6.58452 2.9545 6.7955C3.16548 7.00647 3.45163 7.125 3.75 7.125ZM20.25 16.875H3.75C3.45163 16.875 3.16548 16.9935 2.9545 17.2045C2.74353 17.4155 2.625 17.7016 2.625 18C2.625 18.2984 2.74353 18.5845 2.9545 18.7955C3.16548 19.0065 3.45163 19.125 3.75 19.125H20.25C20.5484 19.125 20.8345 19.0065 21.0455 18.7955C21.2565 18.5845 21.375 18.2984 21.375 18C21.375 17.7016 21.2565 17.4155 21.0455 17.2045C20.8345 16.9935 20.5484 16.875 20.25 16.875Z"
                    fill="white"
                  />
                </svg>
              )}
            </button>
          </div>

          <nav className="hidden lg:block mx-auto">
            <ul className="flex flex-col lg:flex-row gap-8 lg:gap-[32px]">
              {NavItemData.length > 0 &&
                NavItemData.map((navitem, index) => (
                  <li key={index}>
                    <Link
                      className=" text-base font-bold text-[#0C0020]"
                      to={navitem.link}
                    >
                      {navitem.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div className=" hidden lg:flex flex-col lg:flex-row  items-center gap-6">
            <Link
              to={"/login"}
              className="block  text-slate-900 text-base font-bold"
            >
              Login
            </Link>
            <button className="text-white font-bold text-base py-2 px-5 rounded-full bg-slate-900">
              Get Started
            </button>
          </div>
          {open && (
            <div className=" absolute  top-[74px] bg-stone-100 rounded-3xl shadow-2xl w-[94%] py-4 px-2">
              <nav className="block lg:hidden mx-auto mb-8">
                <ul className="flex flex-col justify-center items-center lg:flex-row gap-8 ">
                  {NavItemData.length > 0 &&
                    NavItemData.map((navitem, index) => (
                      <li key={index}>
                        <Link
                          className=" text-base font-bold text-[#0C0020]"
                          to={navitem.link}
                        >
                          {navitem.name}
                        </Link>
                      </li>
                    ))}
                </ul>
              </nav>
              <div className=" flex flex-col lg:flex-row  items-center gap-6">
                <Link
                  to={"/login"}
                  className="block  text-slate-900 text-base font-bold"
                >
                  Login
                </Link>
                <button className="text-white font-bold text-base py-2 px-5 rounded-full w-full bg-slate-900">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
