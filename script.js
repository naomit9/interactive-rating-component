var mainContainer = document.querySelector(".main-container");
var thanksContainer = document.querySelector(".thank-you");
var submitBtn = document.getElementById("submit");
var rateBtn = document.getElementById("rate-again");
var rating = document.getElementById("rating");
var rates = document.querySelectorAll(".btn");

submitBtn.onclick = submit;
function submit(){
    thanksContainer.style.display = "block";
    mainContainer.style.display = "none";
}

rateBtn.onclick = rateAgain;
function rateAgain(){
    thanksContainer.style.display = "none";
    mainContainer.style.display = "block";
}

rates.forEach((rate) => {
    rate.addEventListener ("click", () => {
        rating.innerHTML = rate.innerHTML;
        //console.log(rate.innerHTML);
    })
})
    

