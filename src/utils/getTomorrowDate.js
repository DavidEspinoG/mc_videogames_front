const getTomorrowDate = () => {
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  return tomorrow.toISOString().split('T')[0];
};

export default getTomorrowDate;
