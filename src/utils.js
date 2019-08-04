const makeRequest = async url => {
  const request = await fetch(url);
  const response = await request.json();
  return response;
};

const shortenText = (text, length = 155) => `${text.substring(0, length)}...`;

export { makeRequest, shortenText };
