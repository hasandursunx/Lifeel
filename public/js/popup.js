const  allergenic_food_card_close = document.querySelector(".popup-allergenic-foods-card-close-button")
const  popup_allergenic_foods = document.querySelector(".popup-allergenic-foods")
const allergenic_food_card_open = document.getElementById("main-profile-information-bot-card-last")


allergenic_food_card_open.addEventListener("click", function() {
    popup_allergenic_foods.setAttribute('style','display:flex;')  
})
allergenic_food_card_close.addEventListener("click", function() {
    popup_allergenic_foods.setAttribute('style','display:none;')
})




// Hobi ve aktivite ekle

const hobbyAndActivities_plus = document.getElementById("main-profile-information-mid-card-last")
const hobbyAndActivities_x = document.querySelector(".popup-hobby-and-activities-card-close-button")
const hobbyAndActivities_card = document.querySelector(".popup-hobby-and-activities")

console.log(hobbyAndActivities_plus);
console.log(hobbyAndActivities_x);
console.log(hobbyAndActivities_card);


hobbyAndActivities_plus.addEventListener("click", function() {
    hobbyAndActivities_card.setAttribute('style','display:flex;')  
})

hobbyAndActivities_x.addEventListener("click", function() {
    hobbyAndActivities_card.setAttribute('style','display:none;')
})


