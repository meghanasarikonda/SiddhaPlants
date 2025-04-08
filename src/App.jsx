import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/auth/SignInPage";
import SignUpPage from "./pages/auth/SignUpPage";
import PlantListPage from "pages/PlantsListPage";
import * as UserService from "services/user";
import SessionContext from "contexts/SessionContext";
import { jwtDecode } from "jwt-decode";
import PlantShowPage from "pages/PlantShowPage";
import ScrollToTop from "shared-components/ScrollToTop";

const App = () => {
  const [sessionToken, setSessionToken] = useState(() =>
    UserService.getSessionTokenStorage()
  );
  return (
    <SessionContext.Provider
      value={{
        username: sessionToken ? jwtDecode(sessionToken).username : null,
        signIn: (token) => {
          UserService.setSessionTokenStorage(token);
          setSessionToken(token);
        },
        signOut: () => {
          setSessionToken(null);
          UserService.removeSessionTokenStorage();
        },
      }}
    >
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/plants" element={<PlantListPage />} />
          <Route path="/plant/:plantId" element={<PlantShowPage />} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  );
};

export default App;
