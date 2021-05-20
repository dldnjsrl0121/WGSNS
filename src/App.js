import React, { useState } from 'react';
import './App.css';

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const onSubmit = function (e) {
        alert('submittted');
        console.log(username);
        console.log(password);
    };

    return (
        <div>
            <h1>
                useState Practice
            </h1>
            <form onSubmit={onSubmit}>
                    <input placeholder="id" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <br />
                <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type ="submit" value="submit" />
                </form>
            </div>
    );
}

function write() {

}

export default App;
