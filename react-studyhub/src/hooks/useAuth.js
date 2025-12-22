import { useState } from "react";

export default function useAuth() {
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState("");

  const login = (password) => {
    if (password === "1234") {
      setIsAuth(true);
      setError("");
    } else {
      setError("Mot de passe incorrect");
    }
  };

  return { isAuth, login, error };
}
