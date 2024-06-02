//sports progress 1
const sportsProgress_saveProgress = document.getElementById("save-progress")

const sportsProgress_x_1 = document.getElementById("popup-sports-progress-card-close-button-1")
const sportsProgress_x_2 = document.getElementById("popup-sports-progress-card-close-button-2")
const sportsProgress_x_3 = document.getElementById("popup-sports-progress-card-close-button-3")

const sportsProgress_card_1 = document.getElementById("popup-sports-progress-1")
const sportsProgress_card_2 = document.getElementById("popup-sports-progress-2")
const sportsProgress_card_3 = document.getElementById("popup-sports-progress-3")

const sportsProgress_next_1 = document.getElementById("popup-sports-progress-card-form-button-1")
const sportsProgress_next_2 = document.getElementById("popup-sports-progress-card-form-button-2")

console.log(sportsProgress_saveProgress);
console.log(sportsProgress_x_1);
console.log(sportsProgress_card_1);
console.log(sportsProgress_card_2);

sportsProgress_saveProgress.addEventListener("click", function() {
    sportsProgress_card_1.setAttribute('style','display:flex;')  
})

sportsProgress_x_1.addEventListener("click", function() {
    sportsProgress_card_1.setAttribute('style','display:none;')
})
sportsProgress_x_2.addEventListener("click", function() {
    sportsProgress_card_2.setAttribute('style','display:none;')
})
sportsProgress_x_3.addEventListener("click", function() {
    sportsProgress_card_3.setAttribute('style','display:none;')
})

sportsProgress_next_1.addEventListener("click", function() {
    sportsProgress_card_1.setAttribute('style','display:none;')
    sportsProgress_card_2.setAttribute('style','display:flex;')
})

sportsProgress_next_2.addEventListener("click", function() {
    sportsProgress_card_2.setAttribute('style','display:none;')
    sportsProgress_card_3.setAttribute('style','display:flex;')
})

sportsProgress_next_3.addEventListener("click", function() {
    sportsProgress_card_3.setAttribute('style','display:none;')
})


