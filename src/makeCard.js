const makeCard = (show) => {
  const showCard = document.createElement('li');
  const popup = document.querySelector('.createPopup');

  showCard.innerHTML = `
    <img src="${show.image.medium}">
    ${show.name}
    <input type="button" value="Comment" class="comment"> 
  `;

  
  
  showCard.querySelector('.comment').addEventListener('click',  () => {
    
    popup.classList.add('showPopup')
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
  })
  return showCard;

};


export default makeCard;
