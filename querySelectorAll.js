var items = document.querySelectorAll("#items li");
items[1].style.color = "green";
const oddItems = document.querySelectorAll("#items li");

for (let i = 0; i < oddItems.length; i += 2) {
  oddItems[i].style.backgroundColor = "green";
}