import { useState } from "react";
import "./App.css";
import TaskBlock from "./TaskBlock/TaskBlock";
import { Task } from "./Types";

/**
 * @description tasks - массив обьектов с данными задачи
 * @description idIndex - симуляция уникаьльных id
 * @description AddTasks - функция добавления в массив
 * @description RemoveTask - функция удаления из массива
 */

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [idIndex, setidIndex] = useState(0);

    function AddTask() {
        let newArray = tasks.slice();
        newArray.push({
            title: "",
            description: "",
            file: "",
            endDate: "",
            complete: false,
            id: idIndex,
        });
        setTasks(newArray);
        setidIndex(idIndex + 1);
    }
    function RemoveTask(index: number) {
        let newArray = tasks.slice(0, index);
        newArray.push(...tasks.slice(index + 1));
        setTasks(newArray);
    }

    return (
        <div className="mainBlock">
            <header>
                <button onClick={AddTask}>Добавить задачу</button>
            </header>

            {tasks.map((task, index) => (
                <TaskBlock
                    key={task.id}
                    task={task}
                    remove={() => RemoveTask(index)}
                />
            ))}
        </div>
    );
}

export default App;
