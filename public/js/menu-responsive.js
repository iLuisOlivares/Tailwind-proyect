const button = document.querySelector('#responsive-menu');
const menu = document.querySelector('.responsive-links');
button.addEventListener('click', (event)=>{

    menu.classList.toggle('hidden');

});