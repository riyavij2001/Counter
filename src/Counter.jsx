import React, { useState } from 'react'

function Counter() {
    let [counter, setCounter] = useState(10)

    const addValue = () => {
        if (counter < 20) {
            setCounter(counter + 1)
        }
    }
    const removeValue = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
    }
    return (

        <div style={{ alignItems: 'center', justifyContent: "center", margin: "40vh"}}>
            <h1 >Counter: {counter}</h1>
            <h3>You can Increase the counter or Decrease the counter between 0-20</h3>
            <div style={{ padding: "30px" }}>
                <button style={{marginRight:"20px"}} onClick={addValue}>Add</button>
                <button onClick={removeValue}>Remove</button>
            </div>
        </div>
    )
}

export default Counter