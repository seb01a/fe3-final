import axios from "axios"
import React, {useEffect} from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { Outlet} from 'react-router-dom'
import '../index.css'
import { useContextGlobalContext } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme, dentists, setDentists} = useContextGlobalContext();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      setDentists(res.data);
    });
  }, []);

  // console.log(dentists);

  return (
    <main className={theme} >
      <Navbar/>    
        <h1>Home</h1>
        <div className='card-grid'>
          {dentists.map( dentist => (
            <Card 
              key={dentist.id}
              name={dentist.name} 
              username={dentist.username}
              id={dentist.id}
            />
            ))}
        </div>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default Home