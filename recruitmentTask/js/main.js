const ul = document.querySelector("ul");
const btnAdd = document.querySelector(".add");
const btnRemove = document.querySelector(".remove");
const btnClear = document.querySelector(".clear");

btnAdd.addEventListener("click", () => {
    const li = document.createElement("li");
    ul.appendChild(li);
    let taskNumb = ul.children.length;
    li.textContent = `Task number ${taskNumb}.`
});

btnRemove.addEventListener("click", () => {
    if (ul.hasChildNodes()) {
        ul.removeChild(ul.lastChild);
    }
});

btnClear.addEventListener("click", () => {
    ul.textContent = "";
});


