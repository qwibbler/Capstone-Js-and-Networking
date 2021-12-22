import postLikes from './postLikes.js';

const clickLike = (show, heart) => {
  const likesNumber = heart.parentNode.querySelector('.number');
  const likesCheck = heart.parentNode.querySelector('.check');

  heart.innerHTML = '&#9829;';
  likesCheck.disabled = true;
  likesNumber.value = String(Number(likesNumber.value) + 1);

  postLikes(show);
};
export default clickLike;