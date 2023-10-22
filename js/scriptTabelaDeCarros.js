// menu hamburguer 
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menuToggle2 = document.getElementById('menuToggle2');
    const navList = document.querySelector('.nav_list');


    menuToggle.addEventListener('click', function () {
        menuToggle.classList.toggle('active');
        menuToggle2.classList.toggle('active')
        navList.classList.toggle('active');
    });


    menuToggle2.addEventListener('click', () => {
        navList.classList.toggle('active')
        menuToggle.classList.toggle('active');
        menuToggle2.classList.toggle('active')


    })


});