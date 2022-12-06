const nav_links = document.querySelectorAll(".navigation__link");
const nav_check = document.querySelector(".navigation__checkbox");
const popup = document.getElementById("popup");

for (const nav_link of nav_links) {
    nav_link.addEventListener("click", () => nav_check.checked = false);
}

popup.addEventListener("click", () => window.location.href = "index.html#section-tours");