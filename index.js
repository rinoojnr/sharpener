var headertext = document.getElementById('main-headding');

headertext.style.borderBottom='solid 3px #000';
headertext.innerHTML ='<b>Malayalam</b>';
headertext.style.color ='green'


var items = document.getElementsByClassName('item')
// console.log(items[2])
// items[1].textContent ="Hello";
// items[1].style.fontWeight ="bold";
// items[1].style.backgroundColor="yellow"

// items.style.backgroundColor="grey"  //=========== it gives an error because of html collection
// for(let i=0;i<items.length;i++){
//     items[i].style.backgroundColor="grey"
// }
items[2].style.backgroundColor="green"
for(let i=0;i<items.length;i++){
    items[i].style.fontWeight="bold"
}
