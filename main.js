const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggDesktopMenu);
function toggDesktopMenu(){
    console.log('JS FUNCIONANDO')
    desktopMenu.classList.toggle('Inactive');

}
console.log('funcionando');

// classList.toggle esta clase desaparece o no siempre y cuando le hasgas click o no
// actualizando 