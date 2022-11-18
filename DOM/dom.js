const domElement = document.getElementById("dom");
// dynamic changes can be implemented by using this
// we created a new node and appending it with the existing dom element

// newly created element
const newPara = document.createElement("p");
const newPElement = document.createTextNode("This is the newly added p tag");
newPara.appendChild(newPElement);

// main element
const existingDiv = document.getElementById("newDiv");
// to append the new element with this div element
// existingDiv.appendChid(newPara);

// new child element
const newspanElement = document.getElementById("newSpan");

// for appending the new element before the existing span tag
existingDiv.insertBefore(newPara, newspanElement);

// to remove the element
// newspanElement.remove();

// to remove the child
// existingDiv.removeChild(newspanElement);

// to replace the child element
// existingDiv.replaceChild(newPara, newspanElement);

// fetching dom with the class name
// const elementWithClass = document.getElementsByClassName("h1");

// fetching dom with the tag name
const elementWithClass = document.getElementsByTagName("h1");
elementWithClass[0].style.color = "red";
elementWithClass[0].style.fontSize = "40px";
console.log(document.getElementsByClassName("h1Dom"));

const quesryElement = document.querySelector("div");
console.log(quesryElement);
quesryElement.style.color = "red";
quesryElement.style.fontSize = "40px";
