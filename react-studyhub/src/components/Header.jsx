import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <h1>StudyHub Manager</h1>
      <button onClick={toggleTheme}>
        Thème : {theme === "light" ? "Clair" : "Sombre"}
      </button>
    </header>
  );
}