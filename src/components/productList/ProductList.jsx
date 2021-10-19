import styled from "styled-components";
import Product from "../product/Product";
import { products } from "../../Data";

const Container = styled.div`
  padding: 50px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
const Text = styled.div`
  width: 65%;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 600;
`;
const Desc = styled.p`
  margin: 20px 0;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProductList = () => {
  return (
    <Container>
      <Text>
        <Title>Create & inspire. It's Chien</Title>
        <Desc>
          Chien is a creative portfolio that your work has been waiting for.
          Beautiful homes, stunning portfolio styles & a whole lot more awaits
          inside.
        </Desc>
      </Text>
      <List>
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </List>
    </Container>
  );
};

export default ProductList;
