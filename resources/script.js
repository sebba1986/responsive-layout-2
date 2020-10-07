const seeMenuBtn = document.getElementById("seeMenuBtn");
const seeMenuSection = document.getElementById("seeMenuSection");
const closeBtn = document.getElementById("closeButton");

seeMenuBtn.addEventListener ('click', function() {
    console.log('click');
    seeMenuSection.classList.remove('hidden');
});
    

