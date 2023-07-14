import { BodyDiv } from "./style";
import { loginApi } from "../../apis/loginApis/apis";
function Body() {
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        await loginApi();
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