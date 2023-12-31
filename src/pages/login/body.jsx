import { BodyDiv } from "./style";
import { loginApi } from "../../apis/loginApis/apis";
import { useNavigate } from "react-router-dom";
function Body() {
    
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const id = e.target[0].value;
        const pw = e.target[1].value;
        loginApi(navigate, id, pw);
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