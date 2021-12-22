import appId from './app-id.js';
import baseUrl from './baseUrl.js';

export const addComment = async ({ user, itemID, comment }) => {
  const data = await fetch(`${baseUrl}/apps/${appId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: user,
      item_id: itemID,
      comment,
    }),
  });
  return data;
};

export const getComments = async (itemId) => {
  const data = await fetch(`${baseUrl}/apps/${appId}/comments?item_id=${itemId}`);
  return data.json();
};
