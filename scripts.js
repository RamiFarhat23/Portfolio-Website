document.addEventListener('DOMContentLoaded', function () {
    // Words for the typing effect
    const words = ['Software Developer', 'Student', 'Passionate Learner', 'Tech Enthusiast'];
  
    // Typed.js initialization
    const options = {
      strings: words,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
    };
  
    const typed = new Typed('#typed-output', options);

    const scrollDownArrow = document.querySelector('#scroll-down a');
  
    scrollDownArrow.addEventListener('click', function (event) {
      event.preventDefault();
      const experiencesSection = document.getElementById('experiences');
      experiencesSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
