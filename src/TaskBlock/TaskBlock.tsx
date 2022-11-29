import { useState } from "react";
import { Task } from "../Types";
import "./TaskBlock.css"

/**
 * @param {string} task - ссылка на обьект с параметрами
 * @param {() => void} remove  - Функция удаления обекта с данными из массива
 * @Description  reRender - Запускает ререндер при изменении в блоке, это не задействует вычисления, а описывает логику для reactа; в релиз не допускактся
 */

export default function ({ task, remove }: { task: Task; remove: () => void }) {
    const [varRender, setVarRender] = useState(false);
    function reRender() {
        setVarRender(!varRender);
    }

    return (
        <div className="TaskBlock flexColumn" onChange={() => { reRender() }}>
            <input
                className="title" 
                placeholder="Название"
                onChange={(e) => {
                    task.title = e.target.value;

                }}
                value={task.title}
            />
            <textarea
                className="description"
                placeholder="Описание"
                onChange={(e) => {
                    task.description = e.target.value;
                }}
                value={task.description}
            />
            <div className={"flexRow"} style={{ alignItems: "center" }}>
                <input
                    type="file"
                    onChange={(e) => {
                        task.file = e.target.value;
                    }}
                    value={task.file}
                />
                <input
                    type="date"
                    onChange={(e) => {
                        task.endDate = e.target.value;
                    }}
                    value={task.endDate}
                />

                <p>Завершена:</p>
                <input
                    type="checkbox"
                    checked={task.complete}
                    onChange={(e) => {
                        task.complete = e.target.checked;
                    }}
                />
                <button onClick={() => remove()}>Удалить</button>
                {new Date(task.endDate) < new Date() ? (
                    <p>Время кончилось</p>
                ) : (
                    ""
                )}
            </div>
        </div>
    );
}
