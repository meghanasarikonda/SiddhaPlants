import { useContext } from "react";
import SessionContext from "contexts/SessionContext";
import { motion } from "framer-motion";

const MobileMenuModal = (props) => {
  const { onCartOpenClick } = props;
  const { username, signOut } = useContext(SessionContext);
  return (
    <motion.div
      initial={{ translateY: "-100px", opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.3 }}
      className="rounded-bl-lg bg-emerald-800 pt-14 pr-14 pb-4 flex items-start flex-col text-xl text-emerald-300"
    >
      <div className="px-4 py-2">
        <i className="fa-solid fa-user mr-1 text-2xl"></i>
        {username}
      </div>
      <button onClick={signOut} className="px-4 py-2">
        <i className="fa-solid fa-right-to-bracket mr-1 text-2xl"></i>sign out
      </button>
      <button onClick={onCartOpenClick} className="px-4 py-2">
        <i className="fa-solid fa-cart-shopping mr-1 text-2xl"></i>cart
      </button>
    </motion.div>
  );
};

export default MobileMenuModal;
