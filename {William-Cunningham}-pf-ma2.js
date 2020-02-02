// Question 1

const myFunctionExpression = function() {
  console.log("William");
};

myFunctionExpression();

// Question 2

document.querySelectorAll(".btn");

document.addEventListener("click", function() {
  console.log("I was clicked");
});

// Question 3

<input class="input" id="firstName"></input>;

const textInput = document.querySelector("#firstName");

textInput.addEventListener("keydown", callAfterAKeyIsPressed);

function callAfterAKeyIsPressed(event) {
  console.log("value: ", event.target.value);
}

// Question 4

<button class="btn" data-animal="dog">
  Hover over me
</button>;

const btn = document.querySelector("button");

btn.addEventListener("mouseover", callOnHover);

function callOnHover() {
  btn.classList.add(".hover");
}

// Question 5

btn.addEventListener("mouseover", callOnMouseOut);

function callOnMouseOut() {
  btn.classList.remove(".hover");
}

console.log(btn);
// class added in question 4 and removed in question 5.

// Question 6

<ul>
  <li data-animal="goose">Animal 1</li>
  <li data-animal="frog">Animal 2</li>
  <li data-animal="elephant">Animal 3</li>
</ul>;

const animalList = document.querySelectorAll("li");

function callOnHover() {
  console.log(animalList);
}

button.addEventListener("mouseover", callOnHover);

let animalList;

switch (li) {
  case "goose":
    animalList = data - animal;
    break;

  case "frog":
    animalList = data - animal;
    break;

  case "elephant":
    animalList = data - animal;
    break;

  default:
    animalList = [];
}
function loop(event) {
  for (let i = 0; i < buttons.length; i++) {
    animalList[i].addEventListener.MouseOver;
  }
