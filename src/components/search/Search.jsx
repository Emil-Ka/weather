import './search.scss'
import searchIcon from '../../resources/search.svg'

import {useState} from 'react'


const Search = ({updateCity}) => {
   const [city, setCity] = useState(null)

   const onUpdateCity = (e) => {
      setCity(e.target.value)
   }

   const onSubmit = (e) => {
      e.preventDefault()
      updateCity(city)
   }

   return (
      <div className="search">
         <form onSubmit={(e) => onSubmit(e)} className="search__form">
            <input onChange={(e) => onUpdateCity(e)} type="text" className="search__input" placeholder="London"/>
            <button type="submit" className="search__btn">
               <img src={searchIcon} alt="search-icon" className="search__icon" />
            </button>
         </form>
      </div>
   )
}

export default Search