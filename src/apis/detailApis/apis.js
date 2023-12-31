import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

export const detailApi = async (movieid) => {

    let detail = [];
    let staff = [];
    let staff_name = [];
    let staff_role = [];
    let staff_img = [];
    await serverApi.get(`https://port-0-django-movie-kvmh2mlk3c9y6r.sel4.cloudtype.app/movie/${movieid}/`).then((response) => {
        detail = response.data;
        staff = response.data.staff;
        // console.log(detail);
    })
    return [detail, staff, staff_name, staff_role, staff_img];
}

export const commentApi = async (movieid, comment) => {
    // let comment = [];

    await serverApi.post(`https://port-0-django-movie-kvmh2mlk3c9y6r.sel4.cloudtype.app/movie/${movieid}/comments/`, {"comment": comment}).then((response) => {
        // comment = response.data;

        // console.log(staff_img);
    })
    // return comment;
}

// https://port-0-test-mv-kvmh2mlk2besp7.sel4.cloudtype.app/movie/${movieid}