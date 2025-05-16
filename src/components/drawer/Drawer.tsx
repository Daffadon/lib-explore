import { type PropsWithChildren } from "react";
import "./drawer-style.scss";
import { IoCloseOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "motion/react";
import BlackLayer from "../layer/BlackLayer";
type DrawerProps = PropsWithChildren<{
  onClick: () => void;
  variant: "secondary" | "primary";
  position: "right" | "top";
  isOpenSideBar: boolean;
}>;

const Drawer = ({
  position,
  variant,
  children,
  onClick,
  isOpenSideBar,
}: DrawerProps) => {
  return (
    <AnimatePresence>
      {isOpenSideBar ? (
        <>
          <BlackLayer onClick={onClick} />
          <motion.div
            className={`drawer-container drawer-container--${position}`}
            key={"drawer"}
            initial={{
              x: position === "right" ? "100%" : 0,
              y: position === "top" ? "-100%" : 0,
              opacity: 0,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
            }}
            exit={{
              x: position === "right" ? "100%" : 0,
              y: position === "top" ? "-100%" : 0,
              opacity: 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div
              className={`drawer-container__items drawer-container__items--${variant} drawer-container__items--${position}`}
            >
              <div className="close-container">
                <IoCloseOutline
                  data-testid="close-container__icon"
                  className={`close-container__icon close-container__icon--${variant}`}
                  onClick={onClick}
                />
              </div>
              <div className="drawer-itemlist">{children}</div>
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Drawer;
