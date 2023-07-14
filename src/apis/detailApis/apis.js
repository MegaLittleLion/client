import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

export const detailApi = async () => {
    let detail = [];
    await serverApi.get(`https://api.hufs-likelion-movie.kro.kr/movies/1`).then((response) => {
        detail = response.data

    })
}