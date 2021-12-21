const makeCard = (show) => {
  const showCard = document.createElement('li');
  showCard.innerHTML = `
    <img src="${show.image.medium}">
    ${show.name}
    <input type="button" value="Comment">
  `;
  return showCard;
};
export default makeCard;
