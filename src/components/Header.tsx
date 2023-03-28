import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import LogoPNG from "../assets/Logo.png";
import LogoBlack from "../assets/Logoblack.png";
import { NavLink } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface HeaderProps {
  glassBG?: boolean;
}

function Header({ glassBG }: HeaderProps) {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  const isGlassedBG = scroll || glassBG;

  return (
    <div className="col-start-2 col-end-3   w-full sticky  top-5 z-50  ">
      <main
        className={`${
          isGlassedBG && "glass drop-shadow-lg "
        } col-start-2 col-end-3  flex items-center justify-evenly  transition-none `}
      >
        <div
          className={`${
            isGlassedBG ? "text-gray900" : "text-white"
          } flex justify-around items-center gap-16 w-full`}
        >
          <div className="cursor-pointer">
            <NavLink to={"/"}>
              <LazyLoadImage
                src={isGlassedBG ? LogoBlack : LogoPNG}
                alt="logo"
              />
            </NavLink>
          </div>
          <div>
            <ul className="flex gap-6">
              <NavItem
                path="/dashboard"
                name="DASHBOARD"
                iconName="cube-sharp"
              />
              <NavItem path="#" name="PROFILE" iconName="person-sharp" />
              <NavItem path="/" name="SIGN UP" iconName="person-circle-sharp" />
              <NavItem path="/sign-in" name="SIGN IN" iconName="key-sharp" />
            </ul>
          </div>
          <button
            className={`${
              isGlassedBG ? "gradient-black" : " bg-white "
            }  py-1.5  px-8 m-4 text-white rounded-full `}
          >
            <p
              className={`${
                isGlassedBG ? "text-white" : "text-gray900"
              }  text-xs m-1  font-bold `}
            >
              Free Download
            </p>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Header;
