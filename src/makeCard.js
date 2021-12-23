import clickLike from './clickLike.js';
import { addComment, getComments } from './comments.js';

const cardInner = (show) => {
  const html = `
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
  return html;
};

const popupInner = (show) => {
  const html = `
    <div class="popupContent">
      <div class="title-close">
        <h1 class="showTitle">${show.name}</h1>
        <input type="button" class="closePopup button" value="X">
      </div>
      <img id="big-pic" src="${show.image.original}">
      <div class="summary">${show.summary}</div>
      <div class="comments"></div>
      <div class="form">
        <input type="text" id="name" placeholder="Your name" required>
        <textarea id="opinion" placeholder="Type your opinion here..." required></textarea>
        <input class="submitOpinion button" type="submit" value="Submit">
      </div>
    </div>
  `;
  return html;
};

const paintComments = (popup, show) => {
  getComments(show.id).then((comments) => {
    popup.querySelector('.comments').innerHTML = `
      ${comments.map((comment) => `
          <h3>${comment.username}</h3>
          <p>${comment.comment}</p>
          <p><i>${comment.creation_date}</i></p>
      `).join(' ')}
    `;
  });
};

const makeCard = (show) => {
  const showCard = document.createElement('li');
  const popup = document.querySelector('.createPopup');

  showCard.innerHTML = cardInner(show);

  showCard.querySelector('.comment').addEventListener('click', () => {
    popup.classList.add('invisible');
    popup.innerHTML = popupInner(show);

    const closePopup = document.querySelector('.closePopup');
    const submitOpinion = document.querySelector('.submitOpinion');

    submitOpinion.addEventListener('click', (e) => {
      e.preventDefault();
      const user = document.querySelector('.form #name').value;
      const comment = document.querySelector('.form #opinion').value;
      const itemID = show.id;
      addComment({ user, itemID, comment }).then(() => {
        paintComments(popup, show);
      });
    });
    closePopup.addEventListener('click', () => {
      popup.classList.remove('invisible');
    });
    paintComments(popup, show);
  });

  const heart = showCard.querySelector('.label');
  const check = showCard.querySelector('.check');
  check.addEventListener('change', () => {
    clickLike(show, heart);
  });

  return showCard;
};
export default makeCard;
