import styled from "@emotion/styled";

const ThirdSection = () => {
  return (
    <>
      <Container>
        <ContaainerHolder>
          <LeftContainer>
            <LeftHolder></LeftHolder>
          </LeftContainer>
          <RightContainer>
            <RightHolder>
              <RightUp>
                <RightBigText>
                  Delight customers with a seamless payments experience
                </RightBigText>
                <RightSmallText>
                  Give your customers the gift of modern, frictionless, painless
                  payments. Integrate Paystack once and let your customers pay
                  you however they want.
                </RightSmallText>
                <TickedTexts>
                  <Ticked1>
                    <Ticks></Ticks>
                    <Card>Card</Card>
                    <Card>Bank Account</Card>
                    <Card>Bank Transfer</Card>
                    <Card>USSD</Card>
                  </Ticked1>
                  <Ticked2>
                    <Ticks2></Ticks2>
                    <Card>Apple Pay</Card>
                    <Card>Visa QR</Card>
                    <Card>Mobile Money</Card>
                    <Card>POS</Card>
                  </Ticked2>
                </TickedTexts>
              </RightUp>
              <RightDown>
                <DownBigText>
                  Enjoy phenomenal transaction success rates
                </DownBigText>
                <DownSmallText>
                  We automatically route payments through the most optimal
                  channels, ensuring the highest transaction success rates in
                  the market.
                </DownSmallText>
                <Link>
                  <BackButton></BackButton>
                  <LinkText>
                    Find out how we achieve high success rates
                  </LinkText>
                </Link>
              </RightDown>
            </RightHolder>
          </RightContainer>
        </ContaainerHolder>
      </Container>
    </>
  );
};
export default ThirdSection;

const Container = styled.div`
  width: 100%;
  height: 550px;
`;
const ContaainerHolder = styled.div`
  width: 95%;
  height: 100%;
`;
const LeftContainer = styled.div`
  width: 50%;
  height: 100%;
`;
const LeftHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RightHolder = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const RightUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const RightBigText = styled.div`
  font-size: 45px;
`;
const RightSmallText = styled.div`
  font-size: 20px;
`;
const TickedTexts = styled.div`
  width: 100%;
  display: flex;
`;
const Ticked1 = styled.div`
  display: flex;
  align-items: center;
`;
const Ticks = styled.div`
  width: 35px;
  height: 35px;
`;
const Card = styled.div`
  font-size: 15px;
`;
const Ticked2 = styled.div`
  display: flex;
  align-items: center;
`;
const Ticks2 = styled.div`
  width: 35px;
  height: 35px;
`;
const RightDown = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DownBigText = styled.div`
  font-size: 45px;
`;
const DownSmallText = styled.div`
  font-size: 20px;
`;
const Link = styled.div`
  width: 100%;
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
