import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap');


    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'DM Sans', sans-serif;

    }
    body{
        font-size: 18px;
        background-color: #4158D0;
        background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 100%, #FFCC70 100%);
        color: white;

    }


`

export default GlobalStyle;