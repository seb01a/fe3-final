import React from 'react'
import Form from '../Components/Form'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router-dom'
import '../index.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div>
      <main className="" >
        <Navbar/>
   
          <h2>Want to know more?</h2>
          <p>Send us your questions and we will contact you</p>
          <Form/>

        <Footer/>
        <Outlet/>
      </main>
    </div>
  )
}

export default Contact