import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

export const detailApi = async () => {

    let detail = [];
    let staff = [];
    let staff_name = [];
    let staff_role = [];
    let staff_img = [];
    await serverApi.get(`https://api.hufs-likelion-movie.kro.kr/movies/1`).then((response) => {
        detail = response.data;
        staff = response.data.staff;
        console.log(staff);
    })
    return [detail, staff];
}