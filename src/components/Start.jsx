import {useRef} from "react";
export default function Start({setUsername}) {
    const inputRef=useRef();
    const handleClick= ()=>{
        inputRef.current.value && setUsername(inputRef.current.value);
    };

    const handleDifficultyClick=(event)=>{
    {/*setDifficulty(event.target.value);*/}

    };

  return (
    <div className="start">
        <label>Username:
        <input 
        placeholder="enter your name" 
        className= "startInput" 
        ref={inputRef}
        />
        </label>
        <div className="levels">
        <button className="easy" onClick={handleDifficultyClick}>Easy</button>
        <button className="Medium" onClick={handleDifficultyClick}>Medium</button>
        <button className="Hard" onClick={handleDifficultyClick}>Hard</button>
        </div>


       <button className="startButton" onClick={handleClick}> Start </button>
        
    </div>
    
  )
  }
