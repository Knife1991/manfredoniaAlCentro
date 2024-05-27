// JS BOTTONE BACK ON TOP

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', function() {
  var scrollBtn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = "block";
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.style.display = "none";
    scrollBtn.classList.remove('show');
  }
});


