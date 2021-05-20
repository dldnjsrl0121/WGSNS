import React, { useState } from 'react';
import './App.css';

function App() {
    const [exCount, newCount] = useState(0);

    const counter = function (incrementBy) {
        newCount(exCount + incrementBy);
    }

    return (
        <div>
            <h1>
                useState Practice
            </h1>
            <button onClick={() => counter(3)}>Counter {exCount}</button>
            </div>
    );
}


export default App;
