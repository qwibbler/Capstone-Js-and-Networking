const getShows = async (pg = 1) => {
  const response = await fetch(`https://api.tvmaze.com/shows?page=${pg - 1}`, {
    method: 'GET',
  });
  const json = await response.json();
  return json;
};
export default getShows;
