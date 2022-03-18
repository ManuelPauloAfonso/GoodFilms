import React, {useState} from "react";
import * as S from './style';
import {FiHome} from 'react-icons/fi'
import {FiHeart} from 'react-icons/fi'
import api from '../../services/api';


interface User{
    Title: string;
    Year: string;
    imdbID: string;
    Type: string;
    Poster: string;
}

export default function Home(){
    const [users, setUsers] = useState<User[]>();
    const [movie, setMovie] = useState<string>("");
    const [showTitle, setShowTitle] = useState(true);

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
        <div>
             <S.header>
                <div className="container-header">
                <input type="text" 
                        value={movie}
                        onChange={(e) => setMovie(e.target.value)}
                        placeholder="digite aqui o seu filme favorito" 
                />
                    <button onClick={searchMovie} disabled={!movie}>Pesquisar</button>
                    <button onClick={clearInput}>Limpar</button>
                </div>
                {showTitle && (
                    <div className="container-header-text">
                        <h1>GOODFILMS</h1>
                        <p>Pesquise pelo Melhores de todos os Filmes na GoodFilms</p> 
                    </div>   

                )}
             </S.header>
             <S.section>
            <div className="container-search-movies">
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
                    <a href=""><FiHome /></a>
                    <a href="/Favoritos"><FiHeart /></a>
                </div>
            </div>

        </S.section>

        </div>
       
        
    )

    
}