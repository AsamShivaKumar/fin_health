
export default function Task(props){

    const bg = props.status === 0? "":"bg-slate-400";

    return (
        <div className={`w-[350px] flex-row justify-between items-center p-[10px] text-black rounded-[10px] ${bg} mt-[10px]`} style={{display: "flex", border: "solid 2px black"}}>
            <p>{props.name}</p>
            <div className="flex-col" style={{display: "flex"}}>
                {props.status === 0 && <button className="bg-blue-700 rounded-full px-[20px] py-[5px] text-[0.7rem] ml-[10px] mb-[5px] text-white" onClick={() => props.complete(props.ind)}>Complete</button>}
                <button className="bg-red-700 rounded-full px-[20px] py-[5px] text-[0.7rem] ml-[10px] text-white" onClick={() => props.delete(props.ind)}>Delete</button>
            </div>
        </div>
    )
}