import React from 'react'
import { useContextGlobalContext } from "./utils/global.context";
import { Link, useNavigate } from 'react-router-dom'
import '../index.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
    const navigate = useNavigate()
    const { theme, setTheme } = useContextGlobalContext();

    const handleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
    }

  return (
    <nav className={theme}>

        <Link to='/'>Home</Link>
        <Link to= '/dentist'>Dentist</Link>
        <Link to='/contact'>Contact</Link>
        <Link to= '/favs'>Favs</Link>
        <a onClick={() => navigate(-1)}>Back</a>

      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar