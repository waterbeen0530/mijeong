import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Adopt() {
  const router = useRouter();
  return (
    <Container>
      <ItemBox>
        <Title>저를 키워주새오..!</Title>
        <Button onClick={() => router.push("/onboarding/name")}>좋아!</Button>
      </ItemBox>

      <Mijeong src="/imgs/splash/help.png" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ItemBox = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 100%;
  gap: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  width: 100%;
  color: ${theme.BLACK};
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  font-family: "UhBeeJJIBBABBA";
`;

const Button = styled.button`
  width: 70%;
  height: 40px;
  border: none;
  border-radius: 6px;
  outline: none;
  background-color: ${theme.GREEN};
  color: ${theme.WHITE};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.1s;

  &:active {
    transform: scale(0.9);
  }
`;

const Mijeong = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
