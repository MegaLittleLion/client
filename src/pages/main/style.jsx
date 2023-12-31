/* 내 body 전용 스타일 */
import styled from 'styled-components';


export const Title = styled.h1`

    #mainpage_total_box{

        margin: 50px;
        margin-top: 5px;
        background-color: #FFF8DC;

    }
    #mainpage_movie_box{
        margin-top: 0px;
        margin-bottom: 5px;

    }
    #mainpage_movie_article{
        margin: 0px;
        padding-top: 50px;
        margin-bottom: 0px;
        font-size: 35px;
        color: #343101;

        display: flex;
        justify-content: center;

    }

    #mainpage_second_box{
        margin-top: 5px;

    }
    #mainpage_popular_movie_box{

    }

    #mainpage_search{
        width: 50%;
        text-align: center;
        margin: 0 auto;

        border-radius: 10px;

        box-sizing: border-box;
        
    }

    #mainpage_search_title{
        font-size: 20px;
        border-radius: 5px;
        ;
    }
    #mainpage_search_button{
        margin-left: 10px;

        font-size: 20px;
        background-color: #979700;
        color: white;

        border: none;
        border-radius: 10px;
    }
    #mainpage_api{
        margin-top: 30px;
        
    }

    #mainpage_api div{
        display: flex;
        justify-content: space-around;
        width: 100%;
        div{
            transition: all 0.3s;
            display: block;
            border-radius: 15px;
            width: 23%;
            text-align: center;
            cursor: pointer;
                h1{ 
                    overflow: hidden;
                    text-overflow: ellipsis;
                    font-size: 16px;
                    font-weight: bold;
                    text-align: center;
                    width:100%;
                    color: #595959
                }
            
        }
        div:hover{
            background-color: #FFD732;
        }
    }
`