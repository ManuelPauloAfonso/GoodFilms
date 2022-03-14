import styled from "styled-components";

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
    position: relative;
    height: 240px;
}
.item-movie a:hover{
    opacity: 0.3;
    background-color: black;
}
.item-movie-main{
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(136px, 1fr));
    margin-top: 100px;
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



`