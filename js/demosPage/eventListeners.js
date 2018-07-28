// File that implements multiple event listeners

// Helper Functions
function scrollToElement(elementId){
  const element = document.getElementById(elementId);
  const navbar = document.getElementById("demo-page-navbar");
  window.scrollTo({
    top: element.getBoundingClientRect().top + window.scrollY - (navbar.clientHeight - 90),
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