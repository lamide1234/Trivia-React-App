import { useEffect, useMemo, useState } from "react";
import { easyQuestions, mediumQuestions, hardQuestions } from "./questions";
import "./app.css"
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";
function App() {
  const[username, setUsername]= useState(null);
  const[ questionNumber, setQuestionNumber]= useState(1);
  // const[difficulty, setDifficulty]=useState("easy");
  const[level, setlevel]=useState(easyQuestions);
  const[stop, setStop]=useState(false);
  const[earned,setEarned]= useState("₦ 0");

// console.log("diff>>", difficulty)
 /* const data = [
      {
        id:1,
        question:"who won 2023 elections in Nigeria",
        answers:[
          {
            text: "Peter Obi",
            correct: false,
          },
          {
            text:"Bola Amhmed Tinubu",
            correct:true,
          },
          {
            text: "Atiku",
            correct: false,
           },
          {
            text: "kwakwanso",
            correct: false, 
          } ,  
        ] ,
      },
      {
        id:2,
        question: "Generation Z is for what range of years?",
        answers:[
          {
            text: "1995-2012",
            correct:true,
          },
          {
            text:"1965-1979",
            correct:false,
          },
          {
            text:"2015-2025",
            correct: false,
          },
          {
            text:"1980-1994",
            correct:false,
          },
        ]
      },
      {
        id:3,
        question: "who was the people's choice in nigeria's 2023 election?",
        answers:[
          {
            text: "Peter Obi",
            correct: true,
          },
          {
            text:"Bola Amhmed Tinubu",
            correct:false,
          },
          {
            text: "Atiku",
            correct: false,
           },
          {
            text: "kwakwanso",
            correct: false, 
          } ,  
        ]
      }
    ];
*/
const handleDifficulty = (difficulty) => {
  if (difficulty === "easy") {
     setlevel(easyQuestions)
  } else if (difficulty === "medium") {
    setlevel(mediumQuestions)
  } else if (difficulty === "hard") {
    setlevel(hardQuestions)
  }
}


    
  const moneyPyramid= useMemo(()=>[
  {id:1, amount:"₦5,000"},
  {id:2, amount:"₦7,500"},
  {id:3, amount:"₦10,000"},
  {id:4, amount:"₦15,000"},
  {id:5, amount:"₦20,000"},
  {id:6, amount:"₦30,000"},
  {id:7, amount:"₦45,000"},
  {id:8, amount:"₦70,000"},
  {id:9, amount:"₦120,000"},
  {id:10, amount:"₦250;000"},
  {id:11, amount:"₦500,000"},
  {id:12, amount:"₦1 Million"},
  {id:13, amount:"₦2 Million"},
  {id:14, amount:"₦5 Million"},
  {id:15, amount:"10 Million"},

] .reverse(),
  []
  );

  useEffect(()=>{
    questionNumber>1 && setEarned(moneyPyramid.find(m=> m.id===questionNumber-1).amount);},[moneyPyramid, questionNumber]);
  

  return (
    <div className="app">
      {username? (
        <>
      <div className="main">
      {stop? (<h1 className="endText">You earned: {earned}</h1>): (
        <>
      
      <div className="top">
        <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/>
        </div>
      </div>
      <div className="bottom">
      <Trivia data={level} 
      setStop={setStop}
     
      questionNumber={questionNumber}
      setQuestionNumber={setQuestionNumber}
      />
      </div> 
      </>)}

    </div>

    <div className="pyramid">
      {/*
        <div  className= "stuck">
          <div className="50/50">...</div>
          <div className= "call a friend"></div>
          <div className="audience"></div>
        </div>
      */}
      <ul className="moneyList">
        {moneyPyramid?.map((m)=>(
        <li className={questionNumber===m.id? "moneyListItem active": "moneyListItem"}> 
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
         </li>
       ))} 
      </ul>

    </div>
        </>
      ): (<Start setUsername={setUsername} difficulty={handleDifficulty}/>
    )}
    
    </div>
  );
}

export default App;
