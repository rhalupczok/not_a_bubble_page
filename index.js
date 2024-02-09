const navbarBtn = document.querySelector(".navbar__button");

// add the background to navbar when page is scrolled
const navBarBg = (e) => {
    const header = document.querySelector(".header");
    const navbar = document.querySelector(".navbar");
    const headerRectY = header?.getBoundingClientRect().y;
    headerRectY < -50
        ? navbar.classList.add("navbvar--bg")
        : navbar.classList.remove("navbvar--bg");
};

// show menu
const toggleMenu = () => {
    const navbarList = document.querySelector(".navbar__list");
    navbarList?.classList.toggle("navbar__list--isShow");
};

// event listeners
document.addEventListener("scroll", navBarBg);
navbarBtn?.addEventListener("click", toggleMenu);
