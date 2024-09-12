import styled from "@emotion/styled"

const FifthSection = () =>{
return(
    <>
    <Container>
        <ContainerHolder>
            <LeftContainer>
                <LeftImage></LeftImage>
            </LeftContainer>
            <RightContainer>
                <RightHolder>
                    <FirstParagraph>
                        <BigText>Protect yourself and your customers with advanced fraud detection</BigText>
                        <SmallText>Paystacks combination of automated and manual fraud systems protect you from fradulent transactions and asociated chargeback claims.</SmallText>
                    </FirstParagraph>
                    <SecondParagraph>
                    <BigText>Protect yourself and your customers with advanced fraud detection</BigText>
                    <SmallText>Paystacks combination of automated and manual fraud systems protect you from fradulent transactions and asociated chargeback claims.</SmallText>
                    </SecondParagraph>
                </RightHolder>
            </RightContainer>
        </ContainerHolder>
    </Container>
    </>
)
}
export default FifthSection

const Container = styled.div`
    width: 100%;
`
const ContainerHolder = styled.div`
    width: 85%;
`
const LeftContainer = styled.div`
    width: 50%;
    height: 450px;
`
const LeftImage = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f7ffff;
`
const RightContainer = styled.div`
    width: 50%;
    height: 450px;
    display: flex;
    align-items: center;
`
const RightHolder = styled.div`
    width: 100%;
`
const FirstParagraph = styled.div`
    width: 100%;
    display: flex;
flex-direction: column;
`
const BigText = styled.div`
    font-size: 45px;
    width: 450px;
`
const SmallText = styled.div`
    width: 100%;
    font-size: 20px;
    margin-top: 20px;
`
const SecondParagraph = styled.div`
        width: 100%;
    display: flex;
flex-direction: column;
`