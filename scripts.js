const effects = document.querySelectorAll(".card");
function hoverToggle(){

    if (effects[0].classList.contains("hover-off")){
        effects.forEach(element => {
            element.classList.remove("hover-off");
        });
    }else {
        effects.forEach(element => {
            element.classList.add("hover-off");
        });
    }
}
const button = document.getElementById("hover-toggle");
button.addEventListener("click", hoverToggle);