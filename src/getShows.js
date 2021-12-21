const getShows = async (pg = 1) => {
  const response = await fetch(`https://api.tvmaze.com/shows?page=${pg}`, {
    method: 'GET',
  })
  const json = await response.json();
  console.log(response, json);
  return json;
}
export default getShows;
