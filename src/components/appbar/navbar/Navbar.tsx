import "./navbar.scss";
import Logo from "../../../assets/svg/cad-it-logo.svg";
import { Button } from "../../button/default/Button";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import ButtonLink from "../../button/button-link/ButtonLink";
interface NavbarProps {
  variant: "primary" | "secondary";
  sideBarPosition: "top" | "right";
}
const Navbar = ({ variant, sideBarPosition }: NavbarProps) => {
  const [isSideBar, setIsSideBar] = useState<boolean>(false);

  const sidebarHandler = () => {
    setIsSideBar((prev) => !prev);
  };
  return (
    <>
      <Sidebar
        onCloseClick={sidebarHandler}
        variant={variant}
        position={sideBarPosition}
        isOpenSideBar={isSideBar}
      />
      <nav className={`navbar navbar__${variant}`}>
        <a href="/" className="navbar__logo-container">
          <img src={Logo} alt="CAD-IT" className="navbar__logo" />
        </a>
        <div className="navbar__container">
          <a
            target="_self"
            href="/profile"
            className={`navbar__item navbar__item--${variant}`}
          >
            Profile
          </a>
          <a
            target="_self"
            href="/partnership"
            className={`navbar__item navbar__item--${variant}`}
          >
            Partnership
          </a>
          <a
            target="_self"
            href="/article"
            className={`navbar__item navbar__item--${variant}`}
          >
            Article
          </a>
          <a
            target="_self"
            href="/contact"
            className={`navbar__item navbar__item--${variant}`}
          >
            Contact
          </a>
          <ButtonLink variant={variant} size={"md"} linkTo="/login">
            Login
          </ButtonLink>
        </div>
        <FaBars
          data-testid="navbar-bars-icon"
          className={`bars bars__${variant}`}
          onClick={sidebarHandler}
        />
      </nav>
    </>
  );
};

export default Navbar;
