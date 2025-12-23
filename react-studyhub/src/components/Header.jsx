import { useTheme } from "../context/ThemeContext";

export default function Header({ signOut }) {
  const { theme, toggleTheme } = useTheme();
  console.log("render header");
  return (
    <header>
      <h1>StudyHub Manager</h1>

      <div>
        <button onClick={signOut}>
          Log out
        </button>
        <button onClick={toggleTheme}>
          Thème : {theme === "light" ? "Clair" : "Sombre"}
        </button>
      </div>
    </header>
  );
}