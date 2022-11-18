// Event handlers - the attributes that does the job
// of handling the events that is taking place in the DOM element
// onchange
// onclick
// onmouseover
// onmouseout
// onfocus
// onblur

// key Events
// onkeydown/ onkeypress
// onkeyup

// EventListener - a method to create / remove an event handler for the element
// addEventListener is to attach an event handler
// removeEventListener is to remove an event handler
document.getElementById("btn").addEventListener("click", btnClick);
document.getElementById("btn").removeEventListener("click", btnClick);
document
  .getElementById("myCheckbox")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });
function btnClick() {}

function checkBtnClick(event) {}

function selectValues() {
  let gender = document.getElementById("select").value;
}

function keyup(event) {
  // console.log(event);
  document.getElementById("input-key").style.background = "green";
}
function checkinputevent() {
  console.log("input added");
}

function keyDown(e) {
  // event - we can access the different parameters of the element values like, key, code, altkey...
  console.log(e);
  console.log(e.ctrlKey);
  document.getElementById("input-key").style.background = "pink";
}

function inputFocus() {
  // alert("input is in focus");
}

function inputBlur() {
  console.log("focus out");
}

function mouseOver() {
  // alert("this is mouse hovering the title");
}

function mouseOut() {
  // alert("this is mouse out event");
}

function submitForm() {}

// timers - to make the function trigger in certain interval of time
// timeout - the function will be triggered after particular time
// interval - the function will be repeatedly triggered after every interval of time

function timerCheck() {
  // set timeout
  // setTimeout(function () {
  //   alert("timeout");
  // }, 5000);

  // set interval

  setInterval(function () {
    alert("interval function");
  }, 5000);
}
