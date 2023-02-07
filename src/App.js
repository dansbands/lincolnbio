import styled from "styled-components";

import QuickLinks from "./components/quicklinks";
import TipLinks from "./components/tiplinks";
import Calendar from "./components/calendar";
import Bio from "./components/bio";
import Header from "./components/header";

function App() {
  return (
    <Container>
      <Header />
      <Body>
        <QuickLinks />
        <TipLinks />
        <Calendar />
        <Bio />
      </Body>
    </Container>
  );
}

export default App;

const background = "white";
const text = "black";

const Container = styled.div`
  font-family: roboto;
  width: 100vw;
  height: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${background};
  color: ${text};
  /* background: black;
  color: white; */
`;

const Body = styled.div`
  font-weight: 400;
  /* font-weight: 100; */
`;


