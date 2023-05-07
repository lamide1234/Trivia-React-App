import {useRef, useState} from "react";

export default function Start({setUsername, difficulty}) {
    const[mode, setMode]=useState("easy");
    const inputRef=useRef();
    const handleClick= ()=>{
        inputRef.current.value && setUsername(inputRef.current.value);
    };

    // const difficulty =(event)=>{
    // {/*setDifficulty(event.target.value);*/}

    // };

    console.log("mode>>>", mode)

  return (
    <div className="start">
      <div className="title">Who Wants to Be a Millionaire</div>
        <label>Username:
        <input 
        placeholder="enter your name" 
        className= "startInput" 
        ref={inputRef}
        />
        </label>
        <div className="levels">
        <button className="easy" onClick={() => setMode("easy")}>Easy</button>
        <button className="Medium" onClick={() => setMode("medium")}>Medium</button>
        <button className="Hard" onClick={() => setMode("hard")}>Hard</button>
        </div>


       <button className="startButton" onClick={handleClick}> Start </button>
        
    </div>
    
  )
  }
