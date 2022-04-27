let jokeBtnEl = document.getElementById("jokeBtn");
let jokeTextEl = document.getElementById("jokeText");
let spinnerEl = document.getElementById("spinner");

function processData() {
    let options = {
        method: "GET"
    }
    spinnerEl.classList.remove("d-none");
    jokeTextEl.classList.add("d-none");
    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinnerEl.classList.add("d-none");
            jokeTextEl.classList.remove("d-none");

            jokeTextEl.textContent = jsonData.value;
        });
}

jokeBtnEl.addEventListener("click", processData);