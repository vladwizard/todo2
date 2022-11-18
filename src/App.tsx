import React, {useEffect, useState} from 'react';
import './App.css';
import TaskBlock from "./TaskBlock/TaskBlock";


function App() {

    // let asd = React.useState(false);
    // let nT = React.useState(0);
    const [tasks,setTasks] = React.useState<any[]>([]);

    let [tasksCount,setTasksCount] = useState(0)


    function AddTask() {
        setTasks(tasks.slice().concat({
            title: tasksCount.toString(),
            description: 'Описание',
            file: '',
            endData: '',
            complete: false,
        }));
        setTasksCount(tasksCount+1)
    }

    return (
        <div className="wrapper">
            <header>
                {/*<button onClick={() => asd[1](!asd[0])}>true</button>*/}
                <button onClick={() => AddTask()}>Add task</button>
                <button onClick={() => console.log(tasks)}>show</button>
            </header>
            <main>
                {tasks.map((task, index) =>
                    <div>{index}
                    <TaskBlock  key={index} task={task} remove={() =>{

                        console.log(tasks);

                        console.log(tasks.slice(0,index).concat(tasks.slice(index+1)));
                        setTasks(tasks.slice(0,index).concat(tasks.slice(index+1)));
                        }}/>

                    </div>
                )}
            </main>

            {/*<div className="bottom_panel">*/}
            {/*    <div>*/}
            {/*        <p> {tasks.filter((item) => item.completed == false).length} items left</p>*/}
            {/*    </div>*/}
            {/*    <div className='center'>*/}
            {/*        <button className={filter == null ? 'active' : ''}*/}
            {/*                onClick={() => setFilter(null)}*/}
            {/*        >All*/}
            {/*        </button>*/}
            {/*        <button className={filter == false ? 'active' : ''}*/}
            {/*                onClick={() => setFilter(false)}*/}
            {/*        >Active*/}
            {/*        </button>*/}
            {/*        <button className={filter == true ? 'active' : ''}*/}
            {/*                onClick={() => setFilter(true)}*/}
            {/*        >Completed*/}
            {/*        </button>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <button onClick={*/}
            {/*            () => {*/}
            {/*                setTasks(tasks.filter((item) => item.completed == false));*/}
            {/*                setFilter(null);*/}
            {/*            }*/}
            {/*        }*/}
            {/*        >Clear completed*/}
            {/*        </button>*/}
            {/*    </div>*/}

            {/*</div>*/}
        </div>
    );
}

export default App;
