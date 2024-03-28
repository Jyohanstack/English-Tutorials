const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navListLi = document.querySelectorAll(".nav-list li");


hamburger.addEventListener("click",() => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");

    navListLi.forEach((li) => {
      li.style.transition = "opacity 0.5s";
      li.addEventListener("click", () => {
        navList.classList.remove("active");
        navListLi.forEach((li) => {
          li.style.opacity = 1;
        });
      });
    });

    navList.addEventListener("click", () => {
      navList.classList.remove("active");
      navListLi.forEach((li) => {
        li.style.opacity = 1;
      });
    });
});