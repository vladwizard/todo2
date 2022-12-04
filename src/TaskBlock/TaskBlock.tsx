import { useState } from "react";
import { Task } from "../Types";
import "./TaskBlock.css";

/**
 * @param {string} task - ссылка на обьект с параметрами
 * @param {() => void} remove  - Функция удаления обекта с данными из массива
 * @description getTask - фугкция получения данных из масива
 * @description setTask - фугкция занесения данных в масива
 */

export default function ({ task, remove }: { task: Task; remove: () => void }) {
    const [wasChange, setWasChanging] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);
    const [file, setFile] = useState(task.file);
    const [endDate, setEndDate] = useState(task.endDate);
    const [complete, setComplete] = useState(task.complete);

    function getTask() {
        setTitle(task.title);
        setDescription(task.description);
        setFile(task.file);
        setEndDate(task.endDate);
        setComplete(task.complete);
        setWasChanging(false);
    }
    function setTask() {
        task.title = title;
        task.description = description;
        task.file = file;
        task.endDate = endDate;
        task.complete = complete;
        setWasChanging(false);
    }

    return (
        <div
            className="TaskBlock flexColumn"
            onChange={() => setWasChanging(true)}
        >
            <input
                className="title"
                placeholder="Название"
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
                value={title}
            />

            <textarea
                className="description"
                placeholder="Описание"
                onChange={(e) => {
                    setDescription(e.target.value);
                }}
                value={description}
            />
            <div
                className={"flexRow"}
                style={{
                    justifyContent: "space-between",
                    padding: "8px 12px",
                    overflow: "auto",
                }}
            >
                <div
                    className={"flexRow"}
                    style={{
                        alignItems: "center",
                        gap: "10px",
                    }}
                >
                    <input
                        type="file"
                        onChange={(e) => {
                            setFile(e.target.value);
                        }}
                        value={file}
                    />
                    <input
                        type="date"
                        onChange={(e) => {
                            setEndDate(e.target.value);
                        }}
                        value={endDate}
                    />

                    <p>Завершена:</p>
                    <input
                        type="checkbox"
                        checked={complete}
                        onChange={(e) => {
                            setComplete(e.target.checked);
                        }}
                    />
                    <button onClick={() => remove()}>Удалить</button>
                    {new Date(task.endDate) < new Date() ? (
                        <p>Время кончилось</p>
                    ) : (
                        ""
                    )}
                </div>
                {wasChange && (
                    <div className="flexRow" style={{ gap: "20px" }}>
                        <button onClick={getTask}>Отменить</button>
                        <button onClick={setTask}>Принять</button>
                    </div>
                )}
            </div>
        </div>
    );
}
