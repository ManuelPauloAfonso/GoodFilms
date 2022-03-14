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