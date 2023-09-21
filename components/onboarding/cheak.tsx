import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

export default function Cheak() {
  const router = useRouter();

  const name =
    typeof window !== "undefined"
      ? localStorage.getItem("name") || "미정이"
      : "미정이";
  return (
    <Container onClick={() => router.push("/main")}>
      <Title>
        "{name}"<br />
        마음에들어여..!
      </Title>

      <Mijeong src="/imgs/splash/happy.png" />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Title = styled.h1`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0%);
  color: ${theme.BLACK};
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  font-family: "UhBeeJJIBBABBA";
`;

const Mijeong = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
