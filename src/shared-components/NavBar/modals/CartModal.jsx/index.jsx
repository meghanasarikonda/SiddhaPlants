import { useContext } from "react";
import SessionContext from "contexts/SessionContext";
import CartItem from "./CartItem";
import { motion } from "framer-motion";

const CartModal = () => {
  const { username } = useContext(SessionContext);
  return (
    <motion.div
      initial={{ translateX: "100%", opacity: 0.5 }}
      animate={{ translateX: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-xl h-screen bg-white flex flex-col"
    >
      <div className="bg-emerald-800 shadow-md text-center py-5 text-xl text-white">
        {username}'s cart
      </div>
      <CartItem />
    </motion.div>
  );
};

export default CartModal;
