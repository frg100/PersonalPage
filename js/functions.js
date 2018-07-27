// Variables
var mainPath = "https://web.stanford.edu/~frg100/";

// Functions
function changeImage(){
  if(document.getElementById('profilePicture').src == mainPath + 'images/stanford_profile_picture.jpg'){
      document.getElementById('profilePicture').src = mainPath + 'images/facebook_profile_picture.jpg';
  }else if(document.getElementById('profilePicture').src == mainPath + 'images/facebook_profile_picture.jpg'){
      document.getElementById('profilePicture').src = mainPath + 'images/stanford_profile_picture.jpg';
  }
}