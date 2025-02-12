import bannerImage from "/home/odinstudent/odinprojects/repos/restaurant-page/assets/girl2.jpg";

export function menu() {
const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("container");

    const banner = document.createElement("div");
    banner.classList.add("banner");

    const image = document.createElement("img");
    image.src = bannerImage;

    const textBubble1 = document.createElement("div");
    textBubble1.classList.add("text-bubble");
    const h1Title = document.createElement("h1");
    h1Title.textContent = "Menu";
    const introText = document.createElement("p");
    introText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.";

    const textBubble2 = document.createElement("div");
    textBubble2.classList.add("text-bubble");
    const h2MilkTea = document.createElement("h2");
    h2MilkTea.textContent = "Milk Tea";
    const table1 = document.createElement("table");
        const milkTeaItems = [
            {name: "Classic", price: "$5"},
            {name: "Thai", price: "$6"},
            { name: "Honey", price: "$7" },
            { name: "Taro", price: "$8" },
            { name: "Matcha", price: "$9" },
            { name: "Ginger", price: "$10" },
            { name: "Jasmine", price: "$11" }
        ];
        milkTeaItems.forEach(item => {
            const tr = document.createElement("tr");

            const tdName = document.createElement("td");
            tdName.textContent = item.name;

            const tdPrice = document.createElement("td");
            tdPrice.classList.add("price");
            tdPrice.textContent = item.price;

            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            table1.appendChild(tr);
        });

        const textBubble3 = document.createElement("div");
        textBubble3.classList.add("text-bubble");
        const h2AddIns = document.createElement("h2");
        h2AddIns.textContent = "Ad-Ins";
        const table2 = document.createElement("table");
            const addInsItems = [
                { name:"Boba", price:"$1"},
                { name:"Aloe Vera", price:"$2"},
                { name:"Jelly", price:"$3"},
                { name:"Red Bean", price:"$4"},
                { name:"Pudding", price:"$5"}
            ];
            addInsItems.forEach(item => {
                const tr = document.createElement("tr");

                const tdName = document.createElement("td");
                tdName.textContent = item.name;

                const tdPrice = document.createElement("td");
                tdPrice.classList.add("price");
                tdPrice.textContent = item.price;

                tr.appendChild(tdName);
                tr.appendChild(tdPrice);
                table2.appendChild(tr);
            });


    content.appendChild(container);
    container.appendChild(banner);
    banner.appendChild(image);

    container.appendChild(textBubble1);
    textBubble1.appendChild(h1Title);
    textBubble1.appendChild(introText);

    container.appendChild(textBubble2);
    textBubble2.appendChild(h2MilkTea);
    textBubble2.appendChild(table1);

    container.appendChild(textBubble3);
    textBubble3.appendChild(h2AddIns);
    textBubble3.appendChild(table2);
}