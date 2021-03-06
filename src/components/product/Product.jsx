import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  transition: all 10s ease;
`;
const Container = styled.div`
  width: 300px;
  height: 35vh;
  margin: 20px 10px;
  border: 2px solid rgb(243, 242, 242);
  border-radius: 10px 10px 0px 0px;
  overflow: hidden;
  position: relative;
  &:hover ${Img} {
    transform: translateY(-10%);
    transition: 2s;
  }

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

const Product = ({ img, link, name }) => {
  return (
    <Container>
      <Browser>
        <Circle></Circle>
        <Circle></Circle>
        <Circle></Circle>
      </Browser>
      <A href={link} target="_blank" rel="noreferrer">
        <Img src={img} />
      </A>
      <Title>{name}</Title>
    </Container>
  );
};

export default Product;
