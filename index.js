const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.getElementById('navbar');

hamburgerMenu.addEventListener('click', function(e){
  
  nav.classList.toggle('show');

  if(nav.classList.contains('show')){
    e.target.src = "images/icon-close.svg"
  } else{
    e.target.src = "images/icon-hamburger.svg"
  }

})