import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});


export const getMovies = async () => {
    await serverApi.get(`https://api.hufs-likelion-movie.kro.kr/movies`).then((response) => {
        const test = response.data.movies;
        console.log(response);
    })
};