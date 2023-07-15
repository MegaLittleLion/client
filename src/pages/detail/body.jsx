import { Title } from "./style";
import { detailApi, commentApi } from "../../apis/detailApis/apis";
import { useState, useEffect } from "react";
import { Staff } from "./style";
import { Infos } from "./style";
import { Whole } from "./style";
import { Comment } from "./style";
import { useParams } from "react-router-dom";

function People({ people }) {
    return (
        <div style={{ marginRight: '15px' }}>
            <img src={people.image_url} style={{ marginTop: '10px' }}></img>

            <p style={{ fontWeight: 'bold', textAlign: 'center' }}>{people.name}</p>
            <p style={{ textAlign: 'center' }}>{people.role}</p>
        </div>
    );
}

function Body() {
    const [data, setData] = useState('');
    const [staff, setStaff] = useState('');
    const [comment, setComment] = useState('');

    const movieId = useParams().movieId;

    const getDetail = async () => {
        const nowDetail = await detailApi(movieId);
        setData(nowDetail[0]);
        setStaff(nowDetail[1]);
    }

    const getComment = async () => {
        const nowComment = await commentApi();
        setComment(nowComment);
    }


    useEffect(() => {
        getDetail();
        getComment();
    }, [])

    // console.log(staff)

    // for (let i = 0; i < staff.length; i++){
    //     console.log(staff[i].name);
    //     const result = staff[i].name
    //     const staffInfo = document.getElementById('staffInfo');
    // }


    const handleOnSubmit = (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        const comment = e.target[0].value;
    }

    return (
        <Whole>
            <Title>
                <div class='v-line'>
                    <div style={{ marginLeft: '10px' }}>
                        <h1>{data.title_kor}</h1>
                        <h1>{data.title_eng}</h1>
                    </div>
                </div>
            </Title>
            <Infos>
                <div id='image'>
                    <img
                        src={data.poster_url}>
                    </img>
                </div>
                <div class='v-line'>
                    <div>
                        <p>- 관람객 평점: {data.rating_aud}</p>
                        <p>- 평론가 평점: </p>
                        {/* {data.rating_cri.length === 0 ? (
                            <p>x</p>
                        ) : (<p>{data.rating_cri}</p>)} */}
                        <p>- 네티즌 평점: {data.rating_net}</p>
                        <p>- 장르: {data.genre}</p>
                        <p>- 상영 시간: {data.showtimes}</p>
                        <p>- 개봉일: {data.release_date}</p>
                        <h2>줄거리</h2>
                        <p id='summary'>{data.summary}</p>
                    </div>
                </div>
            </Infos>
            <Staff>
                <article id="staffInfo">

                </article>
                <div class='v-line'>
                    <h2 id='peopleinfo' style={{ marginLeft: '10px' }}>인물 정보</h2>
                </div>
                <div style={{ display: 'flex' }}>
                    {staff.length > 0 && staff.map(people => (
                        <People people={people} key={people.name} />
                    ))}
                </div>
            </Staff>
            <Comment>
                <form onSubmit={handleOnSubmit}>
                    <div class='v-line'>
                        <h2 id='commentTitle'>댓글</h2>
                    </div>
                    {comment.length === 0 ? (
                        <p>댓글이 없지롱</p>
                    ) : (
                        <div class='Oncomment'>
                            <p id="username">{comment.username}</p>
                            <p>{comment.post}</p>
                        </div>
                    )}
                    <input
                        id='inputed'
                        placeholder="댓글을 입력하세요."
                    />
                    <button type="submit">등록</button>
                </form>
            </Comment>
        </Whole>
    );
};

export default Body;