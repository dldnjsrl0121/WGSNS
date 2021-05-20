import React, { useState, useEffect } from 'react';
import Counter from './Counter';
import './App.css';

function App() {

    return (
        <div>
            <h1>
                useState Practice
            </h1>
            <Counter incrementBy="1"/>
            <Counter incrementBy="2" />
            <Counter incrementBy="3" />
        </div>
    );
}


export default App;
