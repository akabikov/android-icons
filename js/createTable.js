import table from "./content.js";

const container = document.querySelector(".container");
const columnSequence = ["title", "icon", "name", "descr"];
const iconsClass = "material-icons";

table.forEach(element => {

    columnSequence.forEach(field => {
        if (!element[field]) return;

        const div = document.createElement("div");
        div.textContent = element[field];
        container.appendChild(div);

        div.classList.add("cell", field);
        if (field === "icon") {
            div.classList.add(iconsClass);
        }
    });
});
