import styled from "styled-components";
import Me from "../../img/me.png";

const Container = styled.div`
  display: flex;
  height: 100vh;

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
const ILeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LeftWrapper = styled.div`
  padding: 50px;
  height: 50%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 10px;
    align-items: center;
    text-align: center;
    justify-content: center;
    height: 100%;
  }
`;
const TextIntro = styled.h2`
  font-size: 30px;
  font-wight: 300;
  margin: 0;
`;
const Name = styled.h1`
  font-size: 60px;
  margin: 0;
`;
const ITitle = styled.div`
  height: 50px;
  overflow: hidden;
`;
const ITitleWrapper = styled.div`
  height: 100%;
  animation: move 10s ease-in-out infinite alternate;

  @keyframes move {
    33% {
      transform: translateY(-50px);
    }
    67% {
      transform: translateY(-100px);
    }
    100% {
      transform: translateY(-150px);
    }
  }
`;
const ITitleItem = styled.div`
  height: 50px;
  font-size: 30px;
  font-weight: bold;
  color: #c96a6a;
  display: flex;
  align-items: center;
`;
const IDesc = styled.p`
  margin: 0;
  padding: 0;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const IRight = styled.div`
  flex: 1;
  position: relative;
`;
const BG = styled.div`
  clip-path: polygon(45% 0, 100% 0, 100% 100%, 36% 100%, 0% 38%);
  background-color: #c96a6a;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
`;
const Svg = styled.svg`
  width: 30px;
  height: 30px;
  position: absolute;
  bottom: 20px;
`;
const Path = styled.path``;
const GScroll = styled.g``;
const GGroup = styled.g``;
const GGroup2 = styled.g``;
const Intro = () => {
  return (
    <Container>
      <ILeft>
        <LeftWrapper>
          <TextIntro>Hello, My name is</TextIntro>
          <Name>Chien Van</Name>
          <ITitle>
            <ITitleWrapper>
              <ITitleItem>Web Developer</ITitleItem>
              <ITitleItem>UI/UX Design</ITitleItem>
              <ITitleItem>Content Creator</ITitleItem>
            </ITitleWrapper>
          </ITitle>
          <IDesc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            modi omnis est eaque assumenda facilis quos, itaque sint recusandae
            unde quae ab voluptates eos error ullam iusto maiores rerum hic!
          </IDesc>
          <Svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            stroke="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <GScroll>
              <Path
                id="Vector"
                d="M40.5 15L34.5 9L28.5 15"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <Path
                id="Vector_2"
                d="M28.5 24L34.5 30L40.5 24"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <GGroup>
                <Path
                  id="Vector_3"
                  d="M9 37.5H60"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </GGroup>
              <Path
                id="Vector_4"
                d="M34.5 27V9"
                stroke-width="2.9895"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <GGroup2>
                <Path
                  id="Vector_5"
                  d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                  stroke-width="3"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </GGroup2>
            </GScroll>
          </Svg>
        </LeftWrapper>
      </ILeft>
      <IRight>
        <BG></BG>
        <Img src={Me}></Img>
      </IRight>
    </Container>
  );
};

export default Intro;
