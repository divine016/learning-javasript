let location = 30;
let sizes = [
  15,
  20,
  30,
  ___
];
function buildSnowman(___) {
  for (let element of sizes) {
    svg.append('circle').attr('r', element).attr('cx', 60).attr('cy', location).attr('fill', 'white');
    location += element * 2;
  }
};
button.on('click', buildSnowman);


//create an svg drawing from data stored in an array of objects

YOUR CODE
This is where you type your code

This is where the editor flags potential errors. You can hover over an icon to get more information.

var arrayOfPlaces = [
  {
    name: 'mall',
    x: 240,
    y: 160,
    color: red,
  },
  {
    name: 'home',
    x: 50,
    y: 70,
    color: blue,
  },
  {
    name: 'gym',
    x: 100,
    y: 140,
    color: yellow,
  },
  {
    name: 'work',
    x: 180,
    y: 30,
    color: white,
  },

];
function drawOnMap(x, y, color, ___) {
  let newPoint = svg.append('circle').attr('r', 8);
  newPoint.attr('cx', x).attr('cy', y).attr('fill', color);
};
for (var place of arrayOfPlaces) {

}


//debugging try...catch statements
let recipe = {
    name: 'potatoes',
    rating: 5
};
try{
    console.log('next recipe');
    console.log('Name:' + recip.name);
    console.log('Rating' + recipe.rating + " star");
}
catch(e){
    console.log(e);
}