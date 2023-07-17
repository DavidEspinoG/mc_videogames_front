const formatToCurrency = (value, currency = 'USD') => {
  const formatter = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency,
    maximumSignificantDigits: 2,
  });

  return formatter.format(value);
};

export default formatToCurrency;
