const essayIds = ["1", "2", "3", "4", "5"];

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 * https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function randomPosition(ids){

  ids.forEach( id => {
    let element = document.getElementById(id).style;
    const padding = 300;//prevents them from flying right to the edge

    element.top = getRandomInt(padding, windowHeight - padding) + "px";
    element.left = getRandomInt(padding, windowWidth - padding) + "px";
  });
}

setInterval(randomPosition, 3000, essayIds);