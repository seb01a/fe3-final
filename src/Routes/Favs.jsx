import axios from "axios";
import React, {useEffect} from 'react'
import {useState} from 'react'
import Card from "../Components/Card";
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar';
import Footer from "../Components/Footer";
import { useContextGlobalContext } from "../Components/utils/global.context";


const Favs = () => {
  const {theme} = useContextGlobalContext();

  

   const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    
  // si recupero los datos de local storage, los renderizo y luego
  // cambio el contenido de lo guardado desde Favs, solo puedo
  // visualizar los cambios una vez que actualizo la pagina. 
  // Otra posibilidad seria que se actualizaran cada vez que hay cambio
  // pero eso dificultaria el uso del local storage.

  

  return (
    <main className={theme} >
      <Navbar/>    
        <h1>Dentist Fav</h1>
        <div className='card-grid'>
          {favs.map( fav => (
            <Card 
              key={fav.id}
              name={fav.name} 
              username={fav.username}
              id={fav.id}
            />
            ))}
        </div>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Favs