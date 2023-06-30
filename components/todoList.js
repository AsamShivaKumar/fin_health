import { useState } from "react";
import Task from "@/components/task";

export default function TodoList(){
    const [tasks,setTasks] = useState([]);
    const [text,setText] = useState("");
    const [matchingTasks,setMatchingTasks] = useState([]);

    function addTask(evt){
        evt.preventDefault();
        setTasks([...tasks,[text,0]]);
    }

    function search(){
        const arr = [];
        tasks.forEach((task,ind) => {if(task[0].includes(text)) arr.push(ind)});
        setMatchingTasks(arr);
    }

    function deleteTask(ind){
        setTasks(prev => [...prev.slice(0,ind),...prev.slice(ind+1)])
        if(matchingTasks.length > 0) setMatchingTasks(prev => {
            const arr = [];
            prev.forEach(num => {
                if(num < ind) arr.push(num)
                else if(num > ind) arr.push(num-1)
            });
            return arr;
        });
    }

    function completeTask(ind){
        setTasks(prev => [...prev.slice(0,ind),[prev[ind][0],1],...prev.slice(ind+1)])
    }

    return (
        <div className="w-screen h-screen bg-blue-700 justify-center items-center flex-col" style={{display: "flex"}}>
            <div className="w-[400px] h-[90vh] bg-white rounded-md flex-col items-center py-[20px]" style={{display: "flex"}}>
                <div style={{display: "flex"}}>
                    <form onSubmit={(evt) => addTask(evt)}>
                        <input type="text" value={text} placeholder="Type to add or search" onChange={(evt) => setText(evt.target.value)}/>
                    </form>
                    <button className="bg-blue-700 rounded-full px-[20px] py-[5px] text-[0.7rem] ml-[10px]" onClick={search}>Search</button>
                </div>
                {matchingTasks.length === 0 && 
                    <div className="tasks mt-[10px]">
                        {tasks.map((task,ind) =>(<Task name={task[0]} status={task[1]} ind={ind} key={ind} complete={completeTask} delete={deleteTask} />))}
                    </div>
                }
                {matchingTasks.length > 0 && 
                    <div className="tasks mt-[10px]">
                        {matchingTasks.map(ind =>(<Task name={tasks[ind][0]} status={tasks[ind][1]} ind={ind} key={ind} complete={completeTask} delete={deleteTask}/>))}
                    </div>
                }
            </div>
        </div>
    )
}