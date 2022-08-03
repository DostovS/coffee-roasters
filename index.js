const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});
sr.reveal(`.hero-content, .type:nth-child(2), .quality-content, .works-column:nth-child(2)`, {
  interval: 200
});
const leftReveal = ScrollReveal({
  origin: 'left',
  distance: '20px',
  duration: 2000,
  reset: true
})
leftReveal.reveal(`.left, .type:nth-child(1), .works-column:last-child`, {
  interval: 200
});
const rightReveal = ScrollReveal({
  origin: 'right',
  distance: '20px',
  duration: 2000,
  reset: true
})
rightReveal.reveal(`.right, .type:nth-child(3), .works-column:first-child`, {
  interval: 200
});
const hamburger = document.querySelector(".hamburger");
const aside = document.querySelector('aside');
const asideTheme = document.querySelector('aside .bx-moon');
hamburger.onclick = function() {
  aside.classList.toggle('asideOpen')
}
asideTheme.onclick = function() {
  asideTheme.classList.toggle('bx-moon');
  asideTheme.classList.toggle('bxs-sun');
  body.classList.toggle('active')
}
const darkIcon = document.querySelector('.bx-moon');
const body = document.querySelector('body');
darkIcon.onclick = function() {
  darkIcon.classList.toggle('bx-moon');
  darkIcon.classList.toggle('bxs-sun');
  body.classList.toggle('active')
}
const closeSidebar = document.querySelector('.bxs-home-alt-2');
closeSidebar.onclick = function() {
  aside.classList.remove('asideOpen')
  aside.classList.toggle('close');
}

function scrollHeader() {
  const nav = document.querySelector('header');

  if(this.scrollY > 200) {
    nav.classList.add('scroll-header')
  } else {
    nav.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);
window.onscroll = function() {myFunction()};

function myFunction() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}