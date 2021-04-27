const mainNavigation = document.querySelector('.main-navigation');
const overlay = mainNavigation.querySelector('.overlay');
const toggler = mainNavigation.querySelector('.navbar-toggler');

const openSideNav = () => mainNavigation.classList.add("active");
const closeSideNav = () => mainNavigation.classList.remove('active');

toggler.addEventListener("click", openSideNav);
overlay.addEventListener("click", closeSideNav);

document.addEventListener("swiped-left", openSideNav);
document.addEventListener("swiped-right", closeSideNav);