import styled, { ThemeProvider } from "styled-components";

import QuickLinks from "./components/quicklinks";
import TipLinks from "./components/tiplinks";
import Calendar from "./components/calendar";
import Bio from "./components/bio";
import Header from "./components/header";
import { theme } from "./util/theme";
import { useEffect, useState } from "react";
import { getEvents } from "./util/fetch";
import { sortEvents } from "./util/helpers";

function App() {
  const [colorMode, updateColorMode] = useState("light");
  const [events, setEvents] = useState([]);

  const calendarID = process.env.REACT_APP_CALENDAR_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;

  useEffect(() => {
    const sortAndSetEvents = (events) => {
      const sortedEvents = sortEvents(events, true);
      setEvents(sortedEvents);
    };
    getEvents(calendarID, apiKey, sortAndSetEvents);
  }, [apiKey, calendarID]);

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) =>
        updateColorMode(e.matches ? "dark" : "light")
      );

    updateColorMode(
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    );

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", () => {});
    };
  }, []);

  return (
    <ThemeProvider theme={theme[colorMode]}>
      <Container>
        <Header />
        <Body>
          <QuickLinks />
          <TipLinks />
          <Calendar events={events} />
          <Bio />
        </Body>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  font-family: roboto;
  background: ${({ theme }) => theme.colors.background} no-repeat center center;
  background-size: cover;
  height: 500vh;
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
