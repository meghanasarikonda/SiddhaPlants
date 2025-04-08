const FormContainer = (props) => {
  const { children } = props;

  return (
    <div className="flex h-screen">
      <div className="relative hidden md:flex">
        <img
          className=" h-full object-cover"
          src="https://static-task-assets.react-formula.com/capstone_sign_in_scene.png"
        />
        <div className="absolute top-0 right-0 w-full h-full bg-black/10"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-green-500/20"></div>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center bg-green-50">
        <img
          className="w-14"
          src="https://static-task-assets.react-formula.com/capstone_logo_dark.png"
        />
        <div className="font-platypi text-2xl mt-1 mb-4 text-green-700">Rica's Plants</div>
        {children}
      </div>
    </div>
  );
};

export default FormContainer;
