//a function that changes the color of a circle when it is beign clicked on
circle.attr('fill','black');
function changeColor(){
    circle.attr('fill', 'white')
}
circle.on('click', changeColor)

//a function that takes an parameter color and when the function is calles it draws a shape with the color being passed into the function when called 
function drawSquare(color, ___) {
    square.attr('width', 30).attr('height', 30).attr('x', 30).attr('y', 0).attr('fill', color);
  };
drawSquare('green')

//a function that removes a dropper and bacteria when clicked on.
function removeDropper(___) {
    dropper.remove();
  };
  function cure(___) {
    bacteria.remove();
    ___
  };
  dropper.on('click', removeDropper);
  bacteria.on('click', cure);

//
let circle = svg.append('circle').attr('r',100).attr('fill','red');
let rectangle = svg.append('rect');
function removeCircle(){
    circle.remove()
}