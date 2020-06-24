import React, { useState, useEffect, Fragment} from 'react';
import yogaJson from './yoga.json';
const App = () => {
    const [poses, setPoses] = useState([]);
    const [score, setScore] = useState(0);
  
    const onCompleted = (index) => {
        setPoses(
            poses.map((item,ind) => 
                ind == index 
                ? {...item, completed : true} 
                : item 
        ))
        setScore(prevScore => prevScore + 1);
        
    }

    useEffect(() => {
        setPoses(yogaJson.data);
    },[])

    return (
        <Fragment><div class='flex bg-fixed z-10 py-8 bg-roze bg-cover'>
        <h1 class='pl-12 font-display font-bold text-2xl text-white'>Momoyoga Game</h1>
            </div>
        <div className="flex justify-center flex-col">
        <div className="">
            {
                poses.map(({pose, completed, score, imageUrl},index) => {
                    return <YogaPose onCompleted={() => onCompleted(index)} pose={pose} completed={completed} score={score} imageUrl={imageUrl}/>
                })
            }

        </div>
         <p className="py-4 text-center font-bold">Your score:{score}</p>
         <button className="w-4/12 mx-auto py-4 px-2 text-white font-bold bg-oranje rounded-lg shadow-lg"onClick={() => window.location.href = "/coincenter.html"}>End session</button>
   </div>
   </Fragment>
    )
}



const YogaPose = ({pose, onCompleted, completed, score, imageUrl}) => {
    return (
        <div class="shadow-xl px-2 mx-6 mt-2 py-2 bg-white flex justify-between items-center">
    <div>
      <img class="items-center pl-2 h-12 w-14" src={imageUrl}/>
    </div>
    <div class=''>
        <div class="text-black">{pose}</div>
      </div>
      <div class='flex items-center text-right'>
        <div class='flex items-center justify-center '>
<button onClick={() => onCompleted()}class="bg-bookedgroen rounded text-lg text-center text-white py-1 px-2">{completed ? <img className="w-6 h-8" src="images/tick.png"/> : `+${score}`}</button>
        </div>
      </div>
    </div>
    );
};






export default App;