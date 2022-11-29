import { useState } from "react";
import "./App.css";
import TaskBlock from "./TaskBlock/TaskBlock";
import { Task } from "./Types";

/**
 * @description tasks - массив обьектов с данными задачи
 * @description AddTasks - функция добавления в массив
 * @description кнопка ShowTasks - кнопка для проверки, массива в родители, важно чтобы он отражал актуальные данные, для отправки на сервер, или других действий с ним
 */

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);

    function AddTask() {
        let newArray = tasks.slice();
        newArray.push({
            title: "Название",
            description: "Описание",
            file: "",
            endDate: "",
            complete: false,
        });
        setTasks(newArray);
    }
    function RemoveTask(index:number) {
        let newArray = tasks.slice(0, index);
        newArray.push(...tasks.slice(index + 1))
        setTasks(newArray);
    }

    return (
        <div className="wrapper">
            <header>
                <button onClick={AddTask}>Добавить задачу</button>
                <button onClick={() => console.log(tasks)}>
                    console.log(tasks)
                </button>
            </header>
            <main>
                {tasks.map((task, index) => (
                    <TaskBlock
                        key={index}
                        task={task}
                        remove={() => RemoveTask(index)}
                    />
                ))}
            </main>
        </div>
    );
}

export default App;
