import React from "react";
import {Link} from 'react-router-dom'
import * as S from './style';

export default function Home(){
    
    return(
        <S.header>
            <div className="container-header">
                <input type="text" name="" id="" placeholder="digite aqui o seu filme favorito" />
                <button><Link to="/Search">Pesquisar</Link></button>
            </div>
            <div className="container-header-text">
                <h1>GOODFILMS</h1>
                <p>Pesquise pelo Melhores de todos os Filmes na GoodFilms</p> 
            </div>
        </S.header>
    )

    
}