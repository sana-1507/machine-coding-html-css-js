let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener('click',() => {
    slider.classList.add("moveSlider");
     formSection.classList.add("form-section-move")
})

login.addEventListener('click',() => {
    slider.classList.remove("moveSlider");
    formSection.classList.remove("form-section-move")
})