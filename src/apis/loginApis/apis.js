import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

export const testApi = async () => {
    let test = [];
    await serverApi.get(`https://api.hufs-likelion-movie.kro.kr/movies`).then((response) => {
        test = response.data.movies;
    })
    return test;
}