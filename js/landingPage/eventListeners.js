// File that implements multiple event listeners

// Helper Functions
function scrollToElement(elementId){
  const element = document.getElementById(elementId);
  const navbar = document.getElementById("navbar");
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - (navbar.clientHeight + 10),
    behavior: "smooth"
  });
}

// Variables
const sectionIds = ['about-section', 'social-media-section', 'research-section', 'open-source-section', 'contact-section'];

// Event Listeners
sectionIds.forEach( (sectionId) => {
  document.getElementById(sectionId+"-button").addEventListener("click", function() {
    scrollToElement(sectionId);
  }, false);
});