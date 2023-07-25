const formatToCurrency = (value, currency = 'USD') => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumSignificantDigits: 2,
  });

  return formatter.format(value);
};

export default formatToCurrency;
