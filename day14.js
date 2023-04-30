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

button1.addEventListener('click', ()=>{
    img.src = pic1;
})
button2.addEventListener('click', ()=>{
    img.src = pic2;
})