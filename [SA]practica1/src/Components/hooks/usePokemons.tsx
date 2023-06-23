import {useState, useEffect} from 'react'
import axios from "axios";

export type pokemon = {
    name: string
    url: string
}

export const usePokemons = (Limit:number, Offset:number) => {

    const [pokemons, setPokemons] = useState<pokemon[]>([])
    const [newPokemons, setNewPokemons] = useState<pokemon[]>([])

    const getPokemons = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${Limit}&offset=${Offset}`)
        .then((response) => {
            const {results} =response.data 
            //console.log(results);
            setPokemons(results);
        }); 
    }
    
    useEffect(() => {
        getPokemons()
    }, [pokemons])

    const getImg = async (pokemonUrl: string) => {
        await axios.get(pokemonUrl)
        .then((response) => {
            const {sprites} = response.data
            console.log(sprites.other.dream_world.front_default);
            return sprites.other.dream_world.front_default;
        }); 
    }

    const newsPoke = Promise.all(pokemons.map(pokemon => getImg(pokemon.url))) 

    console.log(newsPoke);
    return newPokemons
}
