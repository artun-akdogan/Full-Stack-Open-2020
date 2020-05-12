import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () =>{
    const [countries, setCountries] = useState([])
    const [filterName, setFilterName] = useState('')
    const countryList = countries.filter(val => val.name.toLowerCase().includes(filterName.toLowerCase()))
    let countryDisplay = <div></div>

    if(countryList.length >= 10){
        countryDisplay = <div>Too many maches, specify another filter</div>
    }
    else if(countryList.length > 1){
        countryDisplay = countryList.map(val => <div key={val.name}>{val.name}<button onClick={()=>setFilterName(val.name)}>show</button></div>)
    } 
    else if(countryList.length === 1){
        countryDisplay = (
            <div>
                <h1>{countryList[0].name}</h1>
                <p>capital {countryList[0].capital}</p>
                <p>population {countryList[0].population}</p>
                <h2>languages</h2>
                <ul>
                    {countryList[0].languages.map(val => <li>{val.name}</li>)}
                </ul>
                <img width={100} src={countryList[0].flag} />
            </div>
        )
    }

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/all").then(response => {
            setCountries(response.data)
        })
    }, [])
    
    return (
        <div>
            find countries <input value={filterName} onChange={event => setFilterName(event.target.value)}/>
            {countryDisplay}
        </div>
    )
}

export default App