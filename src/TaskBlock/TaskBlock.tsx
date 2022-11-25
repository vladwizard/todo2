import React, { useEffect } from "react";
import { Task } from "../Types";

/**
 * @param {string} task - ссылка на обьект с параметрами
 * @param {() => void} remove  - Функция удаления обекта с данными из массива
 * @Description  UseEffect - Переоопределяет поля при изменение массива данных, удалении елемента из мего
 */

export default function ({
    task,
    remove,
}: {
    task: Task;
    remove: () => void;
}) {
    const [title, setTitle] = React.useState(task.title);
    const [description, setDescription] = React.useState(task.description);
    const [file, setFile] = React.useState(task.file);
    const [endDate, setEndDate] = React.useState(task.endDate);
    const [complete, setComplete] = React.useState(task.complete);

    useEffect(() => {
        setTitle(task.title);
        setDescription(task.description);
        setFile(task.file);
        setEndDate(task.endDate);
        setComplete(task.complete);
    }, [task]);

    return (
        <div className="TaskBlock flexColumn">
            <input
                className="title"
                onChange={(e) => {
                    setTitle(e.target.value);
                    task.title = e.target.value;
                }}
                value={title}
            />
            <textarea
                className="description"
                onChange={(e) => {
                    setDescription(e.target.value);
                    task.description = e.target.value;
                }}
                value={description}
            />
            <div className={"flexRow"} style={{alignItems:"center"}}>
                <input
                    type="file"
                    onChange={(e) => {
                        setFile(e.target.value);
                        task.file = e.target.value;
                    }}
                    value={file}
                />
                <input
                    type="date"
                    onChange={(e) => {
                        setEndDate(e.target.value);
                        task.endDate = e.target.value;
                    }}
                    value={endDate}
                />

                <p>Завершена:</p>
                <input
                    type="checkbox"
                    checked={complete}
                    onChange={(e) => {
                        setComplete(e.target.checked);
                        task.complete = e.target.checked;
                    }}
                />
                <button onClick={(e) => remove()}>Удалить</button>
                {new Date(endDate) < new Date() ? <p>Время кончилось</p> : ""}
            </div>
        </div>
    );
}
