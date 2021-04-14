import React, { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(prevCount => prevCount + 1);
    }
    const decrease = () => {
        setCount(prevCount => prevCount - 1);
    }

    return (
        <div>
            <h1>{ count }</h1>
            <button onClick={increase }>+1</button>
            <button onClick={decrease }>-1</button>
        </div>

    )

}

export default Counter
