import styled from "styled-components";
import { MailOutline, Phone, Room } from "@material-ui/icons";
import { useCallback, useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";
import { themeContext } from "../../context";

const Container = styled.div`
  height: 100vh;
  position: relative;
`;
const Bg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #c96a6a;
  position: absolute;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0 50px;
  }
`;
const Left = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 60px;
  width: 80%;

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;
const Info = styled.div``;
const InfoItem = styled.div`
  display: flex;
  align-item: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const Span = styled.span`
  margin-left: 20px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-item: center;
  justify-content: center;
`;
const Desc = styled.p`
  font-weight: 200;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;
const From = styled.form`
  margin-top: 50px;

  @media screen and (max-width: 480px) {
    display: flex;
    margin-top: 0px;
    flex-wrap: wrap;
  }
`;
const Input = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;

  @media screen and (max-width: 480px) {
    width: 90%;
  }
`;
const TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0;
  font-size: 14px;
  padding-left: 10px;
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: #c96a6a;
  color: white;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
`;

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const initialState = {
    user_name: "",
    user_subject: "",
    user_email: "",
    user_message: "",
  };
  const [{ user_name, user_subject, user_email, user_message }, setText] =
    useState(initialState);

  const clearState = () => {
    setText({ ...initialState });
  };
  const onTextInputChange = (e) => {
    const { name, value } = e.target;
    setText((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1xj1jnd",
        "template_v2bf55w",
        formRef.current,
        "user_qcpGNqwJUV63Kz2Rqbd0i"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    clearState();
  };

  return (
    <Container>
      <Bg />
      <Wrapper>
        <Left>
          <Title>Let's discuss your project</Title>
          <Info>
            <InfoItem>
              <Phone />
              <Span>+84 358 208 351</Span>
            </InfoItem>
            <InfoItem>
              <MailOutline />
              <Span>nt9a3chienvanchuong@gmail.com</Span>
            </InfoItem>
            <InfoItem>
              <Room />
              <Span>Distric 8, HCM City</Span>
            </InfoItem>
          </Info>
        </Left>
        <Right>
          <Desc>
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </Desc>
          <From ref={formRef} onSubmit={handleSubmit}>
            <Input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              value={user_name}
              onChange={onTextInputChange}
            ></Input>
            <Input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              value={user_subject}
              onChange={onTextInputChange}
            ></Input>
            <Input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Email"
              name="user_email"
              value={user_email}
              onChange={onTextInputChange}
            ></Input>
            <TextArea
              style={{ backgroundColor: darkMode && "#333" }}
              rows="5"
              placeholder="Message"
              name="user_message"
              value={user_message}
              onChange={onTextInputChange}
            ></TextArea>
            <Button>Submit</Button>
            {done && "Thank you..."}
          </From>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contact;
