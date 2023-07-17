const getTomorrowDate = () => {
  let now = new Date();
  let tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1)
  return  tomorrow.toISOString().split("T")[0]
};

export default getTomorrowDate;