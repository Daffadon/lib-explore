import "./navbar.scss";
import Logo from "../../../assets/svg/cad-it-logo.svg";
import { Button } from "../../button/Button";
interface NavbarProps {
  variant: "fixed" | "scrolled";
}
const Navbar = ({ variant }: NavbarProps) => {
  return (
    <nav className={`navbar navbar__${variant}`}>
      <a href="/" className="navbar__logo-container">
        <img src={Logo} alt="CAD-IT" className="navbar__logo" />
      </a>
      <div className="navbar__container">
        <a href="/profile" className={`navbar__item navbar__item--${variant}`}>
          Profile
        </a>
        <a
          href="/partnership"
          className={`navbar__item navbar__item--${variant}`}
        >
          Partnership
        </a>
        <a href="/article" className={`navbar__item navbar__item--${variant}`}>
          Article
        </a>
        <Button
          variant={variant == "fixed" ? "primary" : "secondary"}
          size={"md"}
          type={"submit"}
        >
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
