import { BodyDiv } from "./style";

function Body() {
    
    return(
        <BodyDiv>  
            <form>
                <p>ID: <input type="text" name="" id="" /></p>
                <p>비밀번호: <input type="password" name="" id="" /></p>
                <button type="submit">로그인</button>
            </form>
        </BodyDiv>
    )
}

export default Body;