import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";

export default function Main() {
  const [name, setName] = useState("");

  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: any) => {
      setValue(result);
    },
  });

  useEffect(() => {
    const name =
      typeof window !== "undefined"
        ? localStorage.getItem("name") || "미정이"
        : "미정이";

    setName(name);
  }, []);

  return (
    <Container>
      <Background></Background>
      <Wrapper>
        <TalkBox>{value}</TalkBox>

        <Text>헤헤 주인님 체고</Text>
        <Mijeong>
          <Body src="/imgs/mijeong/default.png" />
          <Hair src="/imgs/mijeong/hair.png" />
          <NameTag>
            <Name>{name}</Name>
          </NameTag>
        </Mijeong>

        <MikeBox onMouseDown={listen} onMouseUp={stop} onMouseLeave={stop}>
          <Circle3>
            <Circle2>
              <Circle1>
                <Mike src="/imgs/main/microphone.png" />
              </Circle1>
            </Circle2>
          </Circle3>
        </MikeBox>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 40px 40px 20px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
`;

const Background = styled.div`
  position: absolute;
  bottom: -40%;
  left: 50%;
  transform: translate(-50%, 0%);
  border-radius: 50%;
  width: 640px;
  height: 500px;
  background-color: #ece2b4;
  z-index: 1;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TalkBox = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 140px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #fff 0%, rgba(255, 255, 255, 0.5) 100%);
  z-index: 4;
  color: ${theme.GREEN};
  font-size: 24px;
  font-weight: 800;
`;

const Text = styled.div`
  position: absolute;
  top: 200px;
  color: ${theme.BLACK};
  font-family: UhBee JJIBBABBA;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
  z-index: 2;
`;

const Mijeong = styled.div`
  position: absolute;
  bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Body = styled.img`
  width: 80%;
  z-index: 2;
`;

const Hair = styled.img`
  width: 16%;
  position: absolute;
  bottom: -150%;
  z-index: 0.5;
`;

const NameTag = styled.div`
  position: absolute;
  bottom: 20%;
  right: -4%;
  width: 100px;
  height: 40px;
  border: 3px solid ${theme.RED};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.WHITE};
  z-index: 3;
`;

const Name = styled.p`
  width: 98%;
  border: 1px solid ${theme.RED};
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.BLACK};
  font-size: 18px;
  font-weight: 600;
  font-family: "UhBeeJJIBBABBA";
`;

const MikeBox = styled.div`
  position: absolute;
  bottom: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-items: center;
  z-index: 2;
  cursor: pointer;
`;

const Circle3 = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: rgba(166, 174, 65, 0.2);
  z-index: 10;
`;

const Circle2 = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: rgba(166, 174, 65, 0.4);
  z-index: 20;
`;

const Circle1 = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-items: center;
  background-color: ${theme.GREEN};
  z-index: 30;
`;

const Mike = styled.img`
  width: 18px;
  margin: 0 auto;
`;
