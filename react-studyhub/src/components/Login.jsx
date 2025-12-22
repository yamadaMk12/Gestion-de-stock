import { useState, useRef } from "react";

export default function Login({ onLogin, error }) {
  const [password, setPassword] = useState("");
  const inputRef = useRef(null);

  return (
    <div>
      <h2>Connexion</h2>
      <input
        ref={inputRef}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => onLogin(password)}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}