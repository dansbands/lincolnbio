import React from "react";
import styled from "styled-components";
import { formatDate } from "../util/helpers";

const CalendarRow = ({ key, location, summary, start }) => {
  const optionsDate = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const optionsYear = {
    year: "numeric",
  };

  return (
    <Container key={key}>
      <RowSectionLeft>
        {summary}
        <br />
        {location && (
          <Location>
            {location} - <span> Map: </span>
            <CalendarLink
              href={`https://maps.google.com/maps?q=${location}`}
              target="_blank"
              rel="noreferrer"
            >
              Google
            </CalendarLink>
            <span> | </span>
            <CalendarLink
              href={`https://maps.apple.com/maps?q=${location}`}
              target="_blank"
              rel="noreferrer"
            >
              Apple
            </CalendarLink>
          </Location>
        )}
      </RowSectionLeft>
      <RowSectionRight>
        {formatDate(start?.dateTime, optionsDate)}
        <br />
        <Year>{formatDate(start?.dateTime, optionsYear)}</Year>
      </RowSectionRight>
    </Container>
  );
};

export default CalendarRow;

const Container = styled.div`
  padding: 10px 0;
  border-bottom: ${({ theme }) => `1px solid ${theme.colors.divider}`};
  display: flex;
  justify-content: space-between;
`;

const CalendarLink = styled.a``;

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
