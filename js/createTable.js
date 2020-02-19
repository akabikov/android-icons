(async () => {
    const container = document.querySelector(".container");
    const columnSequence = ["title", "icon", "name", "descr"];
    const iconsClass = "material-icons";
    let table;

    try {
        const response = await fetch("../content.json");
        if (response.ok) {
            table = await response.json();
        } else {
            container.textContent = "Не удалось загрузить данные";
            throw new Error(response.status);
        }
    } catch (error) {
        throw error;
    }

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
})();
