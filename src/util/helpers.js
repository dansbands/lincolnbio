const defaultOptions = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

export const formatDate = (date, options = defaultOptions) => {
  const dateString = new Date(date)?.toLocaleDateString("en-US", options);
  return dateString;
};

export const sortEvents = (events, isReversed) => {
  return events
  .filter(evt => evt.start?.dateTime)
  .sort((a, b) => {
    if(!a.start?.dateTime || !b.start?.dateTime) return -1;
    if (a.start?.dateTime < b.start?.dateTime) {
      return isReversed ? 1 : -1;
    }
    if (a.start?.dateTime > b.start?.dateTime) {
      return isReversed ? -1 : 1;
    }
    return 0;
  })
}