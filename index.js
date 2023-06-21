console.dir(document);
//console.log(document.domain);
//console.log(document.title);
//console.log(document.head);
//console.log(document.all);
//console.log(document.all[10]);
//console.log(document.forms);
//var headertitle = document.getElementById('header-title');
//headertitle.style.border = 'solid 2px black';
//var addItems = document.getElementsByClassName('title');
//addItems[0].style.fontWeight = 'bold';
//addItems[0].style.color = 'green';
var items = document.getElementsByClassName('list-group-item');
console.log(items);
/*
items[2].style.backgroundColor = 'green';
for(var i=0;i<items.length;i++){
items[i].style.fontWeight = 'bold';
}
var li = document.getElementsByTagName('li');
li[4].style.color = 'red';
var it = document.getElementsByClassName('list-group-item-1');
it[0].style.fontWeight = 'bold';
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px black';
var input = document.querySelector('input');
input.value = 'HelloWorld';
var submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND';
var item = document.querySelector('.list-group-item');
item.style.color = 'red';
var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';
var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i<odd.length;i++){
  odd[i].style.backgroundColor = 'gray';
  even[i].style.backgroundColor = 'white';
}
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';
/*
var itemList = document.querySelector('#items');
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = 'green';
//console.log(itemList.parentNode.parentNode);
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = 'green';
//console.log(itemList.parentElement.parentElement);
//ChildNodes
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';
//Firstchild
//console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';
//last Element
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';
//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.backgroundColor = 'lightpink';
//create element
//Create a div
var newDiv = document.createElement('div');
//add class to the div
newDiv.className = 'hello';
//Add id
newDiv.id = 'hello1';
//Add attr
newDiv.setAttribute('title','Hello Div');
//Create text node
var newDivText = document.createTextNode('HEllo world');
newDiv.appendChild(newDivText);
 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');



console.log(newDiv);
container.insertBefore(newDiv,h1);

var newDiv2 = document.createElement('li');
newDiv2.id = 'newdiv2';
newDiv2.className = 'list-group-item';
var textContent = document.createTextNode('HEllo world');
newDiv2.appendChild(textContent);
console.log(newDiv2);
 var box = document.querySelector('body .list-group');
 var h2 = document.querySelector('body li');
 box.insertBefore(newDiv2,h2);
 //Events
var button = document.getElementById('button');
//button.addEventListener('click',runEvent);
//button.addEventListener('dblclick',runEvent);
button.addEventListener('mouseup',runEvent);

//  function buttonClick(e){
//     //document.getElementById('header-title').textContent = 'Changed';
//     //document.querySelector('#main').style.backgroundColor = 'gray';
//     console.log(e.target);
//     console.log(e.target.classList);
//  }

function runEvent(e){
    console.log('EVENT TYPE :'+e.type);
}
*/
// var box = document.getElementById('box');
// box.addEventListener('mouseenter',runEvent);
// box.addEventListener('mouseleave',runEvent);
var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');
  var editBtn = document.createElement('button');
  editBtn.className = "edit float-right";
  editBtn.appendChild(document.createTextNode('Edit'));

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}


