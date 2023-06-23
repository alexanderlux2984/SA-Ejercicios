import React, {useState, useEffect} from 'react'
import "./Card.css";
import { pokemon } from '../ListCard/ListCard';
import axios from "axios";

export const Card = (props:pokemon) => {

const [img, setImg] = useState('')

  const getImg = async () => {
    await axios.get(props.url)
        .then((response) => {
          const {sprites} = response.data
          console.log(sprites.other.dream_world.front_default);
          setImg(sprites.other.dream_world.front_default);
        }); 
  }

  useEffect(() => {
    getImg();
  }, [img])
  

  return (
    <div className='card'>
      <div className='contenido'>
        <img src={img} alt={props.name} />
        <h5> {props.name}</h5>
      </div>
    </div>
  )
}
