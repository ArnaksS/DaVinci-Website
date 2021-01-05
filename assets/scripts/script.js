window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

const navigation = document.querySelector('.navigation');
const menuToggle = document.querySelector('.menuToggle');
menuToggle.addEventListener('click', toggleMenu);