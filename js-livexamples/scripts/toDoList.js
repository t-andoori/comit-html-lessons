let newItem = document.getElementById("newItem");
let addButton = document.getElementById("addButton");
let allItems = document.getElementById("allItems");
function onAddItem() {
  let newToDoText = newItem.value;
  let previousAllItems = allItems.innerHTML;
  if (newToDoText.trim( == "") { return;

  }
  else{
  allItems.innerHTML = previousAllItems + "<li>" + newToDoText + "</li>";}
}
addButton.addEventListener("click", onAddItem);
