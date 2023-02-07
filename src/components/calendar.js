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
      {isOpen && <Content $isOpen={isOpen}>Here's some content</Content>}
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  cursor: pointer;
`;

const Content = styled.div``;
