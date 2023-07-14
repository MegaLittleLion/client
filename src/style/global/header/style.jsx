import styled from 'styled-components';

const Header = styled.h1`
    

    background-color: #FFD732;

    h1{
        margin: 0px;
        padding: 0px;

    };

    #homebutton{
        color: #666565;
        font-size: 30px;

        text-decoration: none;
        margin-left: 15px;

    };

    h2{
        margin: 0px;

        display: flex;
        flex-direction: column;
        align-items: flex-end;

        margin-right: 15px;

        font-size: 20px;
    }
    #signupbutton, #loginbutton{
        text-decoration: none;
        color: #666565;
        font-size: 120%;
        margin-bottom: 10px;
    }

`

export default Header;
