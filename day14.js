//
document.getElementById('post').textContent = 'My first project on grasshopper'
document.getElementById('description').textContent = 'i am building my first webpage using grasshopper tutorial.'
let details = document.getElementById('details')
details.textContent = " this is so cool"

let button1 = document.getElementById('button1');

button1.addEventListener('click', () => {
    button1.textContent = 'Clicked!';
});

let button2 = document,getElementById('button2');

button2.addEventListener('click', () =>{
    button2.textContent = 'Clicked';
});

let pic1 = '../../static/images/poolPup.jpg';
let pic2 = '../../static/images/giraffe.jpg';
let img = document.getElementById('pic');
//creating a new element
let newParagraph = document.createElement('p');
newParagraph.textContent = "hello"
console.log(newParagraph.textContent);
//using arrow functions and event listeners.
button1.addEventListener('click', ()=>{
    img.src = pic1;
})
button2.addEventListener('click', ()=>{
    img.src = pic2;
})
//appendChild method
let paragraph = document.createElement('p');
document.body.appendChild(paragraph);
//<boby><p></p><body>

//working to add a picture.
let picture = document.createElement('img');
picture.src = '../../static/images/sfDog.jpg'
let text1 = document.createElement('p');
text1.textContent = 'i am  a good boy'
let text2 = document.createElement('p')
text2.textContent = 'i like my chew toy';
document.body.appendChild(picture);
document.body.appendChild(text1);