import './app.scss'

import {useState, useEffect} from 'react'
import Search from '../search/Search'
import Icon from '../icon/Icon'
import WeatherPanel from '../weatherPanel/WeatherPanel'
import WeatherService from '../../services/WeatherService'

const App = () => {
   const [city, setCity] = useState('London')
   const [weather, setWeather] = useState({"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":801,"main":"Clouds","description":"небольшая облачность","icon":"02d"}],"base":"stations","main":{"temp":280.57,"feels_like":277.25,"temp_min":279.65,"temp_max":281.55,"pressure":1026,"humidity":49},"visibility":10000,"wind":{"speed":5.66,"deg":300,"gust":13.89},"clouds":{"all":20},"dt":1643645331,"sys":{"type":2,"id":2019646,"country":"GB","sunrise":1643614837,"sunset":1643647626},"timezone":0,"id":2643743,"name":"Лондон","cod":200})

   const weatherService = new WeatherService()

   const updateStateWeather = async (obj) => {
      await setWeather(obj)
   }

   const updateCity = async (newCity) => {
      await setCity(newCity)

      await weatherService
      .getWeatherByCity(city)
      .then(updateStateWeather)
   }

   return (
      <div className="app">
         <div className="container">
            <Search updateCity={updateCity}/>
            <Icon/>
            <WeatherPanel weather={weather}/>
         </div>
      </div>
   )
}

export default App
