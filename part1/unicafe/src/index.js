import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({func, txt}) =><button onClick={func}>{txt}</button>

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <div>
                <h1>give feedback</h1>
                <Button func={()=>setGood(good+1)} txt='good' />
                <Button func={()=>setNeutral(neutral+1)} txt='neutral' />
                <Button func={()=>setBad(bad+1)} txt='bad' />
            </div>
            <div>
                <h1>statistics</h1>
                <p>good {good}</p>
                <p>neutral {neutral}</p>
                <p>bad {bad}</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)