const makeCard = (allShows = [], showID = 0) => {
  const showCard = document.createElement('li')
  showCard.innerHTML = `
    <img src="${allShows[showID].image.medium}">
    ${allShows[showID].name}
    <input type="button" value="Comment">
  `
  return showCard;
}
export default makeCard;
