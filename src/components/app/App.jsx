import './app.scss'

import {Component} from 'react'
import Search from '../search/Search'

class App extends Component {
   render() {
      return (
         <div className="app">
            <div className="container">
               <Search/>
            </div>
         </div>
      )
   }
}

export default App
