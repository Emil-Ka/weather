class WeatherService {
   _apiKey = 'db7a1757a03c431aea604f5b7ddbc58f'

   getResource = async (url) => {
      const result = await fetch(url)

      return await result.json()
   }
   
   getWeatherByCity = async (city) => {
      return await this.getResource(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this._apiKey}&lang=ru`)
   }
}

export default WeatherService