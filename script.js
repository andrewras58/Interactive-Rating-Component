let myRating = 0;
let ratingButtons = document.getElementsByClassName("rating");
let submitButton = document.getElementById("submit");

Array.from(ratingButtons).forEach(el => el.addEventListener('click', event => {
    myRating = event.currentTarget.innerText;
}));

submitButton.addEventListener('click', event => {
    if (myRating !== 0) {
        console.log(myRating);
    }
});