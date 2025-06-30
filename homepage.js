document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.banner-slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.arrow.left');
  const nextBtn = document.querySelector('.arrow.right');
  let currentIndex = 0;
  
  function showSlide(index) {
    if (index < 0) {
      currentIndex = slides.length - 1;
    } else if (index >= slides.length) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    const offset = -currentIndex * 100;
    const bannerHighlights = document.querySelector('.banner-highlights');
    bannerHighlights.computedStyleMap.transform = translateX(${offset}%);
    dots.forEach((dot, i) => {
      if(i === currentIndex) dot.classList.add('active');
      else dot.classList.remove('active');
    });
  }
  
  prevBtn.addEventListener('click', () => {
    showSlide(currentIndex - 1);
  });
  
  nextBtn.addEventListener('click', () => {
    showSlide(currentIndex + 1);
  });
  
  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
    });
  });
  
  showSlide(currentIndex);
  
  
  const navLinks = document.querySelectorAll('.nav-bar > a');
  const dropdownLinks = document.querySelectorAll('.dropdown-content > a');
  
  function clearActiveNav() {
    navLinks.forEach(link => link.classList.remove('active'));
    dropdownLinks.forEach(link => link.classList.remove('active'));
  }
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if(link.getAttribute('href') === '#') {
        e.preventDefault();
      }
      clearActiveNav();
      link.classList.add('active');
    });
  });
  
  dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      if(link.getAttribute('href') === '#') {
        e.preventDefault();
      }
      clearActiveNav();
      link.classList.add('active');
    });
  });
  
  
  const dropdown = document.querySelector('.dropdown');
  if(dropdown){
    const dropdownToggle = dropdown.querySelector('a');
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownToggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdownContent.classList.toggle('open');
    });
    
    document.addEventListener('click', (e) => {
      if(!dropdown.contains(e.target)){
        dropdownContent.classList.remove('open');
      }
    });
  }
});
