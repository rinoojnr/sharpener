//getElementById===========================================================================================================
var headertext = document.getElementById('main-headding');

// headertext.style.borderBottom='solid 3px #000';
// headertext.innerHTML ='<b>Malayalam</b>';
// headertext.style.color ='green'

//getElementsByClassName===================================================================================================
var items = document.getElementsByClassName('item')
console.log(items[2])
items[1].textContent ="Hello";
items[1].style.fontWeight ="bold";
items[1].style.backgroundColor="yellow"

items.style.backgroundColor="grey"  //=========== it gives an error because of html collection
for(let i=0;i<items.length;i++){
    items[i].style.backgroundColor="grey"
}
items[2].style.backgroundColor="green"
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold"
}

// getElementByTagName======================================================================================================
// var li = document.getElementsByTagName('li');
// console.log(li)
// li[0].textContent ="hello"
// li[0].style.backgroundColor='green'
// li[0].style.fontWeight = 'bold'

// for(let i=0;i<li.length;i++){
//     li[i].style.color='red'
// }



