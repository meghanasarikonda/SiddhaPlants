const Field = (props) => {
  const { label, type, onChange, values } = props;
  
  return (
    <div className="flex flex-col my-4">
      <label className="text-gray-500 mb-1">{label}</label>
      <input
        type={type}
        value={values[label]}
        onChange={onChange}
        className="border border-gray-100 bg-gray-50 rounded-md px-2 py-1 focus:outline-emerald-500"
      />
    </div>
  );
};

export default Field;
