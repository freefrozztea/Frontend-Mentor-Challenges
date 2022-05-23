let ratings = document.querySelectorAll('.circle');
let btnSubmit = document.querySelector('.btn-submit');
let evaluation = document.querySelector('.evaluation');
let thankyou = document.querySelector('.thankyou');
let ratingNum = document.querySelector('#rating-num');

let selectedRating;

ratings.forEach( rating => {
  rating.addEventListener("click", () => {
    rating.classList.add('selected');
    selectedRating = rating.textContent;
    console.log(`the element ${rating.textContent} has been clicked`);
  })
})

btnSubmit.addEventListener('click', () => {
  evaluation.style.display = 'none';
  thankyou.classList.add('thankyou-active');
  ratingNum.innerHTML = selectedRating;
})