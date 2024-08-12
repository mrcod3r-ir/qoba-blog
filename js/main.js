// Equalizing the top sidebar with the height of the hero
let hero = document.querySelector('#hero-container');
let sidebar = document.getElementById('sidebar');
let sidetop = `calc(5 + ${hero.offsetHeight})`;
sidebar.style.top = `${sidetop}px`;
// Proportioning the size of the sidebar to the amount the user scrolls down the page
window.addEventListener('scroll', function() {
    let sidebar = document.getElementById('sidebar');
    let item1 = document.querySelector('#hero');
    let item1Bottom = item1.getBoundingClientRect().bottom;
    let scrollY = window.scrollY;
    // When the user is down enough to not see the hero, the height of the sidebar will be the same as the whole screen
    if (item1Bottom <= 0) {
        sidebar.style.height = '100vh';
        sidebar.style.top = '0';
    }
    // When the user is lowered enough to see the hero, the height of the sidebar will increase by the lowered amount
    else {
        sidebar.style.height = `calc(100% - 32rem + ${scrollY}px)`; /* Adjust this value based on the height of the first item */
        sidebar.style.top = `calc(32rem - ${scrollY}px)`; /* Adjust this value based on the height of the first item */
    }
});