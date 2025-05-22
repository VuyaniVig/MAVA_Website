  
  document.addEventListener("DOMContentLoaded", function () {
    const rotatingWord = document.getElementById("rotating-word");
    const words = ["clean", "affordable"];
    let index = 0;

    setInterval(() => {
      index = (index + 1) % words.length;
      rotatingWord.textContent = words[index];
    }, 2000);
  });
    
    document.addEventListener("DOMContentLoaded", function () {
  const rotatingWord = document.getElementById("rotating-word");
  const words = ["clean", "affordable"];
  let index = 0;

  setInterval(() => {
    rotatingWord.style.opacity = 0;
    setTimeout(() => {
      index = (index + 1) % words.length;
      rotatingWord.textContent = words[index];
      rotatingWord.style.opacity = 1;
    }, 300);
  }, 2000);
});



  document.getElementById('toggle-text-btn').addEventListener('click', function (e) {
    e.preventDefault(); // prevent page jump
    const moreText = document.getElementById('more-text');
    const isVisible = moreText.style.display === 'block';

    moreText.style.display = isVisible ? 'none' : 'block';
    this.textContent = isVisible ? 'Read More' : 'Read Less';
    this.setAttribute('aria-expanded', !isVisible);
  });


  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleBtn.setAttribute('aria-expanded', !expanded);
  });
