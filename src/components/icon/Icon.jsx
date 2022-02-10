import './icon.scss'
import sun from '../../resources/sun.svg'

const Icon = () => {
   return (
      <div className="icon">
         <img src={sun} alt="sun" className="icon__img" />
      </div>
   )
}

export default Icon