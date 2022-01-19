import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  height: 100px;
  transition: all 10s ease;
  border-radius: 50%;
`;
const Container = styled.div`
  width: 100px;
  height: 150px;
  margin: 40px 40px;
  // border: 2px solid rgb(243, 242, 242);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 480px) {
    width: 40%;
    height: 20vh;
  }
`;
const Browser = styled.div`
  height: 20px;
  background-color: rgb(243, 242, 242);
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
`;
const Circle = styled.div`
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  margin: 3px;
`;
const A = styled.a``;

const Title = styled.div`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  padding: 5px;
  justify-content: center;
  text-align: center;
`;

const Skill = ({ img, link, name }) => {
  return (
    <Container>
      <Img src={img} />

      <Title>{name}</Title>
    </Container>
  );
};

export default Skill;
