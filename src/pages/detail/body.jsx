import { Title } from "./style";
import { detailApi } from "../../apis/detailApis/apis";
import { useState, useEffect } from "react";
import { Staff } from "./style";
import { Infos } from "./style";
import { Whole } from "./style";
import { Comment } from "./style";



function People({ people }) {
    return (
        <div style={{ marginRight: '15px' }}>
            <img src={people.image_url}></img>

            <p>{people.name}</p>
            <p>{people.role}</p>
        </div>
    );
}



function Body() {
    const [data, setData] = useState('');
    const [staff, setStaff] = useState('');

    const getDetail = async () => {
        const nowDetail = await detailApi();
        setData(nowDetail[0]);
        setStaff(nowDetail[1]);
    }


    useEffect(() => {
        getDetail();
    }, [])

    console.log(staff)

    // for (let i = 0; i < staff.length; i++){
    //     console.log(staff[i].name);
    //     const result = staff[i].name
    //     const staffInfo = document.getElementById('staffInfo');
    // }


    return (
        <Whole>
            <Title>
                <h1>{data.title_kor}</h1>
                <h1>{data.title_eng}</h1>
            </Title>
            <Infos>
                <img
                    src="https://movie-phinf.pstatic.net/20220714_114/1657780525423jmTpw_JPEG/movie_image.jpg?type=m203_290_2">
                </img>
                <div >
                    <p>관람객 평점: {data.rating_aud}</p>
                    <p>평론가 평점: {data.rating_cri}</p>
                    <p>네티즌 평점: {data.rating_net}</p>
                    <p>장르: {data.genre}</p>
                    <p>상영 시간: {data.showtimes}</p>
                    <p>개봉일: {data.release_date}</p>
                    <h2>줄거리</h2>
                    <p>{data.summary}</p>
                </div>
            </Infos>
            <Staff>
                <article id="staffInfo">

                </article>
                <h2>인물 정보</h2>
                <div style={{ display: 'flex' }}>
                    {staff.length > 0 && staff.map(people => (
                        <People people={people} key={people.name} />
                    ))}
                </div>
            </Staff>
            <Comment>
                <form>
                    <h2>댓글</h2>
                    <input
                        placeholder="댓글을 입력하세요."
                    />
                    <button>댓글</button>
                </form>
            </Comment>

        </Whole>
    );
};

export default Body;