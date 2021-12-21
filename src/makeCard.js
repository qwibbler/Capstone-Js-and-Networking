const makeCard = (show) => {
  const showCard = document.createElement('li');
  showCard.innerHTML = `
    <img src="${show.image.medium}">
    <div class="title">
      <h3>${show.name}</h3>
      <input class="likes check" type="checkbox" name="likes" id="likes">
      <label class="likes label" for="likes">&#9825</label>
      <input class="likes number" type="text" value="78" disabled>
    </div>
    <input class="comment button" type="button" value="Comment">
  `;
  return showCard;
};
export default makeCard;
