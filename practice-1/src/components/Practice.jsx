import React, { useEffect, useState } from 'react'

function Practice() {
    const [count, setCount] = useState(0);
    // const [info, setInfo] = useState('');


    // useEffect(() => {
    //     if (count % 2 === 0) {
    //         setInfo('Este numero es par')
    //     } else {
    //         setInfo('')
    //     }
    // },[count])

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () =>  {
        if (count < 1) {
            alert('el minimo es uno')
            return
        }
        setCount(count - 1);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            {/* <h1>{info ? info : <></>}</h1> */}
            <h1>{count % 2 === 0 ? `Este es numero par: ${count}`  : '' }</h1>
        </div>
    )

}

export default Practice