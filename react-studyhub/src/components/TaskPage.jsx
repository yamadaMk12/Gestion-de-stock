import { useState, useMemo, useCallback } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Filters from "./Filters";
import useLocalStorage from "../hooks/useLocalStorage";
import useTasks from "../hooks/useTasks";


function TaskPage() {
    const [filter, setFilter] = useState("ALL");
    const [search, setSearch] = useState("");
    const { tasks, dispatch, addTask } = useTasks(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

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
    
    const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
    }, [dispatch]);

    const onDelete = useCallback((id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
    }, [dispatch]);
    return (
        <>
            <TaskForm onAdd={addTask} />
            <Filters
                filter={filter}
                setFilter={setFilter}
                search={search}
                setSearch={setSearch}
            />
            <TaskList
                tasks={filteredTasks}
                onToggle={onToggle}
                onDelete={onDelete}
            />
        </>
    )
}

export default TaskPage;