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

export const searchMovies = async(title_kor) => {
    let movies = [];
    await serverApi.get(`https://port-0-django-movie-kvmh2mlk3c9y6r.sel4.cloudtype.app/movie/list/search/?title_kor=${title_kor}`).then((response) => {
        movies = response.data;
    })
    return movies;
};