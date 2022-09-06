import React, { useState } from "react";
const FunctionalComponent = (props) => {




    //you can use as creating a new function or in  a single line
    const [count, setCount] = useState(0)
    const [changeName, setChangeName] = useState("")
    const substrateConst = () => {
        setCount(count - 1)
    }
    const { name, age, company, setName } = props

    return (
        <div>
            <p>
                This is functional Component
            </p>
            <button onClick={() => setCount(count + 1)}>Click me to Add 1</button>
            <button onClick={substrateConst}>Click me to substrate 1</button>
            <h1>
                {count}
            </h1>
            <h1>My name is {name} I am  {age} work for {company}</h1>
            <input onChange={(e) => setChangeName(e.target.value)} />
            <button onClick={() => setName(changeName)}>
                Change name
            </button>
        </div>
    )
}
export default FunctionalComponent;