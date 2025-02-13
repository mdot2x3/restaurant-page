import "./style.css";
import { home } from "./home";
import { menu } from "./menu";
import { about } from "./about";

// load home content on launch
document.addEventListener("DOMContentLoaded", () => {
    home();
});

// nav bar page loader logic
document.querySelector("nav").addEventListener("click", (event) => {
    const content = document.querySelector("#content");

    // if clicked target in the nav bar is an li element
    if (event.target.tagName === "LI") {
        // select all li elements, remove selected class, and add selected class to the target
        const listItems = document.querySelectorAll("nav ul li");
        listItems.forEach(i => i.classList.remove("selected"));
        event.target.classList.add("selected");
        
        // clear the content section
        content.innerHTML = "";

        // set the content section of the clicked on li's string
        switch (event.target.textContent) {
            case "Home":
                home();
                break;
            case "Menu":
                menu();
                break;
            case "About":
                about();
                break;
        }
    }
});