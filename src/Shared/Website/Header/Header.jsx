import { Link } from "react-router-dom";
import NavLogo from "../../../assets/website/nav_brand.svg";

const Header = () => {
  const NavItemData = [
    {
      name: "Features",
      link: "/features",
    },
    {
      name: "Use Cases",
      link: "/use-cases",
    },
    {
      name: "Pricing",
      link: "/pricing",
    },
    {
      name: "Recourses",
      link: "/recourses",
    },
    {
      name: "Company",
      link: "/company",
    },
  ];
  return (
    <header className="py-9">
      <div className="website_contianer">
        <div className="navbar_wrapper flex items-center">
          <div className="nav_brand">
            <Link to={"/"}>
              <img src={NavLogo} alt="brand_nav" />
            </Link>
          </div>
          <nav className="mx-auto">
            <ul className="flex gap-7 lg:gap-[47px]">
              {NavItemData.map((navitem, index) => (
                <li key={index}>
                  <Link
                    className="font-hanken text-base font-medium text-black"
                    to={navitem.link}>
                    {navitem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="nav_btn flex gap-3">
            <Link
              to={"/login"}
              className="block font-hanken text-base font-semibold py-[14px] px-[30px] border-2 border-gray-800 rounded-[100px]">
              {" "}
              Login
            </Link>
            <Link
              to={"/get-started"}
              className="block font-hanken text-base font-semibold py-[14px] px-[30px] border border-gray-800 rounded-[100px]">
              {" "}
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
