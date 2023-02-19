const hamburger = document.querySelector('.fa-bars');
const cancel = document.querySelector('#cancel');
// const homepage = document.querySelector('#home-page');
// const aboutpage = document.querySelector('#about-page');
const PopupMenu = document.querySelector('#pop-up-menu-wrapper');
const navmenulistitems = document.querySelectorAll('.pop-up-li');
const hiddenPeople = document.querySelector('.right');
const morebutton = document.querySelector('.more-button');

function display() {
  PopupMenu.style.display = 'block';
}

function hide() {
  PopupMenu.style.display = 'none';
}

function showupMore() {
  hiddenPeople.style.display = 'inherit';
  morebutton.style.display = 'none';
}

cancel.addEventListener('click', hide);
hamburger.addEventListener('click', display);
for (let i = 0; i < navmenulistitems.length; i += 1) {
  navmenulistitems[i].addEventListener('click', hide());
}
morebutton.addEventListener('click', showupMore);