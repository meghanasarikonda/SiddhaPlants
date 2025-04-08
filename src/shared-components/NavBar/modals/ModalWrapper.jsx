import { useRef } from "react";
import { RemoveScroll } from "react-remove-scroll";
import { motion } from "framer-motion";

const ModalWrapper = (props) => {
  const { isOpen, onCloseClick, children } = props;
  const backgroundDivRef = useRef();

  if (!isOpen) {
    return null;
  }
  return (
    <div
      ref={backgroundDivRef}
      onClick={(e) => e.target === backgroundDivRef.current && onCloseClick()}
      className="fixed top-0 left-0 h-full w-full bg-black/30 backdrop-blur-sm flex items-start justify-end overflow-hidden z-20"
    >
      {children}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        onClick={onCloseClick}
        className="absolute p-2 text-4xl text-emerald-300"
      >
        <i className="fa-regular fa-circle-xmark"></i>
      </motion.button>
    </div>
  );
};

export default ModalWrapper;

{
  /* <button onClick={() => setIsCartModal(false)} className="absolute p-2 text-4xl text-emerald-300"><i className="fa-regular fa-circle-xmark"></i></button>  */
}
