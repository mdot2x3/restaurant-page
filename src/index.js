import "./style.css";
import { home } from "./home";
import { menu } from "./menu";

// navbar li background image
document.addEventListener("DOMContentLoaded", function() {
    const listItems = document.querySelectorAll("nav ul li");

    listItems.forEach(item => {
        item.addEventListener("click", function() {
            listItems.forEach(i => i.classList.remove("selected"));

            this.classList.add("selected");
        });
    });
});

//home();
menu();