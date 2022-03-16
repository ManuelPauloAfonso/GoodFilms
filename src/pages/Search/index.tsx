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
    poster: string;
}

export default function Search(){
    const [users, setUsers] = useState<[User]>();

    async function loadData() {
        const response = await api.get('https://www.omdbapi.com/?s=galaxy&type=movie&page=1&apikey=c058e812');
        setUsers(response.data?.Search ?? []);
        console.log(response.data?.Search ?? [])
    }
    useEffect(()=>loadData() ,[])

    return(
        <S.section>
            <div className='container-search-movies'>
                <div className="container-header">
                    <input type="text" name="" id="" placeholder="digite aqui o seu filme favorito" />
                    <button>Pesquisar</button>
                </div>
                {
                    users?.map((movie, index) => ( 
                        <ul key={index} className='item-movie-main'>
                            <li className='item-movie'><a href=""><img src={movie?.poster?? ""} alt="" /></a></li>
                        </ul>
                    ))
                    
                }
                
                <div className='favorite'>
                    <Link to=""><FiHome /></Link>
                    <Link to="/Favoritos"><FiStar /></Link>
                </div>
            </div>

        </S.section>
    )
    
}