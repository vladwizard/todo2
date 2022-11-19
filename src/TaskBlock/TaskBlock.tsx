import React, {useEffect} from "react";
import {Task} from "../Types"

/**
 * @param {string} task - ссылка на обьект с параметрами
 * @param {() => void} remove  - Функция удаления обекта с данными из массива
 * @Description  UseEffect - Переоопределяет поля при изменение массива данных, удалении елемента из мего
 */

export default function ({task, tasks, remove}: { task: Task, tasks: Task[], remove: () => void }) {
    const title = React.useState(task.title);
    const description = React.useState(task.description);
    const file = React.useState(task.file);
    const date = React.useState(task.endDate);
    const complete = React.useState(task.complete);

    useEffect(() => {
        title[1](task.title)
        description[1](task.description)
        file[1](task.file)
        date[1](task.endDate)
        complete[1](task.complete)
    }, [tasks])

    return (
        <div className="TaskBlock flexColumn">
            <input className='title' onChange={e => {
                title[1](e.target.value)
                task.title = e.target.value
            }} value={title[0]}/>
            <textarea className='description' onChange={e => {
                description[1](e.target.value)
                task.description = e.target.value
            }} value={description[0]}/>
            <div className={"flexRow"}>
                <input type="file" onChange={e => {
                    file[1](e.target.value)
                    task.file = e.target.value
                }} value={file[0]}/>
                <input onChange={e => {
                    date[1](e.target.value)
                    task.endDate = e.target.value
                }} type="date"/>
                <div className="completeArea">
                    <label htmlFor="complete">Завершена:</label>
                    <input id="complete" type="checkbox" checked={complete[0]}
                           onChange={e => {
                               complete[1](e.target.checked)
                               task.complete = e.target.checked
                           }}/>
                </div>
                <button onClick={(e) => remove()
                }>Удалить
                </button>
                {new Date(date[0]) < new Date() ? <p>Время кончилось</p> : ''}
            </div>
        </div>
    );
}