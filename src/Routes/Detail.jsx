import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { useContextGlobalContext } from "../Components/utils/global.context";
import '../index.css'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Detail = () => {
  const [selected, setSelected] = useState("");
  const url='https://jsonplaceholder.typicode.com/users/' 
  const {idItem} = useParams()
  const { theme } = useContextGlobalContext();
// Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  
  useEffect(() => { 
  axios.get(`${url}${idItem}`).then((res) => {
    setSelected(res.data);
  });
}, []);


  return (
    <main className={theme} >
      <Navbar/>    
      <h1>Detail Dentist id</h1>
      <p>{selected?.name}</p>
      <p>{selected?.email}</p>
      <p>{selected?.phone}</p>
      <p>{selected?.website}</p>
      <Footer/>
      </main>
  )
}

export default Detail