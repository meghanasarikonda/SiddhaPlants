import { useState } from "react";
import { POT_COLORS } from "services/utils";
import clsx from "clsx";
import * as cartService from "services/cart"

const PlantPurchaseOptions = (props) => {
  const { plant, imageIdx, setImageIdx } = props;
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setisLoading] = useState(false);

  return (
    <div>
      <div className=" mt-8">
        <div className="flex items-center">
          <i className="fa-solid fa-brush mr-2"></i>
          <div>Pot Colors</div>
        </div>
        <div className="flex mt-4">
          {plant.images.map((image, idx) => (
            <div className="m-1 flex flex-col items-center" key={idx}>
              <div
                onMouseEnter={() => {
                  setImageIdx(idx);
                }}
                className={clsx(
                  "w-10 h-10 rounded-full",
                  POT_COLORS[image.pot_color],
                  idx === imageIdx &&
                    "outline outline-offset-2 outline-slate-500"
                )}
              ></div>
              <div className="text-sm">{image.pot_color}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-8">
        <div className="flex items-center px-4 py-2 rounded-full border border-slate-300">
          <button
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            <i className="fa-solid fa-minus text-xl"></i>
          </button>
          <div className="m-2 w-10 text-center text-xl">{quantity}</div>
          <button onClick={() => {
              if (quantity < 100) {
                setQuantity(quantity + 1);
              }
            }}>
            <i className="fa-solid fa-plus text-xl"></i>
          </button>
        </div>
        <button className="bg-emerald-700 ml-2 rounded-full flex-1 text-white hover:bg-emerald-600 flex items-center justify-center" 
        onClick={async() => {
            setisLoading(true);
            const response = await cartService.addPlantToCart({plantId: plant.id, quantity: quantity, potColor: plant.images[imageIdx].pot_color})
            setisLoading(false);
        }}>
          {isLoading ? (
            <i className="fa-solid fa-spinner-scale text-2xl animate-spin mr-2"></i>
          ) : (
            <i className="fa-light text-2xl fa-cart-circle-plus mr-2"></i>
          )}
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PlantPurchaseOptions;
