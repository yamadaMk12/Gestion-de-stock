import Login from "./components/Login";
import Header from "./components/Header";
import useAuth from "./hooks/useAuth";
import TaskPage from "./components/TaskPage";


export default function App() {
  const { isAuth, login, signOut, error } = useAuth();
  if (!isAuth) {
    return (
      <div className="auth-page">
        <Login onLogin={login} error={error} />
      </div>
    );
  }

  return (
    <>
      {console.log("render home")}
      <Header signOut={signOut} />
      <TaskPage />
    </>
  );
}
