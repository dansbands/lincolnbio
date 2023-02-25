import { faCircleSortUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled, { useTheme } from "styled-components";
import { breakpoint } from "../util/device";
import { formatDate, sortEvents } from "../util/helpers";
import { ReactComponent as SortUp } from "../assets/sortup.svg";

import SectionHeading from "./section-heading";

// @TODO: Combine this and Calendar into one ExpandableSection component,
// add styles and animations
const Calendar = ({ events }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSortReversed, setIsSortReversed] = useState(true);

  const theme = useTheme();

  const sortedEvents = sortEvents(events, isSortReversed);

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
            $isSortReversed={isSortReversed}
          >
            <SortUp
              alt="tip jar icon"
              fill={theme.colors.primary}
              style={{ height: "50px", width: "50px" }}
            />
          </SortButton>
          {sortedEvents.map(({ location, summary, start }, idx) => {
            return (
              <CalendarRow key={idx}>
                <RowSectionLeft>
                  {summary}
                  <br />
                  <Location>{location}</Location>
                </RowSectionLeft>
                <RowSectionRight>
                  {formatDate(start?.dateTime, optionsDate)}
                  <br />
                  <Year>{formatDate(start?.dateTime, optionsYear)}</Year>
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

const Location = styled.div`
  font-size: 10px;
`;

const RowSectionRight = styled.div`
  text-align: right;
`;

const Year = styled.div`
  font-size: 10px;
`;

const SortButton = styled.button`
  background-color: transparent;
  border: ${({ theme }) => `1px solid ${theme.colors.primary}`};
  color: ${({ theme }) => theme.colors.primary};
  padding: 30px;
  border-radius: 30px;

  & svg {
    transform: ${({ $isSortReversed }) =>
      $isSortReversed ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;
