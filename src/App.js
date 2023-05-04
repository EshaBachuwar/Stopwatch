
import './App.css';
import { BtnDisplayComponent } from './components/BtnDisplayComponent';
import { DisplayComponent } from './components/DisplayComponent';
import {useState,useEffect} from 'react';

// import { TimeList } from './components/TimeList';

function App() {

  const [time,setTime]=useState({ms:0,s:0,m:0,h:0});
  const[interv,setInterv]=useState();
  const[status,setStatus]=useState(0);
  const[timeList,setTimeList]=useState([]);
  const[state,setState]=useState(1);


  const[timerTime,setTimerTime]=useState(0);
  const[startTimer,setStartTimer]=useState(false);
  const[timerId,setTimerId]=useState(0)

  // const[index,setIndex]=useState(0);

  useEffect(() => {
    console.log(timeList);
  }, [timeList])


  useEffect(()=>{
    let intervalid=null;
    if(startTimer){
      intervalid=setInterval(() => {
        setTimerTime(prev=>prev+=1);
      },1000);
      setTimerId(intervalid);
    }
    else{
      clearInterval(timerId);
    }
  },[startTimer])
  

  const start=()=>{
    setStatus(1);
    run();
    // console.log(time);
    setInterv(setInterval(run,10));
  }
  var updateMs=time.ms;
  var updateS=time.s;
  var updateM=time.m;
  var updateH=time.h;

  const run=()=>{
    if(updateM===60){
      updateH++;
      updateM=0;
    }
    if(updateS===60){
      updateM++;
      updateS=0;
    }
    if(updateMs===100){
      updateS++;
      updateMs=0;
    }
    updateMs++;
    return setTime({ms:updateMs,s:updateS,m:updateM,h:updateH});
    
  }


  const stop=()=>{
    clearInterval(interv);
    setStatus(2);
    
  }
  const reset=()=>{
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0,s:0,m:0,h:0});
    setTimeList([]);
  }

  const resume=()=>{
    start();
  }

  const timeStamp=()=>{
    // setIndex(index+1);
    setTimeList([...timeList,time])
  }

  const updateState=()=>{
    if(state===0){
      setState(1);
    }
    else{
      setState(0);
    }
  }
  const restart=()=>{
    setStartTimer(false);
    
  }

  return (
    <div className="App">
      <div className='main-section'>
        {/* <Navbar/> */}
        <div className='heading'>
          {state===0?<h1 className='header1'>STOPWATCH</h1>:<h1 className='header1'>TIMER</h1>}
          {state===0?<h3 className='header2' onClick={updateState}>Timer</h3>:<h3 className='header2' onClick={updateState}>Stopwatch</h3>}
          
         {/* <h3 className='header2'>timer</h3> */}
         </div>
         {state===0?
         <div>
         <div className='clock-holder'>
         <div className='stopwatch'>
           <DisplayComponent time={time}/>
           <BtnDisplayComponent status={status} timeStamp={timeStamp} resume={resume} stop={stop} reset={reset} start={start}/>
         </div>
       </div>
       <div className='timeStamps'> 
            {timeList.length===0?" ":<h1>Time Stamps</h1>}
          <div className='timeList'>
            {timeList.map((time)=>{
              return(
                // setIndex({index}+1),
                  <div className='list'>
               {time.h}:{time.m}:{time.s}:{time.ms}
                  </div>
              )
              // {setIndex(index+1);}
            })}
          </div>
         </div>
       </div>
         :
         <div className='timer'>
             <div className='time'>
                {timerTime}
             </div>
             <div className='button-wrap'>
              <button className='button btn-start' onClick={()=>setStartTimer(true)}>Start</button>
              <button className='button btn-stop' onClick={()=>setStartTimer(false)}>Stop</button>
              <button className='button btn-restart' onClick={restart}>Restart</button>
             </div>
          </div>}
        
          
        
     
      </div>     
    </div>
  );
}

export default App;
