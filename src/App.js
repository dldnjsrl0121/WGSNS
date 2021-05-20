import React, { useState , useEffect} from 'react';
import './App.css';

function App() {
    const [exCount, newCount] = useState(0);
    const [exCount2, newCount2] = useState(0);
    useEffect(() => {
        console.log(exCount);
    },[exCount,exCount2]);
    const counter = function (incrementBy,exC,newC) {
        newC(exC + incrementBy);
    }

    return (
        <div>
            <h1>
                useState Practice
            </h1>
            <button onClick={() => counter(1,exCount,newCount)}>Counter {exCount}</button>
            <button onClick={() => counter(2,exCount2,newCount2)}>Counter {exCount2}</button>
            </div>
    );
}


export default App;
