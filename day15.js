//more on append and create elemnt
let title = document.createElement('h1');
title.textContent = 'Cuteness';

let catImg = document.createElement('img');
catImg.src =  '../../static/images/greyTabby.jpg';

let catButton = document.createElement('button');
catButton.textContent = 'Click Here!';

let dogImg = document.createElement('img');
dogImg.src = '../../static/images/couchDog.jpg';

document.body.appendChild(title);
document.body.appendChild(catImg);
document.body.appendChild(catButton);
document.body.appendChild(dogImg);
let dogButton = document.createElement('button');
dogButton.textContent = 'halowa';
document.body.appendChild(dogButton)