import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import SessionContext from "contexts/SessionContext";
import RedirectToSignedInIfSignedOut from "shared-components/RedirectToSignInIfSignedOut";
import CartModal from "./modals/CartModal.jsx";
import ModalWrapper from "./modals/ModalWrapper.jsx";
import MobileMenuModal from "./modals/MobileMenuModal.jsx";

const NavBar = () => {
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { username, signOut } = useContext(SessionContext);
  return (
    <RedirectToSignedInIfSignedOut>
      <nav
        className="flex justify-center bg-emerald-700 px-8 py-2"
        onMouseLeave={() => setUserMenuOpen(false)}
      >
        <div className="w-full max-w-5xl flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/plants">
              <img
                className="w-10"
                src="https://static-task-assets.react-formula.com/capstone_logo_light.png"
              />
            </Link>
            <div className="ml-2 text-xl text-white">Siddha's Plants</div>
          </div>
          <div className="hidden sm:flex items-center">
            <div className="flex relative mx-4">
              <button
                className="text-emerald-300 flex items-center"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              >
                <i className="fa-regular fa-user text-xl mr-1"></i>
                {username}
              </button>
              {userMenuOpen && (
                <div className="absolute top-[48px] left-[-5px] min-w-32">
                  <button
                    className="bg-white text-zinc-600 px-3 rounded-md shadow-md py-1"
                    onClick={signOut}
                  >
                    <i className="fa-regular fa-arrow-right-from-bracket mr-1"></i>
                    sign out
                  </button>
                </div>
              )}
            </div>
            <button
              className="flex text-emerald-300 mx-4 items-center"
              onClick={() => setCartOpen(true)}
            >
              <i className="fa-regular fa-cart-shopping text-xl mr-1"></i>cart
            </button>
          </div>
          <div className="flex sm:hidden">
            <button onClick={() => setMobileMenuOpen(true)}>
              <i className="fa-solid fa-bars text-4xl text-emerald-300"></i>
            </button>
          </div>
        </div>
      </nav>
      <ModalWrapper isOpen={cartOpen} onCloseClick={() => setCartOpen(false)}>
        <CartModal />
      </ModalWrapper>
      <ModalWrapper
        isOpen={mobileMenuOpen}
        onCloseClick={() => setMobileMenuOpen(false)}
      >
        <MobileMenuModal
          onCartOpenClick={() => {
            setCartOpen(true);
            setMobileMenuOpen(false);
          }}
        />
      </ModalWrapper>
    </RedirectToSignedInIfSignedOut>
  );
};

export default NavBar;
