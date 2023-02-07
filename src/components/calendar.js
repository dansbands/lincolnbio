import { useState } from "react";
import styled from "styled-components";

import SectionHeading from "./section-heading";

// @TODO: Combine this and Calendar into one ExpandableSection component,
// add styles and animations
const Calendar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Container onClick={() => setIsOpen(!isOpen)}>
      <SectionHeading isOpen={isOpen} isCollapsible caption="Calendar" />
      {isOpen && <Content $isOpen={isOpen}>Coming soon...</Content>}
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  cursor: pointer;
  width: 80vw;
`;

const Content = styled.div``;
