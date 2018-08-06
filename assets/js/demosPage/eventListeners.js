// File that implements multiple event listeners

// Helper Functions
function scrollToElement(elementId){
  const element = document.getElementById(elementId);
  const navbar = document.getElementById("demo-page-navbar");
  const offset = {
    'demo-about-section': 0,
    'future-bass-section': 50,
    'electronic-rnb-section': 0,
    'rnb-section': 20,
    'you-ep-section': 70 
  }
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - (navbar.clientHeight - 90 + offset[elementId]),
    behavior: "smooth"
  });
}

// Variables
const sectionIds = ['demo-about-section', 'future-bass-section', 'electronic-rnb-section', 'rnb-section', 'you-ep-section'];

// Event Listeners
sectionIds.forEach( (sectionId) => {
  document.getElementById(sectionId+"-button").addEventListener("click", function() {
    scrollToElement(sectionId);
  }, false);
});