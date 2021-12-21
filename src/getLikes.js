// const appId = 'aCvUcU44XeA6m6Pc5YC4'
const appId = 'exGrmnNXlgE2dfxvkk5S';
const getLikes = async () => {
  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return response.json();
};
export default getLikes;
