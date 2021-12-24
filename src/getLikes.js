import appId from './app-id.js';
import baseUrl from './baseUrl.js';

const getLikes = async () => {
  const response = await fetch(`${baseUrl}/apps/${appId}/likes`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};
export default getLikes;
