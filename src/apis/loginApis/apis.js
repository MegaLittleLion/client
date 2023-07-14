import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

// 로그인 api
export const loginApi = async () => {
    await serverApi.get(`https://api.hufs-likelion-movie.kro.kr/movies`).then((response) => {
        console.log(response);
    })
}