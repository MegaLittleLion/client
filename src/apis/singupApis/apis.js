import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

// 회원가입 api
export const signupApi = async() =>{
    await serverApi.post(`https://api.hufs-likelion-movie.kro.kr/movies`).then((response) => {
        console.log(response);
    })
}