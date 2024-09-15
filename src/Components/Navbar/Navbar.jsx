import React from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import DarkMode from "./DarkMode";
import { Link } from "react-router-dom";

const NavLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Product", link: "/product" },
  { id: 3, name: "Pricing", link: "/pricing" },
  { id: 4, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const toggleMenu = () => setShowMenu(prev => !prev);

  return (
    <div className="relative z-[9999] text-black dark:text-white duration-300">
      <div className="container py-2 md:py-0">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Logo" className="h-16" />
            <p className="text-3xl font-bold">
              <i>CyberSphere</i>
            </p>
          </div>

          {/* Desktop Menu Section */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NavLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <Link
                    to={link}
                    className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Dark Mode Feature */}
            <DarkMode />
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer"
                size={30}
              />
            )}
          </div>
        </div>

        {/* Mobile Menu Sidebar */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black shadow-lg transition-transform duration-300 ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center py-4">
            {NavLinks.map(({ id, name, link }) => (
              <li key={id} className="py-4">
                <Link
                  to={link}
                  className="text-xl font-semibold hover:text-primary py-2 hover:border-b-2 hover:border-secondary transition-colors duration-500"
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
