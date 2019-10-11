// First solution
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


// Second solution with jQuery

// $(function(){
//     const $ul = $("ul");
//     const $btnAdd = $(".add");
//     const $btnRemove = $(".remove");
//     const $btnClear = $(".clear");

//     $btnAdd.on("click", function(){
//         const $li = $('<li></li>')
//         $ul.append($li);
//         let $taskNumb = $ul.children().length;
//         $li.text(`Task number ${$taskNumb}.`)
//     });

//     $btnRemove.on("click", function(){
//         $("ul li:last-child").remove();
//     });

//     $btnClear.on("click", function(){
//         $ul.empty();
//     });
// });
