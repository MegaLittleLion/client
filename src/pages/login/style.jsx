import styled from "styled-components";

export const BodyDiv = styled.div`
    form{
        p{  
            display: block;
            width:30%;
            margin:0 auto;
            text-align: right;
            font-size: 150%;
        }
        p:nth-child(1){
            margin-bottom: 30px;
        }
        p:nth-child(1) input{
            font-size: 100%;
            text-align: center;
        }
        p:nth-child(2){
            margin-bottom: 30px;
        }
        p:nth-child(2) input{
            font-size: 100%;
            text-align: center;
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