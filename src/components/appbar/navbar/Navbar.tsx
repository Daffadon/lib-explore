import "./navbar.scss";
import Logo from "../../../assets/svg/cad-it-logo.svg";
import { Button } from "../../button/Button";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
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
            href="/profile"
            className={`navbar__item navbar__item--${variant}`}
          >
            Profile
          </a>
          <a
            href="/partnership"
            className={`navbar__item navbar__item--${variant}`}
          >
            Partnership
          </a>
          <a
            href="/article"
            className={`navbar__item navbar__item--${variant}`}
          >
            Article
          </a>
          <a
            href="/contact"
            className={`navbar__item navbar__item--${variant}`}
          >
            Contact
          </a>
          <Button variant={variant} size={"md"} type={"submit"}>
            Login
          </Button>
        </div>
        <FaBars className={`bars bars__${variant}`} onClick={sidebarHandler} />
      </nav>
    </>
  );
};

export default Navbar;
