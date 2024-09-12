import styled from "@emotion/styled"
import FirstSection from "./Body.jsx/FirstSection"
import SecondSection from "./Body.jsx/SecondSection"
import ThirdSection from "./Body.jsx/ThirdSection"
import FourthSection from "./Body.jsx/FourthSection"
const LandingPage = ()=>{
    <Container>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection/>
    </Container>
}
export default LandingPage

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
