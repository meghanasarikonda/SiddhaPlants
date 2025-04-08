import { useState, useContext } from "react";
import SessionContext from "contexts/SessionContext.js";
import AuthForm from "./AuthForm.jsx";
import FormContainer from "./FormContainer.jsx";
import { Link, useLocation } from "react-router-dom";
import * as userService from "services/user";
import RedirectToPlantsIfSigned from "shared-components/RedirectToPlantsIfSignedIn.jsx";

const SignInPage = () => {
  const [error, setError] = useState("");
  const location = useLocation();
  const { signIn } = useContext(SessionContext);

  return (
    <RedirectToPlantsIfSigned>
      <FormContainer>
        <div className="text-red-600">{error}</div>
        {location.state?.accountCreated && (
          <div className="p-2 bg-blue-200 text-blue-500 border border-blue-500">
            Account created successfully. Please Sign in.
          </div>
        )}
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
          ]}
          submitBtnText="sign-in"
          onSubmit={async (values) => {
            const response = await userService.createSession({
              username: values.username,
              password: values.password,
            });

            const data = await response.json();
            if (response.status === 201) {
              signIn(data.capstone_session_token);
            } else {
              setError(data.error);
            }
          }}
        />
        <Link
          className="underline text-sm font-inter text-green-600"
          to="/sign-up"
        >
          create new account
        </Link>
      </FormContainer>
    </RedirectToPlantsIfSigned>
  );
};

export default SignInPage;
