import { theme } from "@/styles/theme";
import styled from "@emotion/styled";
import { NextPage } from "next";

interface props {
  children: React.ReactNode;
}

const Layout: NextPage<props> = ({ children }) => {
  return (
    <Container>
      <View>{children}</View>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${theme.WHITE};
`;

const View = styled.div`
  aspect-ratio: 1/1.8;
  height: 100%;
  background-color: ${theme.BEIGE};
`;
