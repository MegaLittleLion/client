import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

// 회원가입 api
export const signupApi = async (id, nickname, pw, pwCheck) => {
    await serverApi.post(`https://port-0-test-mv-kvmh2mlk2besp7.sel4.cloudtype.app/members/signup/`,{"username":id, "nickname":nickname, "password1":pw, "password2":pwCheck}).then((response) => {
        console.log(response);
    })
}

// 중복확인 api
export const duplicateApi = async (nickname) => {
    await serverApi.post(`https://port-0-test-mv-kvmh2mlk2besp7.sel4.cloudtype.app/members/uniquecheck/nickname/`,{"nickname":nickname}).then((response) => {
        console.log(response);
    })
}