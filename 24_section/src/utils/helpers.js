export const formatCurrency = (value) => {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};

export const formatDate = (dateStr) => {
  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(dateStr));
};

export const calcMinutesLeft = (dateStr) => {
  const day1 = new Date().getTime();
  const day2 = new Date(dateStr).getTime();
  return Math.round((day2 - day1) / 60000);
};