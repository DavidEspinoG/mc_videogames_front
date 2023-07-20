const formatDate = (dateStr, daysLater = 0) => {
  const options = {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  };
  const date = new Date(dateStr);
  date.setDate(date.getDate() + daysLater);
  return date.toLocaleDateString('en-US', options);
};

export default formatDate;
