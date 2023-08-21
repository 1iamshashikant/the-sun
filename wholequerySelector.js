
//We Can Use AnyOne of below
//using class of list and querrySelector
var item2 = document.querySelector(".list-group li:nth-child(2)");
item2.style.backgroundColor = "green";
   
var item3 = document.querySelector(".list-group li:nth-child(3)");
item3.style.display = "none";
//using id of list and querrySelector
var item2 = document.querySelector("#items li:nth-child(2)");
item2.style.backgroundColor = "green";
   
var item3 = document.querySelector("#items li:nth-child(3)");
item3.style.display = "none";
//using querySelectorAll

var items = document.querySelectorAll("#items li");
items[1].style.color = "green";
const oddItems = document.querySelectorAll("#items li");

for (let i = 0; i < oddItems.length; i += 2) {
  oddItems[i].style.backgroundColor = "green";
}