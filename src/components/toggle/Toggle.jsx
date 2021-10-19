import { Brightness2, Brightness5 } from "@material-ui/icons";
import { useContext } from "react";
import styled from "styled-components";
import { themeContext } from "../../context";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";

const Container = styled.div`
  width: 50px;
  height: 25px;
  border-radius: 20px;
  border: 1pz solid #999;
  background-color: #555;
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const Img = styled.img`
  width: 15px;
  height: 15px;
`;
const Button = styled.div`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: #999;
  position: absolute;
  cursor: pointer;
`;

const Toggle = () => {
  const theme = useContext(themeContext);
  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <Container>
      <Img src={Sun} />
      <Img src={Moon} />
      <Button
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></Button>
    </Container>
  );
};

export default Toggle;
