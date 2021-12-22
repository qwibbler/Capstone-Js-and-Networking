const makeCard = (show) => {
  const showCard = document.createElement('li');
  showCard.innerHTML = `
    <img src="${show.image.medium}">
    <div class="title">
      <h3>${show.name}</h3>
      <div class="likes likes-div">
        <input class="likes check" type="checkbox" name="likes" id="likes-${show.id}">
        <label class="likes label" for="likes-${show.id}">&#9825</label>
        <input class="likes number" type="text" value="${show.likes}" disabled>
      </div>
    </div>
    <input class="comment button" type="button" value="Comment">
  `;
  const popup = document.querySelector('.createPopup');
  showCard.innerHTML = `
    <img src="${show.image.medium}">
    ${show.name}
    <input type="button" value="Comment" class="comment"> 
  `;

  showCard.querySelector('.comment').addEventListener('click', () => {
    popup.classList.add('invisible');
    popup.innerHTML = `
    <div class="popupContent">
      <div class="title-close">
        <h1 class="showTitle">${show.name}</h1>
        <button type="button" class="closePopup">X</button>
      </div>
      <img src="${show.image.medium}">
      <p>${show.summary}</p>
      <div class="form">
        <input type="text" id="name" placeholder="Your name">
        <textarea id="comments" placeholder="Type your opinion here..."></textarea>
        <button class="submitOpinion" type="submit">Submit</button>
      </div>
    </div>
   `;
    const closePopup = document.querySelector('.closePopup');
    closePopup.addEventListener('click', () => {
      popup.classList.remove('invisible');
    });
  });
  return showCard;
};

export default makeCard;
