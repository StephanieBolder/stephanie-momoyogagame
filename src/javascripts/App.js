import React, { useState, useEffect } from 'react';
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
        <div>
            {
                poses.map(({pose, completed, score, imageUrl},index) => {
                    return <YogaPose onCompleted={() => onCompleted(index)} pose={pose} completed={completed} score={score} imageUrl={imageUrl}/>
                })
            }
            <p>{score}</p>
        </div>
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
        <div class=''>
<button onClick={() => onCompleted()}class="bg-bookedgroen rounded text-lg text-center text-white py-1 px-2">{completed ? <img className="w-6 h-8" src="images/tick.png"/> : `+${score}`}</button>
        </div>
      </div>
    </div>
    );
};





export default App;