document.URL
document.body
document.header
document.links
document.getElementById("special")
document.getElementsByClassName('first')
document.getElementsByTagName('h2') 
document.querySelector('#special')
document.querySelectorAll('.first')


var first = document.querySelector('h1');
first.style.color = "red";
// first.innerText="Hello"
first.style.fontSize = "50px";
first.style.backgroundColor = "yellow";
first.style.textAlign = "center"; 
first.style.borderRadius="20px";
first.style.padding = "20px";
first.style.width = "400px";
first.style.margin = "0 auto";

var p= document.querySelector('p');
p.style.color = "blue";
p.style.fontSize = "20px";
p.textContent = "This is a paragraph.";
p.style.textAlign = "justify";
p.style.lineHeight = "1.5";

var special = document.querySelector('#special');
special.style.color = "green";
special.style.fontSize = "50px";
special.style.backgroundColor = "lightgray";
special.style.textAlign = "center"; 
special.style.borderRadius="20px";
special.style.padding = "20px";
special.style.width = "400px";
special.style.margin = "20px auto";
special.textContent = "This is a special heading.";
special.innerHTML="Welcome to our website!"

//how to change attributes of elements or html tags
var a = document.querySelector('a') // console.log(a.getAttribute('href')) 
a.setAttribute('href','https://facebook.com') 

const images = document.querySelectorAll('img');
// images.forEach(img => {
//   img.setAttribute('src', '/path/to/image.jpg');
//   img.setAttribute('alt', 'Placeholder Image');
// });

var p=document.createElement('p');
p.textContent = "This is a new paragraph created using JavaScript.";
document.body.appendChild(p);

const img= document.createElement('img');
img.setAttribute('src', '/image2.jpeg');
img.setAttribute('alt', 'Placeholder Image');
img.style.width = "300px";
img.style.height = "200px";
document.body.appendChild(img);

var f1= document.querySelectorAll('h2');
f1[0].style.color = "purple";
f1[1].style.color = "red";
f1[0].style.fontSize = "30px";
f1[1].style.fontSize = "40px";

// f1[0].style.fontSize = "30px";
// f1[0].style.backgroundColor = "lightblue";

var f2= document.querySelectorAll('ul li');
f2[0].style.color = "orange";
f2[1].style.color = "green";
f2[2].style.color = "blue";
f2[0].style.fontSize = "20px";
f2[1].style.fontSize = "25px";
f2[2].style.fontSize = "30px";

const newListItem = document.createElement('li');
newListItem.textContent = "New Item";
// document.querySelector('ul').appendChild(newListItem);
// document.querySelector('ul').removeChild(document.querySelector('ul li:first-child'));


const allitems=document.querySelectorAll('ul li');
allitems.forEach(item => {
  item.style.color = "brown";
  item.style.fontSize = "18px";
}
