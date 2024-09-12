import styled from "@emotion/styled"
import Header from "./Header"
import Hero from "./Hero"
import image from "../../assets/download"
const FirstSection = () =>{
    <Container>
        <img src={image} />
        <Header />
        <Hero />
    </Container>
}
export default FirstSection

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 100%;
        height: 100%;
    }
`