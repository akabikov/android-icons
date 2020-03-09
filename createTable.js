(async () => {
    const container = document.querySelector(".container");
    const columnOrder = ["title", "icon", "name", "descr"];
    const iconsClass = "material-icons";
    let table;

    try {
        const response = await fetch("./content.json");
        if (response.ok) {
            table = await response.json();
        } else {
            throw new Error(response.status);
        }
    } catch (error) {
        container.textContent = "Can't load data";
        throw error;
    }

    table.forEach(element => {

        columnOrder.forEach(field => {
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
})();
