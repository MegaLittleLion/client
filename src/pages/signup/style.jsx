import styled from "styled-components";

export const BodyDiv = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
    form{
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        p{
            display: block;
            width: 50%;
            margin: 0 auto;
            text-align: right;
            font-size: 150%;
        }
        p input{
            font-size: 100%;
            text-align: center;
        }
        p:nth-child(1){

        }
        p:nth-child(1) input{
            margin-bottom: 30px;
        }
        p:nth-child(2){
            margin-bottom: 30px;
        }
        p:nth-child(2) input{
            width:25%;
            margin-right: 1%;
        }
        p:nth-child(2) span{
            border: 3px solid #FFD732;
            font-size: 90%;
            color:#000;
            font-weight: 400;
            cursor: pointer;
            box-sizing: border-box;
        }
        p:nth-child(3){
            margin-bottom: 30px;
        }
        p:nth-child(3) input{

        }
        p:nth-child(4){
            margin-bottom: 30px;
        }
        p:nth-child(4) input{

        }
        button{
            display: block;
            width: 15%;
            margin: 0 auto;
            background-color: #FFD732;
            border: none;
            padding: 0;
            color: #fff;
            font-size: 150%;
            border-radius: 20px;
            line-height: 2;
            transition: all 0.3s;
            cursor: pointer;
            box-sizing: border-box;
        }
        button:hover{
            background-color: #fff;
            color: #FFD732;
            border: 1px solid #FFD732;
        }
    }
`