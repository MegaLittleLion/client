import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

// 회원가입 api
export const signupApi = async (id, nickname, pw, pwCheck) => {
    await serverApi.post(`https://port-0-test-mv-kvmh2mlk2besp7.sel4.cloudtype.app/members/signup/`,{"username":id, "nickname":nickname, "password":pw, "pwcheck":pwCheck}).then((response) => {
        console.log(response);
    })
}