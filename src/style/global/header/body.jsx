import Header from './style';
import { Link, useNavigate } from 'react-router-dom';

function Body() {
    const navigate = useNavigate();

    const handleOnClick = (e) => {
        
        const order = document.getElementById('loginbutton').innerText;
        if (order === '로그인'){
            navigate(`/login`);
        }
        else{
            const check = window.confirm('로그아웃 하시겠습니까?');
            if (check) {
                sessionStorage.removeItem('jwt');
                sessionStorage.removeItem('nickname');
                navigate(`/`);
            }
        }

    }

    return (
        <div>
            <Header>
            <h1>
                {/* 홈 로딩 버튼 만들기 */}

                <a id= 'homebutton' href="/">Mega little lion </a>

            </h1>

            <h2>
                <p id='loginbutton' onClick={handleOnClick}>
                    로그인
                </p>
                <Link to="/signup" id='signupbutton'>
                    회원가입
                </Link>

            </h2>

            </Header>
            

        </div>
    );
};

export default Body;