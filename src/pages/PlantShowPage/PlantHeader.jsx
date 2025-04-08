const PlantHeader = (props) => {
    const {plant} = props;
  return (
    <div>
      <div className="text-4xl text-emerald-700 flex justify-between">
        <div>{plant.name}</div>
        <div>${plant.price}</div>
      </div>
      <div className="mt-3 text-stone-500">{plant.botanical_name}</div>
    </div>
  );
};

export default PlantHeader;
