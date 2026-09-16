
/**
 * 
 Practice - shopping list
  - Create four variables that hold references to <ul>, <input>, <p> and <button> elements. Also create an empty array called shoppingList — this will store your items as the user adds them.
 - Create a function that will run in response to the button being clicked.
 - Inside the function body, start by calling preventDefault(). Since the input is wrapped in a form element, pressing the Enter key will trigger the form to submit. The call to preventDefault() will prevent the form from refreshing the page so a new item can be added to the list instead.
 - Continue by storing the current value of the input in a variable and then push it into your shopping list. */
//   - Create a function that will run in response to the button being clicked.
//  - Inside the function body, start by calling preventDefault(). Since the input is wrapped in a form element, pressing the Enter key will trigger the form to submit. The call to preventDefault() will prevent the form from refreshing the page so a new item can be added to the list instead.
//  - Continue by storing the current value of the input in a variable and then push it into your shopping list. */

const { yellow } = require("colors");



const btn = document.querySelector("button");
const input = document.querySelector("input");
const list = document.querySelector("ul");
const para = document.querySelector("para");

const shoppinglist = [];

function addItemToList(e) {
  e.preventDefault();


  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  SpeechSynthesisUtterance.textContent = inputValue;
  button.textcontent = 'Delete';
  li.append(span, button);

  list.append(li);

  // step 9 
  if (shoppingList.length === 0) {
    para.textContent = "Shopping list is empty";
  }
  else {
    para.textContent = `You have ${shoppingList.length} item(s) in list`
  }


  // step 10 
  button.addEventListener("click", function () {
    const index = shoppingList.indexOf(span.textContent);
    shoppingList.splice(index, 1);
    li.remove();
    if (shoppingList.length === 0) {
      para.textContent = "Shopping list is empty";
    }
    else {
      para.textContent = `You have ${shoppingList.length} item(s) in list`
    }
  })

  //step 11 
  input.focus();


}

btn.addEventListener("click", addItemToList);




