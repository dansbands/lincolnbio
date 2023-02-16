import styled, { ThemeProvider } from "styled-components";

import QuickLinks from "./components/quicklinks";
import TipLinks from "./components/tiplinks";
import Calendar from "./components/calendar";
import Bio from "./components/bio";
import Header from "./components/header";
import { theme } from "./util/theme";
import { useState } from "react";

function App() {
  const [isDark, toggleDark] = useState(false);

  return (
    <ThemeProvider theme={theme[isDark ? 'dark' : 'light']}>
      <Container>
        <Header toggleDark={toggleDark} />
        <Body>
          <QuickLinks />
          <TipLinks />
          <Calendar />
          <Bio />
        </Body>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  font-family: roboto;
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  margin: 0;
  padding: 0;
`;

const Body = styled.div`
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
