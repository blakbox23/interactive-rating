
const card = document.getElementById("main-card");
const form = document.getElementById("rating-form");
const modal = document.getElementById("card-2");
const rated = document.getElementById("rated");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    modal.style.display = "block";
    card.style.display = "none";
    const data = new FormData(form);
    for (const [name,value] of data) {
        rated.innerText = value
    }
    e.preventDefault();
});

