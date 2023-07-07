document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
  
        sections.forEach(section => {
          section.style.display = 'none';
        });
        targetSection.style.display = 'block';
      });
    });
  
    const slideshow = document.querySelector('.slideshow');
    const images = slideshow.getElementsByTagName('img');
    let currentIndex = 0;
    const intervalTime = 2000;
  
    const changeImage = () => {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    };
  
    setInterval(changeImage, intervalTime);
  
    // Add this line to show the Home section by default
    document.getElementById('home').style.display = 'block';
  });
  