import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitBtnText, onSubmit } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });
  const [isloading, setIsloading] = useState(false)

  return (
    <form className="m-2 border border-grey-300 w-72 px-6 pb-8 pt-4 rounded-lg font-inter" onSubmit={async(e) => {
        e.preventDefault()
        setIsloading(true)
        await onSubmit(values)
        setIsloading(false)
    }}>
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          values={values}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      
      <button className="relative text-white bg-emerald-700 w-full py-2 rounded-md mt-2">
        {submitBtnText}
        {isloading && <div className="absolute top-0 right-4 flex items-center h-full animate-spin text-xl">
        <i className="fa-solid fa-spinner-third"></i>
        </div>}
        
      </button>

    </form>
  );
};

export default AuthForm;
