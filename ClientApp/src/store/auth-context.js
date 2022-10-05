import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import apiUrl from "../Shared/Urls/apiUrl";
const AuthContext = React.createContext({
  getLoginData: (data) => {},
  logout: () => {},
  getToken: null,
});

export const AuthContextProvider = (props) => {
  let navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const res = await axios.post(apiUrl.Login, JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      });
      if (res.data.status === 200) {
        localStorage.setItem("user_token", JSON.stringify(res.data.resultData));
        navigate("/");
      } else if (res.data.status === 401) {
        console.log(res.data);
      }
    } catch (err) {}
  };
  const handleLogout = () => {
    localStorage.removeItem("user_token");
    navigate("/login");
  };
  const authCtx = {
    getLoginData: handleLogin,
    logout: handleLogout,
    getToken: JSON.parse(localStorage.getItem("user_token")),
  };
  return (
    <AuthContext.Provider value={authCtx}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
