import { Title } from './style'
import { getMovies } from '../../apis/mainApis/apis';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Body() {
    const [movies, setMovies] = useState([]);
    
    const takeMovies = async () => {
        const newMovies = await getMovies();
        setMovies(newMovies);
    };
    const [loginBtn, setLoginBtn] = useState('');
    const takeLoginBtn = () => {
        setLoginBtn(document.getElementById('loginbutton'));
    }

    useEffect(() => {
        takeMovies();
        takeLoginBtn();
    }, []);
    
    if (loginBtn) {
        const nickname = sessionStorage.getItem('nickname');
        if(nickname !== null) {
            loginBtn.innerText = `${nickname}님 안녕하세요`;
        }
        else{
            loginBtn.innerText = '로그인';
        }
    }

    const makeMovies = (movies) => {
        const mainpage_api = document.getElementById('mainpage_api');
        const orderedMovies = [];

        for (let i=0; i<movies.length-4; i+=4){
            let currMovies = [];
            
            for (let j=i; j<i+4; j++){
                const movieTitle = movies[j].title_kor;
                const movieImg = movies[j].poster_url; 
                const movieId = movies[j].id;  
                currMovies.push([movieTitle, movieImg, movieId]);
            }

            orderedMovies.push(currMovies);
        }
        // 초기화
        mainpage_api.innerHTML = '';
        for (let i=0; i<orderedMovies.length; i++){
            
            const title1 = orderedMovies[i][0][0];
            const img1 = orderedMovies[i][0][1];
            const id1 = orderedMovies[i][0][2];
            const title2 = orderedMovies[i][1][0];
            const img2 = orderedMovies[i][1][1];
            const id2 = orderedMovies[i][1][2];
            const title3 = orderedMovies[i][2][0];
            const img3 = orderedMovies[i][2][1];
            const id3 = orderedMovies[i][2][2];
            const title4 = orderedMovies[i][3][0];
            const img4 = orderedMovies[i][3][1];
            const id4 = orderedMovies[i][3][2];

            const content = `
            <div>
                <div id=${id1}>
                    <h1>${title1}</h1>
                    <img src=${img1}></img>
                </div>
                <div id=${id2}>
                    <h1>${title2}</h1>
                    <img src=${img2}></img>
                </div>
                <div id=${id3}>
                    <h1>${title3}</h1>
                    <img src=${img3}></img>
                </div>
                <div id=${id4}>
                    <h1>${title4}</h1>
                    <img src=${img4}></img>
                </div>
            </div>`;

            const existing = mainpage_api.innerHTML;
            mainpage_api.innerHTML = existing + content;
        }
    }
    if (movies.length !== 0){
        makeMovies(movies);
    }
    const navigate = useNavigate();

    const handleOnClick = (e) => {
        const movieId = e.target.parentElement.id;
        navigate(`/detail/${movieId}`);
    }
    return (

        <Title>

            <div id='mainpage_total_box'>
                <h1 id='mainpage_movie_box'>
                    <p id='mainpage_movie_article'>🎥 오늘의 영화 🎥</p>
                    
                    <form id='mainpage_search' >
                        <input id='mainpage_search_title' type='text' placeholder='영화를 검색하세요.'></input>
                        <button id='mainpage_search_button' type='submit'>검색</button>
                    </form>

                    <div id='mainpage_api' onClick={handleOnClick}>
                        
                    </div>
                </h1>
            </div>


        </Title>



    );

}

export default Body;
