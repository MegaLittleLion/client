import { Footer } from "./style";
import { Title } from "./style";
import { Text } from "./style";

function Body() {
    return (
        <Footer style={{display:'flex'}}>
            <h2>
                Mega little lion
            </h2>
            <p>이용약관 | 개인정보처리방침 | 고객센터</p>            
        </Footer>
    );
};

export default Body;