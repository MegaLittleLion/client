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
    #mainpage_api{
        
    }

    #mainpage_api div{
        display: flex;
        justify-content: space-around;
        div{
            transition: all 0.3s;
            display: block;
            border-radius: 15px;
            width: 200px;
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