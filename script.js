console.log("JavaScript is connected!");
filterSelection("all");

function filterSelection(category) {
    let items = document.getElementsByClassName("gallery-item");

    for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("show");

        if (category === "all" || items[i].classList.contains(category)) {
            items[i].classList.add("show");
        }
    }
}