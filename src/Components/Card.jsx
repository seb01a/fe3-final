import React from "react";
import { useEffect, useState} from 'react'
import '../index.css'

// name, username, id
const Card = ({name, username, id}) => {
  const [isFav, setIsFav] = useState(false)
  
  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favs.find((fav) => fav.id === id) ? true : false;
    setIsFav(isFav);
  }, []);



    const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
      const favs = JSON.parse(localStorage.getItem('favorites')) || [];
      let newFavs;
      if(favs.find((fav)=> fav.id === id)){
      newFavs = favs.filter((fav) => fav.id !== id)
      setIsFav(!isFav)
    } else{
      newFavs= [...favs, {name, username, id}]
      setIsFav(!isFav)
    }
      localStorage.setItem("favorites", JSON.stringify(newFavs))
      let fav="Add fav"; let noFav="Remove fav";
  }

  return (
    <div className="card">
        <img className="doctor" src="../images/doctor.jpg" alt="Silueta dentista" />
        <p>{name}</p>
        {/* <Link ></Link> */}
        <p>{username}</p>
        <p>{id}</p>

        {/* En cada card deberan mostrar en name - username y el id */}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className={isFav ?"favButtonS":"favButton"}>
        {isFav ?"Remove from fav":"Add to fav"}
        </button>
    </div>
  );
};

export default Card;
