// 페이지 구성하는 순서. 각자 바디만 다르게.
import Wrapper from '../../style/global/wrapper'
import Header from '../../style/global/header'
import Footer from '../../style/global/footer'
import Body from './body'

function Main() {
    return (
        <Wrapper>
            <Header></Header>
            <Body></Body>
            <Footer></Footer>
        </Wrapper>
        
    )
}

export default Main;