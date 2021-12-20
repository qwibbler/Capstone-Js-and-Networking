import { DateTime } from "luxon";

const tvMazeUrl = 'https://api.tvmaze.com/';
const dt = DateTime.now()

// https://api.tvmaze.com/schedule/web?date=2020-05-29

const getShows = async () => {
  const response = await fetch(`${tvMazeUrl}schedule/web?date=${dt.toISODate()}`, {
    method: 'GET',
  })
  const json = JSON.parse(response);
  console.log(json);
  return json;
}

export default getShows;
