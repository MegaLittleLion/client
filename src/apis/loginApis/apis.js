import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

export const login = async () => {
    await serverApi.get(`https://api.hufs-likelion-movie.kro.kr/movies`).then((response) => {
        console.log(response);
    })
}