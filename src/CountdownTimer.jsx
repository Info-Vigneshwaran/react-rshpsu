import React , {useState,useEffect} from "react";

const CoundownTimer = (()=>{
    const [timer,setTimer] = useState(90)
    const [isPasue,setIsPasue] = useState(false)
    const [timerInterval,setTimerInterval] = useState(0)
    const startTimer = (()=>{
        setIsPasue(!isPasue)
        !isPasue ?
        setTimerInterval(setInterval(() => {
            setTimer((prev) => prev + 1);
          }, 1000)) : clearInterval(timerInterval)
    })
    const pauseTimer = (()=>{
        
        clearInterval(timerInterval)
    })
    const resetTimer = (()=>{
        clearInterval(timerInterval)
        setTimer(0)
    })
    return (
    <>
    {timer}
    <button onClick={startTimer} >{isPasue ? 'Pause' : 'Start'}</button>
    <button onClick={pauseTimer} >Pause</button>
    <button onClick={resetTimer} >Reset</button>
    </>
)})

export default CoundownTimer