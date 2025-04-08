import {useState} from "react";
import FormContainer from "./FormContainer.jsx";
import AuthForm from "./AuthForm.jsx";
import { Link, useNavigate } from "react-router-dom";
import * as apiService from "services/user";
import RedirectToPlantsIfSigned from "shared-components/RedirectToPlantsIfSignedIn.jsx";


const SignUpPage = () => {
    const navigate = useNavigate()
    const [error, setError] =useState('');

  return (
    <RedirectToPlantsIfSigned>
    <FormContainer>
        <div className="text-red-600">{error}</div>
      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
          {
            label: "confirm password",
            type: "password",
          },
        ]}
        submitBtnText="create an account"
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setError("username too short");
            return;
          }
          if (values.password.length < 4) {
            setError("password too short");
            return;
          }
          if (values.password !== values["confirm password"]) {
            setError("passwords do not match");
            return;
          }
          setError('')
          const response = await apiService.createUser({
            username: values.username,
            password: values.password
          })
          if (response.status === 201) {
            navigate("/", {
                state: {
                    "accountCreated": true
                }
            })
          } else {
            const data = await response.json()
            setError(data.error)
          }
        }}
      />
      <Link className="underline text-sm font-inter text-green-600" to="/">
        sign in
      </Link>
    </FormContainer>
    </RedirectToPlantsIfSigned>
  );
};

export default SignUpPage;
