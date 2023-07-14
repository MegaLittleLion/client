import { Title } from "./style";
import { detailApi } from "../../apis/detailApis/apis";
import { useState, useEffect } from "react";
import { Poster } from "./style";

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
        <>
            <Title>
                영화 제목 (한글)
                영화 제목 (영어)
            </Title>
            <Poster
                src="https://movie-phinf.pstatic.net/20220714_114/1657780525423jmTpw_JPEG/movie_image.jpg?type=m203_290_2">
            </Poster>
        </>
    );
};

export default Body;