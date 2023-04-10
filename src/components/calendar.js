import { useState, useEffect } from "react";
import styled, { useTheme } from "styled-components";
import { breakpoint } from "../util/device";
import { sortEvents } from "../util/helpers";
import { ReactComponent as SortUp } from "../assets/sortup.svg";

import SectionHeading from "./section-heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import MonthlyPagination from "./monthly-pagination";
import CalendarRow from "./calendarRow";
import loader from "../assets/loading-fiddle.gif";

// @TODO: Combine this and Calendar into one ExpandableSection component,
// add styles and animations
const Calendar = ({ events }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSortReversed, setIsSortReversed] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredEvents, setFilteredEvents] = useState(null);
  const [shouldShowLoader, setShouldShowLoader] = useState(true);

  const itemsPerPage = 50;
  const spliceFromIndex = (currentPage - 1) * itemsPerPage;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const theme = useTheme();

  const sortedEvents = sortEvents(filteredEvents || events, isSortReversed);

  useEffect(() => {
    if (events?.length) {
      setTimeout(() => {
        setShouldShowLoader(filteredEvents?.length);
      }, 1000);
    }
  }, [events, filteredEvents]);

  return (
    <Container>
      <SectionHeading
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
        isCollapsible
        caption="Calendar"
        icon={() => <StyledFAIcon icon={faCalendarDays} size="lg" />}
        renderPagination={() => (
          <MonthlyPagination
            events={events}
            filteredEvents={filteredEvents}
            setFilteredEvents={setFilteredEvents}
          />
        )}
        renderSort={() => (
          <>
            <SortButton
              type="button"
              onClick={() => setIsSortReversed(!isSortReversed)}
              $isSortReversed={isSortReversed}
            >
              <div>Sort:</div>
              <SortUp alt="sort up icon" fill={theme.colors.primary} />
            </SortButton>
          </>
        )}
      />
      {isOpen && (
        <Content $isOpen={isOpen}>
          {shouldShowLoader ? (
            sortedEvents
              .splice(spliceFromIndex, itemsPerPage)
              .map(({ location, summary, start }, idx) => (
                <CalendarRow
                  key={idx}
                  location={location}
                  summary={summary}
                  start={start}
                />
              ))
          ) : (
            <img src={loader} alt="fiddle loading icon"></img>
          )}
        </Content>
      )}
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 90vw;

  ${breakpoint("tablet")} {
    width: 80vw;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  & img {
    width: 250px;
    margin: 0 auto;
  }
`;

const SortButton = styled.button`
  display: flex;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 20px;
  margin-left: 5px;
  padding-right: 0;
  cursor: pointer;

  & svg {
    font-size: 10px;
    height: 25px;
    width: 25px;
    transform: ${({ $isSortReversed }) =>
      $isSortReversed ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

const StyledFAIcon = styled(FontAwesomeIcon)`
  margin-right: 10px;
`;
