const getShows = async (pg = 0) => {
  const response = await fetch(`https://api.tvmaze.com/shows?page=${pg}`, {
    method: 'GET',
  });
  const json = await response.json();
  return json;
};
export default getShows;
