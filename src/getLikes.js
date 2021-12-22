import appId from "./app-id.js"
import baseUrl from "./baseUrl.js";
// const appId = 'aCvUcU44XeA6m6Pc5YC4'

const getLikes = async () => {
  const response = await fetch(`${baseUrl}/apps/${appId}/likes`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};
export default getLikes;
