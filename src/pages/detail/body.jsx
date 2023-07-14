import { Title } from "./style";
import { detailApi } from "../../apis/detailApis/apis";
import { useState, useEffect } from "react";
import { Staff } from "./style";
import { Infos } from "./style";
import { Whole } from "./style";

function Body() {
    const [data, setData] = useState('');

    const getDetail = async () => {
        const nowDetail = await detailApi();
        setData(nowDetail);
    }

    useEffect(() => {
        getDetail();
    }, [])

    console.log(data);
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
            <h2>인물 정보</h2>
            <Staff>
                <img
                    src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgmovie.naver.net%2Fmdi%2Fpi%2F000000056%2FPM5699_115943_000.jpg&type=u111_139&quality=95">
                </img>
                <p>이름</p>
                <p>역할</p>
            </Staff>

        </Whole>
    );
};

export default Body;