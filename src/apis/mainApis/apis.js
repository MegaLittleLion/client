import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});


export const getMovies = async () => {
    let movies = [];
    await serverApi.get(`https://port-0-django-movie-kvmh2mlk3c9y6r.sel4.cloudtype.app/movie/`).then((response) => {
        movies = response.data;
    })
    return movies;
};