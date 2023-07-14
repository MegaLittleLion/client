import { BodyDiv } from "./style";

function Body() {
    return (
        <BodyDiv>
            <form>
                <p>ID: <input type="text" name="" id="" /></p>
                <p>닉네임: <input type="text" name="" id="" /><span>중복확인</span></p>
                <p>비밀번호 : <input type="password" name="" id="" /></p>
                <p>비밀번호 확인 : <input type="password" name="" id="" /></p>
                <button type="submit">회원등록</button>
            </form>
        </BodyDiv>
    )
}

export default Body;