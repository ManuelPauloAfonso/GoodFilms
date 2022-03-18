import styled from "styled-components";


export const header = styled.header`

.container-header{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}
.container-header input{
    padding: 10px 150px;
    border-radius: 5px;
    border: none;
}
.container-header button{
    padding: 10px 50px;
    border-radius: 5px;
    border: none;
    margin-left: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
}
.container-header button a{
    text-decoration: none;
    color: white;
}
.container-header button:hover{
    background-color: #2E2E2E;
}
.container-header-text{
    text-align: center;
    margin-top: 50px;
    line-height: 60px;
}
.container-header-text h1{
    letter-spacing: 45px;
}




`
export const section = styled.section`

.container-header{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}
.container-header input{
    padding: 10px 150px;
    border-radius: 5px;
    border: none;
}
.container-header button{
    padding: 10px 50px;
    border-radius: 5px;
    border: none;
    margin-left: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
}
.container-header button a{
    text-decoration: none;
    color: white;
}
.container-header button:hover{
    background-color: #2E2E2E;
}
.item-movie li, a, img{
    height: 100%;
    border-radius: 8px;
}
.item-movie ul, li{
    list-style: none;

}
.item-movie{
    height: 250px;
    position: relative;
   
}
.item-movie img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.item-movie a:hover{
    opacity: 0.3;
    background-color: black;
}
.item-movie-main {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    margin: 0 auto;
    grid-gap: 10px;
    width: 100%;
    max-width: 1080px;
    margin-top: 50px;
    
}

.favorite{
    position: fixed;
    bottom: 0px;
    left: 50%;
    display: flex;
    justify-content: center;
    transform: translateX(-50%);
    background: black;
    padding: 8px 35px;
    cursor: pointer;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
.favorite a{
    text-decoration: none;
    color: white;
    width: 100%;
    height: 100%;
    padding: 0px 10px;
}
a{
    text-decoration: none;
}
.item-movie-title{
    position: absolute;
    bottom: 0px;
    left: 0px;
    max-width: 100% 
}
.item-movie-title strong{
    font-size: 0.800rem;
    text-decoration: none;
    list-style: none;
    color: white;
    font-weight: bold;
}
.item-movie-title span{
    text-decoration: none;
    color: white;
    font-weight: bold;
}



`