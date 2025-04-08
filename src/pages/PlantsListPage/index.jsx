import { useEffect, useState } from "react";
import NavBar from "shared-components/NavBar";
import * as plantService from "services/plants";
import PlantItem from "./PlantItem";
import LoadingSpinner from "shared-components/LoadingSpinner";
import { motion } from "framer-motion";

const PlantListPage = () => {
  const [isLoading, setisLoading] = useState(false);
  const [plantsData, setPlantsData] = useState([]);

  useEffect(() => {
    (async () => {
      setisLoading(true);
      const response = await plantService.getPlants();
      const data = await response.json();
      setPlantsData(data);
      setisLoading(false);
    })();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="bg-green-50 min-h-screen">
        {isLoading ? (
          <LoadingSpinner/>
        ) : (
          <div className="flex justify-center py-24">
            <div className="w-full max-w-5xl">
              <div className="flex text-4xl text-emerald-800 mx-10">Plants In Stock</div>
              <div className="flex justify-center flex-wrap">
                {plantsData && plantsData.map((plant, idx) => (
                  <motion.div key={plant.name} initial={{opacity:0, translateY:"20px"}}
                  whileInView={{opacity:1, translateY:0}}
                  viewport={{once:true}}
                  transition={{delay:0.3 + (idx % 3) * 0.2,duration: 0.4}}
                  >
                    <PlantItem plant={plant} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlantListPage;
