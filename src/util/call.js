async function call({ url, method, headers, body }) {
  const response = await fetch(url, { method, headers, body });
  const responseJson = await response.json();

  return responseJson;
}

export default call;
