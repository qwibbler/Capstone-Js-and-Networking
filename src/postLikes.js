const appId = 'exGrmnNXlgE2dfxvkk5S';
const postLikes = async (show) => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: show.id,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  return response.text();
};
export default postLikes;
