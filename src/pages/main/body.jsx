import { Title } from './style'
import { getMovies } from '../../apis/mainApis/apis';

function Body() {
    getMovies();


    return (

        <Title>

            <div id='mainpage_total_box'>
                <h1 id='mainpage_recent_movie_box'>
                    <p id='mainpage_recent_movie_article'>오늘의 영화</p>

                    <div id= 'mainpage_api'>
                        

                    </div>


                </h1>


            </div>


        </Title>



    );

}

export default Body;
