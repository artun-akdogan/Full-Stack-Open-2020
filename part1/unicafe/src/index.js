import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({func, txt}) =><button onClick={func}>{txt}</button>

const Statistic = ({text, value}) =>(
    <tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr>
)

const Statistics = ({good, neutral, bad}) =>{
    const all = (good+neutral+bad)
    if(all===0){
        return(
            <p>No feedback given</p>
        )
    }
    const average  = ((good-bad)/all).toFixed(1)
    const positive = (good*100/all).toFixed(1)+' %'
    return(
        <table>
            <tbody>
                <Statistic text='good' value={good} />
                <Statistic text='neutral' value={neutral} />
                <Statistic text='bad' value={bad} />
                <Statistic text='all' value={all} />
                <Statistic text='average' value={average} />
                <Statistic text='positive' value={positive} />
            </tbody>
        </table>
    )
}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <Button func={()=>setGood(good+1)} txt='good' />
                <Button func={()=>setNeutral(neutral+1)} txt='neutral' />
                <Button func={()=>setBad(bad+1)} txt='bad' />
            </div>
            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)