import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

// 로그인 api
export const loginApi = async (id, pw) => {
    await serverApi.post(`https://port-0-test-mv-kvmh2mlk2besp7.sel4.cloudtype.app/members/login/`,{"username":id, "password":pw}).then((response) => {
        console.log(response);
    })
}