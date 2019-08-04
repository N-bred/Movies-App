const makeRequest = async url => {
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

const shortenText = (text, length = 155) => `${text.substring(0, length)}...`;

const minToHours = mins => {
  const num = mins;
  const hours = num / 60;
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);

  return `${rhours}h ${rminutes}min`;
};

const convertMoney = money => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  return formatter.format(money);
};

export { makeRequest, shortenText, minToHours, convertMoney };
