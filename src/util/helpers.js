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
