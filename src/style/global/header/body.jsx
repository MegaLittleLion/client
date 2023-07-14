import Header from './style';
<<<<<<< Updated upstream
=======
import { Link } from 'react-router-dom';
>>>>>>> Stashed changes

function Body() {
    return (
        <div>
            <Header>
            <h1>
                Mega little lion

            </h1>
<<<<<<< Updated upstream
=======

            <h2>
                <Link to="/login" id='loginbutton'>
                    로그인
                </Link>
                <Link to="/signup" id = 'signupbutton'>
                    회원가입
                </Link>

            </h2>

>>>>>>> Stashed changes
            </Header>

        </div>
    );
};

export default Body;