import { useState, useMemo } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";
import useAuth from "./hooks/useAuth";
import useTasks from "./hooks/useTasks";
import useLocalStorage from "./hooks/useLocalStorage";

export default function App() {
  const { isAuth, login, error } = useAuth();
  const { tasks, dispatch, addTask } = useTasks(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  useLocalStorage("tasks", tasks);

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const statusOk =
        filter === "ALL" ||
        (filter === "DONE" && task.done) ||
        (filter === "TODO" && !task.done);

      const searchOk = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return statusOk && searchOk;
    });
  }, [tasks, filter, search]);

  if (!isAuth) {
    return <Login onLogin={login} error={error} />;
  }

  return (
    <>
      <Header />
      <TaskForm onAdd={addTask} />
      <Filters
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      <TaskList
        tasks={filteredTasks}
        onToggle={(id) =>
          dispatch({ type: "TOGGLE_TASK", payload: id })
        }
        onDelete={(id) =>
          dispatch({ type: "DELETE_TASK", payload: id })
        }
      />
    </>
  );
}
