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
              className="block lg:hidden bg-slate-900 text-white text-bold w-7 h-7 rounded-full"
            >
              {open ? "✕" : "≡"}
            </button>
          </div>
          {open && (
            <>
              <nav className="mx-auto">
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

              <div className=" flex flex-col lg:flex-row  items-center gap-6">
                <Link
                  to={"/login"}
                  className="block  text-slate-900 text-base font-semibold"
                >
                  Login
                </Link>
                <button className="text-white font-semibold text-base py-3 px-8 rounded-full bg-slate-900">
                  Get Started
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
