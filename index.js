//console.dir(document);
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

items[2].style.backgroundColor = 'green';
for(var i=0;i<items.length;i++){
items[i].style.fontWeight = 'bold';
}
//var li = document.getElementsByTagName('li');
//li[4].style.color = 'red';
//var it = document.getElementsByClassName('list-group-item-1');
//it[0].style.fontWeight = 'bold';
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
//var odd = document.querySelectorAll('li:nth-child(odd)');
//var even = document.querySelectorAll('li:nth-child(even)');
//for(var i=0;i<odd.length;i++){
  //  odd[i].style.backgroundColor = 'gray';
  //  even[i].style.backgroundColor = 'white';
//}
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.visibility = 'hidden';
