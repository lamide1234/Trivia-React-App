import{useEffect, useState} from "react";
import useSound from "use-sound";
import theme from "src\assets\theme.mp3";
import correct from "src\assets\correct.mp3";
import start from "src\assets\start.mp3";
import end from "src\assets\end.mp3";
import wow from "src\assets\wow.mp3";
import lose from "src\assets\Lose.mp3";
export default function Trivia({data, setTimeOut, questionNumber, setQuestionNumber,setStop})
    {const[question, setQuestion]=useState(null);
        const[selectedAnswer, setSelectedAnswer]= useState(null);
        const[ className, setClassName]= useState("answer");
        const[start]=useSound(theme);
        const[correctanswer]=useSound(theme);
        const[wronganswer]=useSound(theme);
        const[highscore]=useSound(theme);
        const[maintheme]=useSound(theme);
    
        useEffect(()=>{setQuestion(data[questionNumber -1]);},[data, questionNumber]);
        const delay=(duration, callback)=>{setTimeout(()=>{callback();}, duration);};

        const handleClick= (a)=>{
                        setSelectedAnswer(a); 
                        setClassName("answer active"); 
                        delay(3000,()=>setClassName(a.correct? "answer correct":"answer wrong"));
                        delay(6000,()=>{if(a.correct){setQuestionNumber((prev)=>prev+1); setSelectedAnswer(null)}
                                       else{setStop(true);}
                                    });
                                }
      return (
        <div className="trivia">
            <div className='question'>{question?.question}</div>
            <div className='answers'>
                {question?.answers.map((a) => 
                (<div className={selectedAnswer=== a? className: "answer"} onClick={()=>handleClick(a)}>{a.text}</div>))
                }
            </div>    
        </div>
            );
        }