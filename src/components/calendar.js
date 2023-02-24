import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { breakpoint } from "../util/device";
import { formatDate } from "../util/helpers";

import SectionHeading from "./section-heading";

// @TODO: Combine this and Calendar into one ExpandableSection component,
// add styles and animations
const Calendar = ({ events }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSortReversed, setIsSortReversed] = useState(false);

  const sortedEvents = events.sort((a, b) => {
    if (a.start?.dateTime < b.start?.dateTime) {
      return isSortReversed ? 1 : -1;
    }
    if (a.start?.dateTime > b.start?.dateTime) {
      return isSortReversed ? -1 : 1;
    }
    return 0;
  });

  const optionsDate = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const optionsYear = {
    year: "numeric",
  };

  return (
    <Container>
      <SectionHeading
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        isCollapsible
        caption="Calendar"
      />
      {isOpen && (
        <Content $isOpen={isOpen}>
          <SortButton
            type="button"
            onClick={() => setIsSortReversed(!isSortReversed)}
          >
            <FontAwesomeIcon
              icon={faCaretRight}
              size="6x"
              rotation={isSortReversed ? 90 : 270}
            />
          </SortButton>
          {sortedEvents.map(({ summary, start }) => {
            return (
              <CalendarRow key={start?.dateTime}>
                <RowSectionLeft>{summary}</RowSectionLeft>
                <RowSectionRight>
                  {formatDate(start?.dateTime, optionsDate)}
                  <br />
                  {formatDate(start?.dateTime, optionsYear)}
                </RowSectionRight>
              </CalendarRow>
            );
          })}
        </Content>
      )}
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  cursor: pointer;
  width: 90vw;

  ${breakpoint("tablet")} {
    width: 80vw;
  }
`;

const Content = styled.div``;

const CalendarRow = styled.div`
  padding: 10px 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.divider}`};
  display: flex;
  justify-content: space-between;
`;

const RowSectionLeft = styled.div``;
const RowSectionRight = styled.div`
  text-align: right;
`;

const SortButton = styled.button`
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.primary};
  padding: 0 30px;
  border-radius: 30px;
`;
