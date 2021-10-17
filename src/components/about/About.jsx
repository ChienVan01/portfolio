import styled from "styled-components";
import AwardImg from "../../img/award.png";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
`;
const Card = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
`;
const Bg = styled.div`
  width: 60%;
  height: 70vh;
  border-radius: 30px;
  position: absolute;
  top: 50px;
  left: 50px;
  background-color: #333;
`;
const LImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Right = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-weight: 400;
`;
const Sub = styled.p`
  margin: 20px 0;
`;
const Desc = styled.p`
  font-weight: 300;
`;
const Award = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const RImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 20px;
`;
const AwardText = styled.div`
  width: 70%;
`;
const AwardTitle = styled.h4`
  font-weight: bold;
  color: #555;
`;
const AwardDesc = styled.p``;

const About = () => {
  return (
    <Container>
      <Left>
        <Bg></Bg>
        <Card>
          <LImg src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        </Card>
      </Left>
      <Right>
        <Title>About me</Title>
        <Sub>Lorem ipsum dolor sit amet consectetur adipisicing elit. </Sub>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          assumenda officia suscipit deleniti id iste, impedit corrupti nihil
          perspiciatis doloribus obcaecati nisi dolor molestiae debitis ea,
          repellendus sapiente vel. Eos.
        </Desc>
        <Award>
          <RImg src={AwardImg} />
          <AwardText>
            <AwardTitle>International Design Awards 2021</AwardTitle>
            <AwardDesc>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
              and fugit.
            </AwardDesc>
          </AwardText>
        </Award>
      </Right>
    </Container>
  );
};

export default About;
