import styled from "styled-components";
import {
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

const MonthlyPagination = ({ events, filteredEvents, setFilteredEvents }) => {
  const todaysDate = new Date();
  const [selectedDate, setSelectedDate] = useState(todaysDate);

  const options = { month: "long", year: "2-digit" };
  const currentMonth = new Intl.DateTimeFormat("en-US", options).format(
    selectedDate
  );

  const filteredEventsByMonth = events.filter((evt) => {
    const formattedEventTime = new Date(evt.start.dateTime).getTime();
    const firstDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const lastDay = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );

    const isEarlyEnough = formattedEventTime >= firstDay;
    const isLateEnough = formattedEventTime <= lastDay;

    const isInRange = isEarlyEnough && isLateEnough;

    return isInRange;
  });

  useEffect(() => {
    setFilteredEvents(filteredEventsByMonth);
  }, [selectedDate]);

  const handleDateChange = (amount) => {
    const updatedDate = new Date(
      selectedDate.setMonth(selectedDate.getMonth() + amount)
    );

    setSelectedDate(updatedDate);
    setFilteredEvents(filteredEventsByMonth);
  };

  return (
    <Container>
      <Button onClick={() => handleDateChange(-1)}>
        <FontAwesomeIcon icon={faBackwardStep} size="xl" />
      </Button>
      <Month>{currentMonth}</Month>
      <Button onClick={() => handleDateChange(+1)}>
        <FontAwesomeIcon icon={faForwardStep} size="xl" />
      </Button>
    </Container>
  );
};

export default MonthlyPagination;

const Container = styled.div`
  display: flex;
`;

const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Month = styled.div`
  min-width: 125px;
  text-align: center;
`;
