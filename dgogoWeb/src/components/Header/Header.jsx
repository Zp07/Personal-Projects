import imagenes from '../../Imagenes/Imagenes.js'
import { CarritoButton } from '../CarritoButton/CarritoButton.jsx'


export function Header () {
    return (
      <header className="container-nav">
        <div className='nav'>
          <img src={imagenes.logo} alt="logo" /> 
          <h1>D'gogo Fast food</h1>    
        </div>

        {/*<CarritoButton />*/}

      </header>
    )
}
