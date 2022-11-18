import React from "react";
import {Task} from "../Types"

/**
 * @param {string} task - ссылка на обьект с параметрами
 * @param {string,string,string,string,boolean} title, description, file, endDate, complete - ссылка на обьект с параметрами
 * @param {() => void} remove  - Функция удаления обекта с данными из массива
 * @param {refresh: (key: string, value: any)=>void }} refresh  - Функция изменения в обьекте с данными, по ключу
 */
export default function ({task,title, description, file, endDate, complete, remove, refresh}:
    {task:Task, title: string, description: string, file: string, endDate: string, complete: boolean, remove: () => void, refresh: (key: string, value: any)=>void }) {
    return (
        <div className="TaskBlock flexColumn">
            <input className='title' onChange={e => {
                refresh('title', e.target.value)
            }} value={title}/>
            <textarea className='description' onChange={e => {
                refresh('description', e.target.value)
            }}
                      value={description}/>
            <div className={"flexRow"}>
                <input type="file" onChange={e => {
                    refresh('file', e.target.value)
                }} value={file}/>
                <input onChange={e => {
                    refresh('endDate', e.target.value)
                }} type="date" value={endDate}/>
                <div className="completeArea">
                    <label htmlFor="complete">Завершена:</label>
                    <input id="complete" type="checkbox" checked={complete}
                           onChange={e => {
                               refresh('complete', e.target.checked)
                           }}/>
                </div>
                <button onClick={(e) => remove()
                }>Удалить
                </button>
                {new Date(task.endDate) < new Date() ? <p>Время кончилось</p> : ''}
            </div>
        </div>
    );
}