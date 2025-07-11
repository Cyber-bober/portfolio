// Динамический год в футере
document.querySelector('footer p').innerHTML = 
  document.querySelector('footer p').innerHTML.replace("{{year}}", new Date().getFullYear());

// Плавная прокрутка к якорям
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});