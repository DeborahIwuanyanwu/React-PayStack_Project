import styled from "@emotion/styled";

const SecondSection = () => {
return(
    <>
      <Container>
    <ContainerHolder>
      <LeftContainer>
        <LeftHolder>
          <BigText>Simple, easy payments</BigText>
          <SmallText>Building a business is hard. Getting paid shouldnt be. </SmallText>
        </LeftHolder>
      </LeftContainer>
      <RightContainer></RightContainer>
    </ContainerHolder>
  </Container>
    </>
)
};
export default SecondSection;

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContainerHolder = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftContainer = styled.div`
  width: 50%;
`;
const LeftHolder = styled.div`
  width: 100%;
`;
const BigText = styled.div`
  font-size: 50px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  width: 100%;
`;
const SmallText = styled.div`
  font-size: 22px;
  width: 100%;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
const RightContainer = styled.div`
  width: 50%;
`;
