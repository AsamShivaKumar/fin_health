import TodoList from "@/components/todoList"


export default function Home() {
  return (
    <>
    <div className='relative w-screen h-screen bg-gradient-to-r from-blue-800 to-cyan-500 overflow-hidden'>
        <div className="relative top-0 w-screen h-[70vh] flex-col justify-center items-center" style={{display: "flex"}}>
          <div className="w-screen flex-col items-center justify-center" style={{display: "flex"}}>
            <h1 className="text-[2.5rem] font-bold translate-x-[15px]">Check your financial health</h1>
            <p className="translate-x-[15px] mt-[10px]">Use WeathoMeter to get a free report </p>
            <p className="translate-x-[15px]">card for your finances- within minutes! </p>
            <button className="bg-orange-600 rounded-full px-[20px] py-[5px] mt-[20px] shadow-lg translate-x-[15px]">Get Started</button>
          </div>
          <div className="w-screen flex-row justify-center" style={{display: "flex"}}>
            <div className="flex-col benDiv mt-[50px]" style={{display: "flex"}}>
               <span>
                  <img src="checkbox.png" className="w-[20px] inline"/>
                  Expected Retirement Age
               </span>
               <span>
                  <img src="checkbox.png" className="w-[20px] inline"/>
                  Indentify Mistakes
               </span>
            </div>
            <img src="mobile.png" className="w-[250px] translate-x-[50px] translate-y-[-10px]"/>
            <div className="flex-col benDiv mt-[50px]" style={{display: "flex"}}>
               <span>
                  <img src="checkbox.png" className="w-[20px] inline"/>
                  Personalised Road Map 
               </span>
               <span>
                  <img src="checkbox.png" className="w-[20px] inline"/>
                  Tips To Improve
               </span>
            </div> 
          </div> 
        </div>  

        <svg id="wave" style={{transform: "rotate(0deg)", transition: "0.3s"}} viewBox="0 0 1440 490" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="rgba(3, 105, 161, 1)" offset="0%"></stop><stop stop-color="rgba(3, 105, 161, 1)" offset="100%"></stop></linearGradient></defs><path style={{transform: "translate(0, 0px)", opacity: 1}} fill="url(#sw-gradient-0)" d="M0,294L60,318.5C120,343,240,392,360,375.7C480,359,600,278,720,269.5C840,261,960,327,1080,359.3C1200,392,1320,392,1440,359.3C1560,327,1680,261,1800,212.3C1920,163,2040,131,2160,147C2280,163,2400,229,2520,228.7C2640,229,2760,163,2880,122.5C3000,82,3120,65,3240,65.3C3360,65,3480,82,3600,114.3C3720,147,3840,196,3960,228.7C4080,261,4200,278,4320,245C4440,212,4560,131,4680,81.7C4800,33,4920,16,5040,65.3C5160,114,5280,229,5400,294C5520,359,5640,376,5760,326.7C5880,278,6000,163,6120,171.5C6240,180,6360,310,6480,310.3C6600,310,6720,180,6840,147C6960,114,7080,180,7200,228.7C7320,278,7440,310,7560,294C7680,278,7800,212,7920,163.3C8040,114,8160,82,8280,98C8400,114,8520,180,8580,212.3L8640,245L8640,490L8580,490C8520,490,8400,490,8280,490C8160,490,8040,490,7920,490C7800,490,7680,490,7560,490C7440,490,7320,490,7200,490C7080,490,6960,490,6840,490C6720,490,6600,490,6480,490C6360,490,6240,490,6120,490C6000,490,5880,490,5760,490C5640,490,5520,490,5400,490C5280,490,5160,490,5040,490C4920,490,4800,490,4680,490C4560,490,4440,490,4320,490C4200,490,4080,490,3960,490C3840,490,3720,490,3600,490C3480,490,3360,490,3240,490C3120,490,3000,490,2880,490C2760,490,2640,490,2520,490C2400,490,2280,490,2160,490C2040,490,1920,490,1800,490C1680,490,1560,490,1440,490C1320,490,1200,490,1080,490C960,490,840,490,720,490C600,490,480,490,360,490C240,490,120,490,60,490L0,490Z"></path></svg>
        <div className="w-screen h-[100px] absolute bottom-0" style={{backgroundColor: "#0369a1"}}></div>
        <div className="absolute w-screen h-[300px] bottom-0 flex-col justify-between items-center py-[20px]" style={{display: "flex"}}>
            <h3 className="text-[2rem] font-bold translate-x-[20px]">How it works?</h3>
            <img src="pic.png" alt="pic" className="w-[500px] h-[60px] translate-x-[20px]" />
            <div className="w-[550px] h-[60px] flex-row justify-between items-center instr translate-x-[20px]" style={{display: "flex"}}>
              <p >Answer few questions</p>
              <p >Register using phone and OTP</p>
              <p >Get report and personal roadmap</p>
            </div>
            <button className="bg-orange-600 rounded-full px-[20px] py-[5px] mt-[20px] shadow-lg translate-x-[20px]">Get Started</button>
        </div>
    </div>
    <TodoList />
    </>
  )
}
