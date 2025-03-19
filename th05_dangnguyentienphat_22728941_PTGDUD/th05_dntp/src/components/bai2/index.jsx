import { useRef, useState } from "react";
import { useReducer } from "react";

export default function Bai2() {

    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    return (
        <>
            <div className="container border p-5 w-100">
                <div className="title">
                    <span>Ex2</span>
                </div>
                <div className="inputValue">
                    <input value={task} onChange={(e) => {
                        setTask(e.target.value)
                    }} className="w-full" type="text" name="" id="" placeholder="Tasks" />
                </div>
                <div className="addTask">
                    <button onClick={() => {
                        setTasks([...tasks, task])
                        setTask("");
                    }} className="w-full">Add task</button>
                </div>
                <div className="listTask">
                    <ul>
                        {tasks.map((item, index) => {
                            return (
                                <>
                                    <div className="flex items-center justify-between">
                                        <li key={index}>
                                            {item}
                                        </li>
                                        <button onClick={()=>{
                                            setTasks((item)=>{
                                                item.filter((_, i)=>
                                                    i !== index
                                                )
                                            })
                                        }}>
                                            Delete
                                        </button>
                                        <button>
                                            Edit
                                        </button>
                                    </div>
                                </>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}