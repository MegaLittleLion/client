import Header from './style';
import {Link} from 'react-router-dom';

function Body() {
    return (
        <div>
            <Header>
            <h1>
                {/* 홈 로딩 버튼 만들기 */}

                <a id= 'homebutton' href="/">Mega little lion </a>

            </h1>

            <h2>
                <Link to="/login" id='loginbutton'>
                    로그인
                </Link>
                <Link to="/signup" id='signupbutton'>
                    회원가입
                </Link>

            </h2>

            </Header>
            

        </div>
    );
};

export default Body;