import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
  const [error, setError] = useState("");

  useLocalStorage("isAuth", isAuth)

  const login = (username, password) => {
    if (password.value === "1234" && username.value === "yamada") {
      setIsAuth(true);
      setError("");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  const signOut = () => {
    setIsAuth(false);
  }

  return { isAuth, login, signOut, error };
}
