import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Splash() {
  const router = useRouter();
  return (
    <Container onClick={() => router.push("/onboarding/intro")}>
      <TextBox>
        <Title>양파 키우기</Title>
        <Content>화면을 터치하여 게임 시작하기</Content>
      </TextBox>

      <Mijeong src="/imgs/splash/default.png" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const TextBox = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0%);
  gap: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "UhBeeJJIBBABBA";
`;

const Title = styled.h1`
  color: ${theme.BLACK};
  font-size: 30px;
  font-weight: 400;
`;

const Content = styled.p`
  color: ${theme.GRAY1};
  font-size: 12px;
  font-weight: 400;
  animation: chu 1.4s linear infinite;

  @keyframes chu {
    0% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(1);
    }
  }
`;

const Mijeong = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
