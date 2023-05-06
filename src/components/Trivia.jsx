import{useEffect, useState} from "react";
import useSound from "use-sound";
import theme from "../assets/theme.mp3"; 
import correct from "../assets/correct.mp3";
import start from "../assets/start.mp3";
import end from "../assets/end.mp3"; 
import wow from "../assets/wow.mp3";
import lose from "../assets/Lose.mp3";

export default function Trivia({data, questionNumber, setQuestionNumber,setStop})
    {const[question, setQuestion]=useState(null);
        const[selectedAnswer, setSelectedAnswer]= useState(null);
        const[ className, setClassName]= useState("answer");
        const[letsPlay]=useSound(start);
        const[correctAnswer]=useSound(correct);
        const[wronganswer]=useSound(lose);
        const[highscore]=useSound(wow);
        const[maintheme]=useSound(theme);
        const[finish]=useSound(end);
        
        useEffect(()=>{
            letsPlay();
        },[letsPlay]);

        useEffect(()=>{setQuestion(data[questionNumber -1]);},[data, questionNumber]);
        const delay=(duration, callback)=>{
            setTimeout(()=>{
                callback();
            }, duration);
        };

        const handleClick= (a)=>{
                        setSelectedAnswer(a); 
                        setClassName("answer active"); 
                        delay(3000,()=>setClassName(a.correct? "answer correct":"answer wrong"));
                        delay(5000,()=>{if(a.correct){
                            correctAnswer();
                            delay(1000,()=>{
                            setQuestionNumber((prev)=>prev+1); 
                            setSelectedAnswer(null);
                            });
                            
                        }
                                       else{
                                        wronganswer();
                                        delay(1000, ()=>{
                                            setStop(true);
                                        })
                                    }
                                    });
                                }
      return (
        <div className="trivia">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((a) => 
                (<div className={selectedAnswer=== a ? className: "answer"} onClick={()=>handleClick(a)}>{a.text}</div>))
                }
            </div>    
        </div>
            );
        }