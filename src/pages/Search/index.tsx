import React from 'react'
import * as S from './style'
import {FiHome} from 'react-icons/fi'
import {FiStar} from 'react-icons/fi'
import {Link} from 'react-router-dom'

import Movie from '../../assets/manuel.jpg'
import Movie1 from '../../assets/Manuel2.jpg'
import Movie2 from '../../assets/Manuel5.jpg'
import Movie3 from '../../assets/manuel23.jpg'
import Movie4 from '../../assets/manueldd.jpg'

export default function Search(){

    return(
        <S.section>
            <div className='container-search-movies'>
                <div className="container-header">
                    <input type="text" name="" id="" placeholder="digite aqui o seu filme favorito" />
                    <button>Pesquisar</button>
                </div>
                <ul className='item-movie-main'>
                    <li className='item-movie'><a href=""><img src={Movie} alt="" /></a></li>
                    <li className='item-movie'><a href=""><img src={Movie1} alt="" /></a></li>
                    <li className='item-movie'><a href=""><img src={Movie2} alt="" /></a></li>
                    <li className='item-movie'><a href=""><img src={Movie3} alt="" /></a></li>
                    <li className='item-movie'><a href=""><img src={Movie4} alt="" /></a></li>




                </ul>
                <div className='favorite'>
                    <Link to=""><FiHome /></Link>
                    <Link to="/Favoritos"><FiStar /></Link>
                </div>
            </div>

        </S.section>
    )
    
}