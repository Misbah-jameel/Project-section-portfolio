// Function to check if the element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }
  
  // Add class 'show' when projects come into the viewport
  function handleScroll() {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
      if (isInViewport(project)) {
        project.classList.add('show');
      }
    });
  }
  // Event listener to trigger handleScroll on scroll
  window.addEventListener('scroll', handleScroll);
  