const seeMenuBtn = document.getElementById("seeMenuBtn");
const seeMenuSection = document.getElementById("seeMenuSection");
const closeBtn = document.getElementById("closeButton");

seeMenuBtn.addEventListener ('click', function() {
    seeMenuSection.classList.remove('hidden');
});
closeBtn.addEventListener ('click', function() {
    seeMenuSection.classList.add('hidden');
})
    

