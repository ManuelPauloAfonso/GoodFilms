import React from "react";
import * as S from './style'
import {Link} from 'react-router-dom'
import {FiHome} from 'react-icons/fi'
import {FiStar} from 'react-icons/fi'

export default function Favoritos(){

    return(
        <S.section>
            <div className="container-favoritos">
                <h1>Seus Filmes Favoritos</h1> 
            </div>
            <div className="container-article">
            <article className="main-article">
                    <a href="">Spider Man 2</a>
                    <button>remover</button>     
                </article>
                <article className="main-article">
                    <a href="">Spider Man 2</a>
                    <button>remover</button>     
            </article>     
            </div>
            <div className='favorite'>
                        <Link to=""><FiHome /></Link>
                        <Link to="/Favoritos"><FiStar /></Link>
            </div>
    </S.section>

    )

    
}