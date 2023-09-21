import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function Name() {
  const refName = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const valueSubmit = (e: any) => {
    if (e.key === "Enter") {
      const userName = refName.current?.value || "미정이";
      localStorage.setItem("name", userName);
      router.push("/onboarding/cheak");
    }
  };
  return (
    <Container>
      <ItemBox>
        <TextBox>
          <Title>제 이름은 머에여?</Title>
          <Content>미입력시 "미정이"로 저장됩니다.</Content>
        </TextBox>
        <Input
          ref={refName}
          onKeyDown={valueSubmit}
          maxLength={4}
          placeholder="1~4 자 이내로 이름을 지어주세요."
        />
      </ItemBox>

      <Mijeong src="/imgs/splash/default.png" />
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
  gap: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: "UhBeeJJIBBABBA";
`;

const Title = styled.h1`
  width: 100%;
  color: ${theme.BLACK};
  font-size: 30px;
  font-weight: 400;
  text-align: center;
`;

const Content = styled.p`
  color: ${theme.GRAY1};
  font-size: 12px;
  font-weight: 400;
`;

const Input = styled.input`
  width: 70%;
  height: 40px;
  padding-left: 14px;
  border: 2px solid ${theme.GREEN};
  border-radius: 6px;
  outline: none;
  background-color: ${theme.WHITE};
  color: ${theme.BLACK};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
`;

const Mijeong = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
`;
