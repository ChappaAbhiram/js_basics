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
var li = document.getElementsByTagName('li');
li[4].style.color = 'red';
var it = document.getElementsByClassName('list-group-item-1');
it[0].style.fontWeight = 'bold';
