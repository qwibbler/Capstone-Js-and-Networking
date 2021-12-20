const tvMazeUrl = 'https://api.tvmaze.com/';

const getShows = async () => {
  const response = await fetch(`${tvMazeUrl}shows}`, {
    method: 'GET',
  })
  const json = JSON.parse(response);
  console.log(json);
  return json;
}

export default getShows;
