import React, { useEffect } from "react";
import "./App.css";
import TaskBlock from "./TaskBlock/TaskBlock";
import { Task } from "./Types";

/**
 * @description tasks - массив обьектов с данными задачи
 * @description AddTasks - функция добавления в массив
 */

function App() {
    const [tasks, setTasks] = React.useState<Task[]>([]);

    function AddTask() {
        setTasks(
            tasks.slice().concat({
                title: "Название",
                description: "Описание",
                file: "",
                endDate: "",
                complete: false,
            })
        );
    }

    return (
        <div className="wrapper">
            <header>
                <button onClick={AddTask}>Добавить задачу</button>
                <button onClick={()=>console.log(tasks)}>console.log(tasks)</button>
            </header>
            <main>
                {tasks.map((task, index) => (
                    <TaskBlock
                        key={index}
                        task={task}
                        remove={() => {
                            setTasks(
                                tasks
                                    .slice(0, index)
                                    .concat(tasks.slice(index + 1))
                            );
                        }}
                    />
                ))}
            </main>
        </div>
    );
}

export default App;
