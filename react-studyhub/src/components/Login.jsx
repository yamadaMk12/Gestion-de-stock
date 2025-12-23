import { useRef } from "react";

export default function Login({ onLogin, error }) {
  const passwordRef = useRef(null);
  const userRef = useRef(null);

  console.log("render login")
  return (
    <div className="login">
      <h2>Connexion</h2>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        type="text"
        ref={userRef}
      />
      <label htmlFor="pass">Password</label>
      <input
        id="pass"
        ref={passwordRef}
        type="password"
      />
      <button onClick={() => onLogin(passwordRef.current)}>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}