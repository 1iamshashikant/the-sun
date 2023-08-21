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
