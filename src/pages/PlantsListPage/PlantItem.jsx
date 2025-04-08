import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { POT_COLORS, getRandomIdx } from "services/utils";

const PlantItem = (props) => {
  const { plant } = props;
  const [imageIdx, setImageIdx] = useState(getRandomIdx(plant.images));

  return (
    <div className="my-8 mx-5">
      <Link to={`/plant/${plant.id}`}>
        <img src={plant.images[imageIdx].src} className="w-[280px] h-[320px] rounded-md" />
      </Link>
      <div className="flex justify-between my-3">
        <div>{plant.name}</div>
        <div>${plant.price}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-slate-500 text-sm">
          {plant.images[imageIdx]["pot_color"]}
        </div>
        <div className="flex">
          {plant.images.map((image, idx) => (
            <button
              key={idx}
              onMouseEnter={() => {
                setImageIdx(idx);
              }}
              className={clsx(
                "w-4 h-4 m-1 rounded-full",
                POT_COLORS[image["pot_color"]],
                imageIdx === idx && "outline outline-offset-2"
              )}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlantItem;
