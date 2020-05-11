import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () =>{
    const [country, setCountry] = useState([])
    const [filterName, setFilterName] = useState('')
    let countryList = country.filter(val => val.name.toLowerCase().includes(filterName.toLowerCase()))
    let countryInfo = <div></div>
    console.log(countryList)

    if(countryList.length >= 10){
        countryInfo = <div>Too many maches, specify another filter</div>
    }
    else if(countryList.length > 1){
        countryInfo = countryList.map(val => <div key={val.name}>{val.name}</div>)
    } 
    else if(countryList.length === 1){
        countryInfo = (
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
            setCountry(response.data)
        })
    }, [])

    console.log(country)
    
    return (
        <div>
            find countries <input value={filterName} onChange={event => setFilterName(event.target.value)}/>
            {countryInfo}
        </div>
    )
}

export default App