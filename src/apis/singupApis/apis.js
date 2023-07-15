import axios from 'axios';

const serverApi = axios.create({
    headers:{
        "Content-Type": "application/json",
    }
});

// 회원가입 api
export const signupApi = async (navigate, id, nickname, pw, pwCheck) => {
    await serverApi.post(`https://port-0-test-mv-kvmh2mlk2besp7.sel4.cloudtype.app/members/signup/`,{"username":id, "nickname":nickname, "password1":pw, "password2":pwCheck}).then((response) => {
        if(response.status === 201){
            alert('회원가입이 완료되었습니다.');
            navigate(`/login`);
        }
    })
}

// 중복확인 api
export const duplicateApi = async (nickname) => {
    await serverApi.post(`https://port-0-test-mv-kvmh2mlk2besp7.sel4.cloudtype.app/members/uniquecheck/nickname/`,{"nickname":nickname}).then((response) => {
        const check = response.data.detail;
        if (check === 'available nickname'){
            alert('사용가능한 닉네임입니다.');
        }
        else{
            alert('이미 사용중인 닉네임입니다.');
        }
    })
}