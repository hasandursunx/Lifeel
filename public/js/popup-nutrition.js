const popupCard_open = document.getElementById("main-nutrition-programs-card-bottom-part")

const popupCard_1 = document.getElementById("popup-nutrition-progress-1")
const popupCard_2 = document.getElementById("popup-nutrition-progress-2")
const popupCard_3 = document.getElementById("popup-nutrition-progress-3")
const popupCard_4 = document.getElementById("popup-nutrition-progress-4")


const popupCard_close_1 = document.getElementById("popup-nutrition-progress-card-close-1")
const popupCard_close_2 = document.getElementById("popup-nutrition-progress-card-close-2")
const popupCard_close_3 = document.getElementById("popup-nutrition-progress-card-close-3")
const popupCard_close_4 = document.getElementById("popup-nutrition-progress-card-close-4")


const popupCard_next_1 = document.getElementById("popup-nutrition-progress-card-button-next-1")
const popupCard_next_2 = document.getElementById("popup-nutrition-progress-card-button-next-2")
const popupCard_next_3 = document.getElementById("popup-nutrition-progress-card-button-next-3")



// popup 1 aç
popupCard_open.addEventListener("click", function() {
    popupCard_1.setAttribute('style','display:flex;')  
})

// 1. popup  kapat
popupCard_close_1.addEventListener("click", function() {
    popupCard_1.setAttribute('style','display:none;')  
})


// 2. popup aç
popupCard_next_1.addEventListener("click", function() {
    popupCard_1.setAttribute('style','display:none;') 
    popupCard_2.setAttribute('style','display:flex;') 
})


// 2. popup  kapat
popupCard_close_2.addEventListener("click", function() {
    popupCard_2.setAttribute('style','display:none;')  
})


// 3. popup aç
popupCard_next_2.addEventListener("click", function() {
    popupCard_2.setAttribute('style','display:none;') 
    popupCard_3.setAttribute('style','display:flex;') 
})


// 3. popup  kapat
popupCard_close_3.addEventListener("click", function() {
    popupCard_3.setAttribute('style','display:none;')  
})


// 4. popup aç
popupCard_next_3.addEventListener("click", function() {
    popupCard_3.setAttribute('style','display:none;') 
    popupCard_4.setAttribute('style','display:flex;') 
})


// 4. popup  kapat
popupCard_close_4.addEventListener("click", function() {
    popupCard_4.setAttribute('style','display:none;')  
})


