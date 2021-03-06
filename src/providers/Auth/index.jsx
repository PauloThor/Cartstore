import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toastSuccess, toastError } from "../../utils/toast";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const token = localStorage.getItem("@capstore:accessToken") || "";

  const [auth, setAuth] = useState(token);
  const [user, setUser] = useState("");

  const signIn = (userData, setError, history) => {
    api
      .post("/login", userData)
      .then((response) => {
        localStorage.setItem(
          "@capstore:accessToken",
          response.data.accessToken
        );
        setAuth(response.data.accessToken);
        history.push("/home");
        toastSuccess("Usuário logado com sucesso");
      })
      .catch((_) => {
        setError(true);
        toastError("Erro ao tentar logar, verifique suas credenciais");
      });
  };

  const signUp = (userData, setError, history) => {
    api
      .post("/users", userData)
      .then((_) => {
        history.push("/");
      })
      .catch((_) => setError(true));
  };

  const logout = (history) => {
    localStorage.clear();
    setAuth("");
    setUser("");
    history.push("/");
  };

  const updateUserInfo = (data) => {
    api.patch(`/users/${user.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const newUser = { ...user, data };

    setUser(newUser);
  };

  const getUserInfo = () => {
    const decoded = jwt_decode(auth);

    api
      .get(`/users/${decoded.sub}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        token: auth,
        setAuth,
        signIn,
        signUp,
        logout,
        updateUserInfo,
        user,
        getUserInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
