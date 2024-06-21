const profile_detail_edit_button = document.getElementById('profile-detail-edit-button')
const profile_detail_edit_action = document.querySelectorAll('.profile-detail-edit-action')

console.log(profile_detail_edit_button)
console.log(profile_detail_edit_action)


 profile_detail_edit_button.addEventListener("click", function() {


    profile_detail_edit_action.forEach(element => {
        element.removeAttribute("disabled"); 
        setTimeout(function() {
            profile_detail_edit_button.setAttribute("type", "submit");
            profile_detail_edit_button.setAttribute('style','background-color:green;')
          }, 100);
    });
    
})