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

        console.log(orderedMovies);
    }

    if (movies.length !== 0){
        makeMovies(movies);
    }

    return (

        <Title>

            <div id='mainpage_total_box'>
                <h1 id='mainpage_recent_movie_box'>
                    <p id='mainpage_recent_movie_article'>🎥 오늘의 영화 🎥</p>

                    <div id= 'mainpage_api'>

                    </div>
                </h1>


            </div>


        </Title>



    );

}

export default Body;
