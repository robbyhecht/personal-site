(function() {
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('#'+burger.dataset.target);
  burger.addEventListener('click', function() {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
  });
})();

window.onscroll = function changeClass() { 
  let scrolling = window.pageYOffset | document.body.scrollTop
  if (scrolling > 500) {
      document.getElementById('mynav').classList.add("has-background-black")
  } 
  else {
      document.getElementById('mynav').classList.remove("has-background-black")
  }
}

