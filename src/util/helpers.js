const defaultDateOptions = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

const defaultTimeOptions = {
  timeStyle: "short",
};

export const formatDate = (date, options = defaultDateOptions) => {
  const newDateObj = new Date(date);
  const dateString = newDateObj?.toLocaleDateString("en-US", options);
  return dateString;
};

export const formatTime = (date, options = defaultTimeOptions) => {
  const newDateObj = new Date(date);
  const timeString = newDateObj?.toLocaleTimeString("en-US", options);
  return timeString;
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