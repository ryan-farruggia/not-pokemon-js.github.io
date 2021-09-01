let venusaur = document.getElementById("venusaurButton");
let charizard = document.getElementById("charizardButton");
let blastoise = document.getElementById("blastoiseButton");

venusaur.addEventListener('click', event => {
    window.location.href = "not-venusaur.html";
});

charizard.addEventListener('click', event => {
    window.location.href = "not-charizard.html";
});

blastoise.addEventListener('click', event => {
    window.location.href = "not-blastoise.html";
});