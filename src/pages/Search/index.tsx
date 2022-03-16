import React, { useState, useEffect } from 'react'
import * as S from './style'
import {FiHome} from 'react-icons/fi'
import {FiStar} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import api from '../../services/api';

import Movie from '../../assets/manuel.jpg'
import Movie1 from '../../assets/Manuel2.jpg'
import Movie2 from '../../assets/Manuel5.jpg'
import Movie3 from '../../assets/manuel23.jpg'
import Movie4 from '../../assets/manueldd.jpg'

interface User{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export default function Search(){
    const [users, setUsers] = useState<User[]>();
    const [movie, setMovie] = useState<string>("");

    const searchMovie = async () => {
        const response = await api.get(
          `https://www.omdbapi.com/?s=${movie}&type=movie&page=1&apikey=c058e812`
        );
        setUsers(response.data?.Search ?? []);
      };
    
      const clearInput = () => {
        setMovie("");
      };
    

    return(
        <S.section>
            <div className="container-search-movies">
                <div className="container-header">
                    <input type="text" 
                        value={movie}
                        onChange={(e) => setMovie(e.target.value)}
                        placeholder="digite aqui o seu filme favorito" 
                    />
                    <button onClick={searchMovie} disabled={!movie}>Pesquisar</button>
                    <button onClick={clearInput}>Limpar</button>

                </div>
                {users?.map((movie, index) => ( 
                        <ul key={index} className="item-movie-main">
                            <li className="item-movie"><a href=""><img src={movie?.Poster ?? ""} alt="" /></a></li>
                        </ul>
                ))}
                
                <div className="favorite">
                    <Link to=""><FiHome /></Link>
                    <Link to="/Favoritos"><FiStar /></Link>
                </div>
            </div>

        </S.section>
    )
    
}