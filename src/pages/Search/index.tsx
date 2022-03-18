import React, { useState, useEffect } from 'react'
import * as S from './style'
import {FiHome} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import api from '../../services/api';

type Userprops = {
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;

}


interface User{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export default function Search(props: Userprops){
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
                <ul className="item-movie-main">
                    {users?.map((movie, index) => ( 
                                <li key={index} className="item-movie">
                                    <a href=""><img src={movie?.Poster ?? ""} alt="" />
                                    <div className="item-movie-title">
                                        <strong>{movie?.Title ?? ""}</strong> <br />
                                        <span>{movie?.Year ?? ""}</span>
                                    </div>
                                    </a>
                                </li>
                    ))}
                </ul>                
                <div className="favorite">
                    <Link to=""><FiHome /></Link>
                    <Link to="/Favoritos"><FiHeart /></Link>
                </div>
            </div>

        </S.section>
    )
    
}