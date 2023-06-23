import React, {useState, useEffect} from 'react'
import "./ListCard.css";
import { Card } from '../Card/Card';
import axios from "axios";
import { usePokemons } from '../hooks/usePokemons';

export type pokemon = {
  name: string
  url: string
}

export const ListCard = () => {
  const [limit] = useState(12);
  const [offset, setOffset] = useState(0);
  const [Pokemons, setPokemons] = useState<pokemon[]>([])
  //const Pokemons = usePokemons(limit, offset)

  const getPokemons = async () => {
    await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then((response) => {
          const {results} =response.data 
          //console.log(results);
          setPokemons(results);
        }); 
  }

  const getNextPage = async () => {
    setOffset(offset-12);
    await getPokemons();
  }
  
  const getPrevPage = async () => {
    setOffset(offset+12)
    await getPokemons();
  }

  useEffect(() => {
    getPokemons();
  }, [offset]);
  
  return (
    <div className='container'>
      {Pokemons.map(item => <Card name = {item.name} url={item.url}/>)}
      {offset > 0 ? <button onClick={getNextPage} className='btn btn-primary'>back</button> :<></>}
      {offset < 1281 ? <button onClick={getPrevPage} className='btn btn-primary'>next</button> : <></>}
    </div>
  )
}
