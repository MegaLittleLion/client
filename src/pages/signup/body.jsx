import { BodyDiv } from "./style";
import { signupApi } from "../../apis/singupApis/apis";
function Body() {
    const handleDuplicated = () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = e.target[0].value;
        const nickname = e.target[1].value;
        const pw = e.target[2].value;
        const pwCheck = e.target[3].value;
        signupApi(id, nickname, pw, pwCheck);
    }

    return (
        <BodyDiv>
            <form onSubmit={handleSubmit}>
                <p>ID: <input type="text" name="" id="" /></p>
                <p>닉네임: <input type="text" name="" id="" /><span onClick={handleDuplicated}>중복확인</span></p>
                <p>비밀번호 : <input type="password" name="" id="" /></p>
                <p>비밀번호 확인 : <input type="password" name="" id="" /></p>
                <button type="submit">회원등록</button>
            </form>
        </BodyDiv>
    )
}

export default Body;