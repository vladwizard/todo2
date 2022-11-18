import React from 'react';
import './App.css';
import TaskBlock from "./TaskBlock/TaskBlock";
/**
 * @description tasks - массив обьектов с данными задачи
 * @description AddTasks - функция добавления в массив
 */

function App() {

    const [tasks,setTasks] = React.useState<any[]>([]);


    function AddTask() {
        setTasks(tasks.slice().concat({
            title: 'Название',
            description: 'Описание',
            file: '',
            endDate: '',
            complete: false,
        }));
    }

    return (
        <div className="wrapper">
            <header>
                <button onClick={() => AddTask()}>Add task</button>
            </header>
            <main>
                {tasks.map((task, index) =>
                    <TaskBlock  key={index} task={task} title = {task.title} description={task.description} file={task.file} endDate={task.endDate} complete={task.complete} remove={() =>{
                        setTasks(tasks.slice(0,index).concat(tasks.slice(index+1)));
                        }}
                        refresh={(key:string,value:any)=>{
                            let newTasks = tasks.slice(0);
                            newTasks[index][key]=value;
                            setTasks(newTasks);
                        }}
                    />
                )}
            </main>

        </div>
    );
}

export default App;
