import styled from 'styled-components';

export const Whole = styled.div`
    font-family: 'malgun gothic';
    margin-top: 50px;
    margin-left: 30px;
    margin-right: 30px;
`

export const Comment = styled.div`
    font-family: 'malgun gothic';
    margin-top: 50px;
    margin-bottom: 50px;
    input {
        width: 1000px;
        height: 50px; 
    }
    #inputed{
        box-sizing: border-box;
        padding-left: 2%;
    }
    button {
        width : 180px;
        height: 55px;
        margin-left: 20px
    }
    h2 {
        margin-bottom: 40px;
    }
    .v-line {
        border-left : thick solid #ffd732;
        height : 35px;
    }
    p {
        margin-bottom: 20px;
    }
    .Oncomment{
        display: flex;
    }
    #username{
        margin-left: 10px;
        margin-right: 40px;
        font-weight: bold;
    }
    #commentTitle {
        margin-left: 10px;
    }
`

export const Title = styled.div`
    .v-line {
    border-left : thick solid #ffd732;
    height : 100px;
    }
    .div {
        margin-left:30px;
    }



`


export const Infos = styled.div`
    display:flex;
    margin-top: 50px;
    div{
        margin-left:30px;
        margin-top: 10px;
        font-weight: normal;
        height: 420px;
   };
    img{
        height:420px;
        width:auto;
    };
    h2{
        margin-top: 40px;
    };
    p{
        font-size:17px;
        margin-top:10px;
    };
    .v-line {
    border-left : thick solid #ffd732;
    height : 400px;
    };
`

export const Staff = styled.div`
   margin-top: 50px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    .v-line {
    border-left : thick solid #ffd732;
    height : 35px;
    };

`