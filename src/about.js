import bannerImage from "/home/odinstudent/odinprojects/repos/restaurant-page/assets/tea-solo.png";

export function about() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("container");

    const textBubble1 = document.createElement("div");
    textBubble1.classList.add("text-bubble");
    const h1Title = document.createElement("h1");
    h1Title.textContent = "About";
    const aboutText1 = document.createElement("p");
    aboutText1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar tellus aliquet pulvinar commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut ultrices vulputate magna sed mattis.";
    const aboutText2 = document.createElement("p");
    aboutText2.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar tellus aliquet pulvinar commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut ultrices vulputate magna sed mattis.";

    const textBubble2 = document.createElement("div");
    textBubble2.classList.add("text-bubble");
    const h2Contact = document.createElement("h2");
    h2Contact.textContent = "Contact";
    const contactText1 = document.createElement("p");
    contactText1.textContent = "Phone: 555-555-5555"
    const contactText2 = document.createElement("p");
    contactText2.textContent = "Email: bubbleteashop@email.com";

    const banner = document.createElement("div");
    banner.classList.add("banner")
    const image = document.createElement("img");
    image.src = bannerImage;

    content.appendChild(container);
    container.appendChild(textBubble1);
    textBubble1.appendChild(h1Title);
    textBubble1.appendChild(aboutText1);
    textBubble1.appendChild(aboutText2);

    container.appendChild(textBubble2);
    textBubble2.appendChild(h2Contact);
    textBubble2.appendChild(contactText1);
    textBubble2.appendChild(contactText2);

    container.appendChild(banner);
    banner.appendChild(image);
}