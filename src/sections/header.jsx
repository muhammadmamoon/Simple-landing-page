import React, { useState } from "react";
import Hamburger from "react-hamburger-menu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const navLinks = {
    Home: "home",
    About: "work",
    Blog: "our-blog",
    Testimonial: "client-feedback",
  };

  const handleNavClick = (section) => {
    setActive(section);
    setMenuOpen(false);

   
    document.getElementById(navLinks[section])?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div id="home" className="bg-[#F7F8FA] w-full h-16 px-5 flex justify-between items-center sticky top-0 z-50 shadow-md">
      <div>
        <img src="/Group2.svg" alt="Logo" className="w-28" />
      </div>


      <div className="hidden md:flex">
        <ul className="flex space-x-6">
          {Object.keys(navLinks).map((item) => (
            <li key={item}>
              <button
                className={`cursor-pointer text-lg ${
                  active === item ? "text-red-500 font-semibold" : "text-black"
                } hover:text-red-500`}
                onClick={() => handleNavClick(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5">
        Contact us
      </button>

      
      <div className="md:hidden">
        <Hamburger
          isOpen={menuOpen}
          menuClicked={() => setMenuOpen(!menuOpen)}
          width={30}
          height={20}
          strokeWidth={3}
          rotate={0}
          color="black"
          borderRadius={5}
          animationDuration={0.5}
        />
      </div>

     
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {Object.keys(navLinks).map((item) => (
              <li key={item}>
                <button
                  className={`cursor-pointer text-lg ${
                    active === item ? "text-red-500 font-semibold" : "text-black"
                  } hover:text-red-500`}
                  onClick={() => handleNavClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
