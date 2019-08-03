const makeRequest = async url => {
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

const shortenText = text => `${text.substring(0, 155)}...`;

export { makeRequest, shortenText };
