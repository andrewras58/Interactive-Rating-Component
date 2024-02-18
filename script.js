let myRating = 0;
let ratingButtons = document.getElementsByClassName("rating");
let submitButton = document.getElementById("submit");
let userScore = document.getElementById('user-score');

Array.from(ratingButtons).forEach(el => el.addEventListener('click', event => {
    myRating = event.currentTarget.innerText;
    Array.from(ratingButtons).forEach(el => {
        el.style.backgroundColor = '#252d37'; // var(--darkBlue)
        el.style.color = '#959eac'; // var(--lightGrey)
    });
    event.currentTarget.style.backgroundColor = '#fb7413' // var(--orange)
    el.style.color = '#000000';
}));

submitButton.addEventListener('click', event => {
    if (myRating !== 0) {
        userScore.innerText = `You selected ${myRating} out of 5`;
        document.getElementById("ratingState").style.display = "none";
        document.getElementById("endingState").style.display = "flex";
    }
});