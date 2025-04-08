import { useEffect, useCallback, useState } from "react";
import * as cartService from "services/cart";
import LoadingSpinner from "shared-components/LoadingSpinner";
import clsx from "clsx";

const CartItem = () => {
  const [isloading, setisLoading] = useState(true);
  const [items, setItems] = useState([]);

  let totalItems = 0;
  let subTotal = 0;
  if (items.length) {
    for (let i = 0; i < items.length; i++) {
      totalItems += items[i].quantity;
      subTotal += items[i].quantity * items[i].price_per_unit;
    }
  }

  const loadCartItems = useCallback(async () => {
    const response = await cartService.getCart();
    const data = await response.json();
    setItems(data);
    setisLoading(false);
  }, []);

  useEffect(() => {
    loadCartItems();
  }, [loadCartItems]);
  return (
    <div className=" flex-1  flex flex-col overflow-y-scroll">
      {isloading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col">
            {items.map((item, idx) => (
              <div key={idx}>
                <div
                  className={clsx("h-[1px]", idx !== 0 && "bg-slate-100")}
                ></div>
                <div key={item.id} className="flex mx-4 my-6">
                  <img src={item.image_src} className="w-28 rounded-md" />
                  <div className="mx-6 flex-1 text-slate-400 flex justify-between">
                    <div>
                      <div className="flex justify-between">
                        <div className="text-xl text-emerald-600">
                          {item.plant_name}
                        </div>{" "}
                      </div>
                      <div className="flex">
                        <label className="w-12">qty:</label>
                        <div className="text-slate-500">{item.quantity}</div>
                      </div>
                      <div className="flex">
                        <label className="w-12">color:</label>
                        <div className="text-slate-500">{item.pot_color}</div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between items-end">
                      <div className="text-slate-500">
                        ${item.quantity * item.price_per_unit}
                      </div>
                      <button
                        className="hover:text-red-600"
                        onClick={async () => {
                          setisLoading(true);
                          await cartService.removeItemFromCart(item.id);
                          loadCartItems();
                        }}
                      >
                        remove <i className="fa-regular fa-trash ml-1"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-slate-100 h-[1px] mt-6"></div>

          <div className="flex flex-col mx-8 text-slate-500">
            <div className="flex justify-between my-4">
              <div>{totalItems} items</div>
              <div>subtotal: ${subTotal}</div>
            </div>
            <button
              className="bg-emerald-700 py-2 text-white rounded-full mb-2"
              onClick={() => alert("this is a dummy site😀")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
