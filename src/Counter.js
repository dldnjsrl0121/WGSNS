import React, { useState } from 'react';

const Counter =  function(props){
    const [count, setCount] = useState(0);
    const incrementBy = parseInt(props.incrementBy);
    console.log(incrementBy);
    const increment = () => {
        setCount(count + incrementBy);
    };
    return (
        <button onClick={increment} >
            Increment By {props.incrementBy} Button Count =  {count}
        </button>
    )
}

export default Counter;