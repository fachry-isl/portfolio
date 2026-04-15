export const formatDate = (date: string | Date, type = "MMMM dd, yyyy") => {
  if (!date) {
    return "";
  }

  const dateFormat = new Date(date);

  const formatted = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long", // "MMMM" → full month name
    day: "2-digit", // "dd" → zero-padded day
  }).format(dateFormat);

  return formatted;
};
