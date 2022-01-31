import './search.scss'
import searchIcon from '../../resources/search.svg'

import {Component} from 'react'


class Search extends Component {
   render() {
      return (
         <div className="search">
            <form className="search__form">
               <input type="text" className="search__input" placeholder="London"/>
               <button className="search__btn">
                  <img src={searchIcon} alt="search-icon" className="search__icon" />
               </button>
            </form>
         </div>
      )
   }
}

export default Search