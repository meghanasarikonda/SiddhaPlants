import { useState } from "react";
import BenefitBox from "./BenefitBox";
import PlantHeader from "./PlantHeader";
import PlantPurchaseOptions from "./PlantPurchaseOptions";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const PlantInfoSection = (props) => {
  const { plant } = props;
  const [imageIdx, setImageIdx] = useState(0);
  return (
    <div className="flex flex-col md:flex-row py-4 md:py-24">
      <div className="md:hidden mx-8">
        <PlantHeader plant={plant} />
      </div>
      <div className="flex-1 m-8 rounded-md overflow-clip">
        <Zoom>
          <img src={plant.images[imageIdx].src} />
        </Zoom>
        <div className="flex mt-4">
          <BenefitBox
            icon="far fa-check-circle"
            title="Guaranteed Healthy"
            description="Guaranteed to arrive healthy or your money back"
          />
          <div className="w-px bg-slate-200"></div>
          <BenefitBox
            icon="fa-regular fa-truck-fast"
            title="Free Shipping"
            description="Get free ground shipping on orders of $50 or more"
          />
        </div>
      </div>

      <div className="flex-1 flex flex-col mx-8 md:my-8">
        <div className="hidden md:block">
          <PlantHeader plant={plant} />
        </div>
        <div className="md:mt-8 leading-relaxed text-stone-600">
          {plant.description}
        </div>
        <PlantPurchaseOptions
          plant={plant}
          imageIdx={imageIdx}
          setImageIdx={setImageIdx}
        />
      </div>
    </div>
  );
};

export default PlantInfoSection;
