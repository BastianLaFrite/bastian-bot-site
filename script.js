const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Affiche ou cache le bouton selon la position du scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

// Au clic, remonte doucement en haut
scrollToTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
