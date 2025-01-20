// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Function to add the 'visible' class to elements that are in the viewport
function handleScroll() {
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    if (isInViewport(section)) {
      section.classList.add('visible');
    }
  });
}

// Listen for scroll events and trigger the animation
window.addEventListener('scroll', handleScroll);

// Trigger the function once to check if any sections are already in view
handleScroll();
