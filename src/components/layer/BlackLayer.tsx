import "./layer-style.scss";
import { motion } from "motion/react";
import { createPortal } from "react-dom";
interface BlackLayerProps {
  onClick: () => void;
}
const BlackLayer = ({ onClick }: BlackLayerProps) => {
  return createPortal(
    <motion.div
      className="black-layer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
    />,
    document.body
  );
};

export default BlackLayer;
