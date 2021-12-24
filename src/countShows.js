const countShows = (arr, list) => {
  const showsCount = arr.length;
  const listCount = list.querySelectorAll('li').length;
  return [showsCount, listCount, showsCount === listCount];
};
export default countShows;
