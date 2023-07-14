import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});


export const getMovies = async () => {
    let movies = [];
    await serverApi.get(`https://api.hufs-likelion-movie.kro.kr/movies`).then((response) => {
        movies = response.data.movies;
    })
    return movies;
};