import styled from "styled-components";


export const section = styled.section`

    
    .container-article{
        margin-top: 10px;
        padding: 1rem 100px;
    }
    .container-favoritos{
        text-align: center;
        margin-top: 100px;
    }
    .container-article article{
        margin-top: 20px;
    }
    article{
        display: flex;
        justify-content: space-between;
        background-color: black;
        padding: 10px 10px;
        border-radius: 5px;
        
        
    }
    article:hover{
        opacity: 0.7;
        cursor: pointer;
    }
    article button{
        background-color: black;
        color: white;
        border: none;
        cursor: pointer;
    }
    a{
        text-decoration: none;
        color: white;
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