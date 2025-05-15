import { Button } from "../../button/Button";
import Drawer from "../../drawer/Drawer";
import "./sidebar.scss";

interface SidebarProps {
  onCloseClick: () => void;
  variant: "secondary" | "primary";
  position: "right" | "top";
  isOpenSideBar: boolean;
}
const Sidebar = ({
  onCloseClick,
  variant,
  position,
  isOpenSideBar,
}: SidebarProps) => {
  return (
    <Drawer
      onClick={onCloseClick}
      variant={variant}
      position={position}
      isOpenSideBar={isOpenSideBar}
    >
      <div className="sidebar__container">
        <a
          href="/profile"
          className={`sidebar__item sidebar__item--${variant} `}
        >
          Profile
        </a>
        <a
          href="/partnership"
          className={`sidebar__item sidebar__item--${variant}`}
        >
          Partnership
        </a>
        <a
          href="/article"
          className={`sidebar__item sidebar__item--${variant}`}
        >
          Article
        </a>
        <a
          href="/contact"
          className={`sidebar__item sidebar__item--${variant}`}
        >
          Contact
        </a>
        <Button variant={variant} size={"md"} type={"submit"}>
          Login
        </Button>
      </div>
    </Drawer>
  );
};

export default Sidebar;
