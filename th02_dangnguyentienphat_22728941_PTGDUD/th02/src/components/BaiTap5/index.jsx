import { useState } from "react";

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    const addTask = () => {
        if (task.trim() !== "") {
            setTasks([...tasks, task]);
            setTask("");
        }
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="container mt-4">
            <span>bai tap 5</span>
            <h2>To-Do List</h2>
            <div>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Nhập công việc..."
                />
                <button onClick={addTask}>Add</button>
            </div>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>
                        {t} <button onClick={() => removeTask(index)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
