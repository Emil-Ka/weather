import './weatherPanel.scss'
import windy from '../../resources/wind.svg'
import drop from '../../resources/water.svg'

const WeatherPanel = ({weather}) => {
   const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
   const day = (new Date()).getDate()
   const month = (new Date()).getMonth()

   return (
      <div className="wrapper-weather-panel">
         <div className="weather-panel">
            <p className="weather-panel__date">Сегодня, {day} {months[month]}</p>
            <p className="weather-panel__temperature">{(weather.main.temp - 273.15).toFixed()}&#176;</p>
            <p className="weather-panel__sky">{weather.weather[0].description}</p>
            <div className="weather-panel__windy windy">
               <img src={windy} alt="windy-icon" className="windy__img" />
               <span className="windy__desc">Ветер</span>
               <span className="windy__value">{weather.wind.speed.toFixed()} м/с</span>
            </div>
            <div className="weather-panel__humidity humidity">
               <img src={drop} alt="humidity-icon" className="humidity__img" />
               <span className="humidity__desc">Влажность</span>
               <span className="humidity__value">{weather.main.humidity}%</span>
            </div>
         </div>
      </div>
   )
}

export default WeatherPanel