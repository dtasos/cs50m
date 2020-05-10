const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let items = 0
let uncheckedItems = 0
let liId = 0
let check

function newTodo() {
  liId += 1
  //Getting Input
  let toDoName = prompt("Please enter your TODO"); 
  let text = document.createTextNode(toDoName)
  let deleteText = document.createTextNode('Delete')

  //Creating the li 
  let li = document.createElement("li")
  li.classList.add(classNames.TODO_ITEM)
  li.setAttribute("id", liId)

  //Creating input
  let input = document.createElement("input")
  input.classList.add(classNames.TODO_CHECKBOX)
  input.setAttribute("type", "checkbox")

  //Creating span
  let span = document.createElement("span")
  span.classList.add(classNames.TODO_TEXT)
  span.appendChild(text)

  //Creating button
  let button = document.createElement("button")
  button.classList.add(classNames.TODO_DELETE)
  button.appendChild(deleteText)

  li.appendChild(input)
  li.appendChild(span)
  li.appendChild(button)

  list.appendChild(li)

  items += 1
  uncheckedItems += 1
  refreshCounts()

}

function refreshCounts() {
  itemCountSpan.textContent = items
  uncheckedCountSpan.textContent = uncheckedItems
}
//Click Listener

document.addEventListener("click", clickEvent)

//Click function For delete or checkbox
function clickEvent(event) {
  var element = event.target
  if(element.classList.contains("todo-checkbox")){
    if (element.checked == true){
      uncheckedItems -= 1
    } else {
      uncheckedItems += 1
    }
    refreshCounts()
  }

  if(element.classList.contains("todo-delete")){
    let x = element.parentNode
    var y = null
    for(var i = 0; i < x.childNodes.length; i++){
      if (x.childNodes[i].className == "todo-checkbox") {
        y = x.childNodes[i];
      }
    }
    if (y.checked == false){
      uncheckedItems -= 1
      refreshCounts()
    }
    element.parentNode.remove()
    items -= 1
    refreshCounts()
  }

}
