import styled from "@emotion/styled";

const FourthSection = () => {
  return(
    <>
      <Container>
    <ContainerHolder>
      <LeftCard>
        <LeftHolder>
          <BigTexts>Build custom payments experiences with well-documented APIs</BigTexts>
          <SmallTexts>Developers love our thorough, well-documented APIs that let you to build everything from simple weekend projects, to complex financial products serving hundreds of thousands of customers. If you can imagine it, you can build it wiith Paystack.</SmallTexts>
          <TicksAndTexts>
            <Ticks1>
              <Ticks></Ticks>
            <Texts>Collect one-time and recurring payments from your app or website</Texts>
            </Ticks1>
            <Ticks2>
            <Ticks></Ticks>
            <Texts>Make instant transfers</Texts>
            </Ticks2>
            <Ticks3>
            <Ticks></Ticks>
            <Texts>Retrieve all your transaction and customer data</Texts>
            </Ticks3>
            <Ticks4>
            <Ticks></Ticks>
            <Texts>Verify the identity of customers</Texts>
            </Ticks4>
          </TicksAndTexts>
          <Link>
                  <BackButton></BackButton>
                  <LinkText>
                    Paystack API Quickstart
                  </LinkText>
                </Link>
        </LeftHolder>
      </LeftCard>
      <RightCard>
        <RightHolder></RightHolder>
      </RightCard>
    </ContainerHolder>
  </Container>;
    </>
  )

};
export default FourthSection;

const Container = styled.div`
width: 100%;
`;
const ContainerHolder = styled.div`
width: 85%;
height: 500px;
`;
const LeftCard = styled.div`
  width: 50%;
  height: 100%;
`
const LeftHolder = styled.div`
   width: 100%;
`
const BigTexts = styled.div`
  width: 400px;
  font-size: 45px;
`
const SmallTexts = styled.div`
  font-size: 20px;
  margin-top: 15px;
`
const TicksAndTexts = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`
const Ticks1 = styled.div`
  display: flex;
`
const Ticks = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background-color: #f7ffff;
`
const Ticks2 = styled.div`
  display: flex;
`
const Ticks3 = styled.div`
  display: flex;
`
const Ticks4 = styled.div`
  display: flex;
`
const Texts = styled.div`
  font-size: 14px;
`
const Link = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
`;
const BackButton = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50px;
  border: 1px solid #3bb75e;
`;
const LinkText = styled.div`
  font-size: 13px;
  margin-left: 15px;
`;
const RightCard = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`
const RightHolder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f7ffff;
`