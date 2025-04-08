import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "shared-components/NavBar";
import * as plantService from "services/plants";
import LoadingSpinner from "shared-components/LoadingSpinner";
import PlantHeader from "./PlantHeader";
import PlantInfoSection from "./PlantInfoSection";

const PlantShowPage = () => {
  const { plantId } = useParams();
  const [plant, setPlant] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await plantService.getPlantById({ id: plantId });
      const data = await response.json();
      setPlant(data);
      setisLoading(false);
    })();
  }, [plantId]);

  return (
    <div>
      <NavBar />
      {isLoading ? <LoadingSpinner /> : <PlantInfoSection plant={plant} />}
    </div>
  );
};

export default PlantShowPage;
