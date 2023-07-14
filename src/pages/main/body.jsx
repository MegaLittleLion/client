import { Title } from './style'
import { getMovies } from '../../apis/mainApis/apis';
import { useEffect, useState } from 'react';

function Body() {
    const [movies, setMovies] = useState([]);
    
    const takeMovies = async () => {
        const data = await getMovies();
        setMovies(data);
    };

    useEffect(() => {
        takeMovies();
    }, []);

    // api를 통해 영화 리스트를 가져온 이후
    if (movies.length !== 0){
        console.log(movies);
    }

    return (

        <Title>

            <div id='mainpage_total_box'>
                <h1 id='mainpage_movie_box'>
                    <p id='mainpage_movie_article'>🎥 오늘의 영화 🎥</p>

                    <form>
                        <p id='search_movie' >
                            <input type="text" name="" id="seach_movie_text"/>
                        </p>
                    </form>
                    



                    <div id= 'mainpage_api'>

                        

                    </div>


                </h1>


            </div>


        </Title>



    );

}

export default Body;
