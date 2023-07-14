import { BodyDiv } from "./style";
import { login } from "../../apis/loginApis/apis";
function Body() {
    
    const handleSubmit = (e) => {
        e.preventDefault();
        login();
    }

    return(
        <BodyDiv>  
            <form onSubmit={handleSubmit}>
                <p>ID: <input type="text" name="" id="" /></p>
                <p>비밀번호: <input type="password" name="" id="" /></p>
                <button type="submit">로그인</button>
            </form>
        </BodyDiv>
    )
}

export default Body;