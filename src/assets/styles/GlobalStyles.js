import { createGlobalStyle } from "styled-components";
import { headerColor } from "../../constants/colors";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
    }

    input{
        width: 303px;
        height: 45px;
        padding: 10px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 8px;
    }

    h1, h2, p, ::placeholder, button{
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
    }

    ::placeholder{
        font-size: 20px;
        color: #DBDBDB;
    }

    p{  
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }

    h1{
        font-size: 23px;
        color: ${headerColor};
        line-height: 29px;
        margin-bottom: 28px;
    }

    h2{
        margin-bottom: 7px;

        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }
`;

export default GlobalStyles;
