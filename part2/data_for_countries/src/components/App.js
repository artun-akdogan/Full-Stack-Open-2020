import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Weather = ({city}) => {
    const [weather,setWeather] = useState({})
    useEffect(() => {
    axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${city}`).then(response => {
        setWeather(response.data)
    })}, [])
    if(Object.keys(weather).length !== 0 && weather.success!==false)
    return (
        <div>
            <h2>Weather in {city}</h2>
            <p><b>temperature:</b> {weather.current.temperature} Celcius</p>
            <img src={weather.current.weather_icons} alt={weather.current.weather_descriptions}/>
            <p><b>wind:</b> {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
        </div>
    )
    else return <div></div>
}

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
                <h2>Spoken languages</h2>
                <ul>
                    {countryList[0].languages.map(val => <li key={val.name}>{val.name}</li>)}
                </ul>
                <img width={120} src={countryList[0].flag} alt={countryList[0].name} />
                <Weather city={countryList[0].capital} />
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