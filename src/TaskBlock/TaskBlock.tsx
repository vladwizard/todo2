import React from "react";
import {Task} from "../Types"


export default function ({task, remove}: { task: any, remove: () => void }) {
    const title = React.useState(task.title);
    const description = React.useState(task.description);
    const file = React.useState(task.file);
    const date = React.useState(task.endData);
    const complete = React.useState(task.complete);

    return (
        <div className="TaskBlock flexColumn">
            <input className='title' onChange={e => {
                title[1](e.target.value)
            }} value={title[0]}/>
            <textarea className='description' onChange={e => description[1](e.target.value)} value={description[0]}/>
            <div className={"flexRow"}>
                <input type="file" onChange={e => file[1](e.target.value)} value={file[0]}/>
                <input onChange={e => date[1](e.target.value)} type="date"/>
                <div className="completeArea">
                    <label htmlFor="complete">Завершена:</label>
                    <input id="complete" type="checkbox" checked={complete[0]}
                           onChange={e => complete[1](e.target.checked)}/>
                </div>
                <button onClick={(e) => remove()
                }>Удалить
                </button>
                {new Date(date[0]) < new Date() ? <p>Время кончилось</p> : ''}
            </div>
        </div>
    );
}