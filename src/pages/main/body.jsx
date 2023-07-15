import { Title } from './style'
import { getMovies } from '../../apis/mainApis/apis';
import { useEffect, useState } from 'react';

function Body() {
    const [movies, setMovies] = useState([]);
    
    const takeMovies = async () => {
        const newMovies = await getMovies();
        setMovies(newMovies);
    };

    useEffect(() => {
        takeMovies();
    }, []);

    const makeMovies = (movies) => {
        const mainpage_api = document.getElementById('mainpage_api');
        const orderedMovies = [];

        for (let i=0; i<movies.length-4; i+=4){
            let currMovies = [];
            
            for (let j=i; j<i+4; j++){
                const movieTitle = movies[j].title_kor;
                const movieImg = movies[j].poster_url;
                currMovies.push([movieTitle, movieImg]);
            }

            orderedMovies.push(currMovies);
        }

        for (let i=0; i<orderedMovies.length; i++){
            
            const title1 = orderedMovies[i][0][0];
            const img1 = orderedMovies[i][0][1];
            const title2 = orderedMovies[i][1][0];
            const img2 = orderedMovies[i][1][1];
            const title3 = orderedMovies[i][2][0];
            const img3 = orderedMovies[i][2][1];
            const title4 = orderedMovies[i][3][0];
            const img4 = orderedMovies[i][3][1];

            const content = `
            <div>
                <div>
                    <h1>${title1}</h1>
                    <img src=${img1}></img>
                </div>
                <div>
                    <h1>${title2}</h1>
                    <img src=${img2}></img>
                </div>
                <div>
                    <h1>${title3}</h1>
                    <img src=${img3}></img>
                </div>
                <div>
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

    return (

        <Title>

            <div id='mainpage_total_box'>
                <h1 id='mainpage_movie_box'>
                    <p id='mainpage_movie_article'>🎥 오늘의 영화 🎥</p>

                    <div id= 'mainpage_api'>
                        
                    </div>
                </h1>
            </div>


        </Title>



    );

}

export default Body;
