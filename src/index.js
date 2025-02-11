import "./style.css";

// alert("This works.");
// console.log("This also works.");

// apply background image to selected nav bar li button
document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("nav ul li");

    listItems.forEach(item => {
        item.addEventListener("click", function() {
            listItems.forEach(i => i.classList.remove("selected"));

            this.classList.add("selected");
        });
    });
});