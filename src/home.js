import bannerImage from "/home/odinstudent/odinprojects/repos/restaurant-page/assets/girl1.jpg";

export function home() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("container");

    const banner = document.createElement("div");
    banner.classList.add("banner");
    const image = document.createElement("img");
    image.src = bannerImage;

    const textBubble1 = document.createElement("div");
    textBubble1.classList.add("text-bubble");
    const h2Title = document.createElement("h2");
    h2Title.textContent = "Welcome to";
    const h1Title = document.createElement("h1");
    h1Title.textContent = "Bubble Tea Shop";
    const introText = document.createElement("p");
    introText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer pulvinar tellus aliquet pulvinar commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut ultrices vulputate magna sed mattis."

    const textBubble2 = document.createElement("div");
    textBubble2.classList.add("text-bubble");
    const h2Hours = document.createElement("h2");
    h2Hours.textContent = "Hours";
    const ulSchedule = document.createElement("ul");
    const liTimeMon = document.createElement("li");
    liTimeMon.textContent = "Monday: 6am - 6pm"
    const liTimeTue = document.createElement("li");
    liTimeTue.textContent = "Tuesday: 6am - 6pm"
    const liTimeWed = document.createElement("li");
    liTimeWed.textContent = "Wednesday: 6am - 6pm"
    const liTimeThu = document.createElement("li");
    liTimeThu.textContent = "Thursday: 6am - 10pm"
    const liTimeFri = document.createElement("li");
    liTimeFri.textContent = "Friday: 6am - 10pm"
    const liTimeSat = document.createElement("li");
    liTimeSat.textContent = "Saturday: 8am - 10pm"
    const liTimeSun = document.createElement("li");
    liTimeSun.textContent = "Sunday: 8am - 8pm";

    const textBubble3 = document.createElement("div");
    textBubble3.classList.add("text-bubble");
    const h2Location = document.createElement("h2");
    h2Location.textContent = "Location";
    const locationText = document.createElement("p");
    locationText.textContent = "800 N Broadway, Los Angeles, CA 90012";

    content.appendChild(container);
    container.appendChild(banner);
    banner.appendChild(image);

    container.appendChild(textBubble1);
    textBubble1.appendChild(h2Title);
    textBubble1.appendChild(h1Title);
    textBubble1.appendChild(introText);

    container.appendChild(textBubble2);
    textBubble2.appendChild(h2Hours);
    ulSchedule.appendChild(liTimeMon);
    ulSchedule.appendChild(liTimeTue);
    ulSchedule.appendChild(liTimeWed);
    ulSchedule.appendChild(liTimeThu);
    ulSchedule.appendChild(liTimeFri);
    ulSchedule.appendChild(liTimeSat);
    ulSchedule.appendChild(liTimeSun);
    textBubble2.appendChild(ulSchedule);

    container.appendChild(textBubble3);
    textBubble3.appendChild(h2Location);
    textBubble3.appendChild(locationText);
}