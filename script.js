// header



// about me section


// projects section
// adding the variables
// projects 1
var demo1btn = document.getElementById("project1btn");
var project1content = document.getElementById("project1Content");
var project1card = document.getElementById("project1card");
// displaying project 1
function displayProject1() {
      project1content = document.getElementById('project1Content');
    project1content.style.display = "flex";
  project1card.style.display = "none";
}
// hiding the project 1 iframe
function hideContent1() {
    project1card.style.display = "flex";
  project1content.style.display = "none";
}





// project 2
var demo2btn = document.getElementById("project2btn");
var project2card = document.getElementById("project2card");
var project2content = document.getElementById("project2Content");
// displaying project 2
function displayProject2() {
      project2content = document.getElementById('project2Content');
    project2content.style.display = "flex";
  project2card.style.display = "none";
}
// hiding the project 2 iframe
function hideContent2() {
    project2card.style.display = "flex";
  project2content.style.display = "none";
}



// project 3
var demo3btn = document.getElementById("project3btn");
var project3card = document.getElementById("project3card");
var project3content = document.getElementById("project3Content");
// displaying project 3
function displayProject3() {
      project3content = document.getElementById('project3Content');
    project3content.style.display = "flex";
  project3card.style.display = "none";
}
// hiding the project 3 iframe
function hideContent3() {
    project3card.style.display = "flex";
  project3content.style.display = "none";
}


// services section


// contact me section
// variables
var link = document.getElementById("email-link");
var icon = document.getElementById("email-icon");
// change to open inbox icon
function emailChange() {
 icon.className = "fa-solid fa-envelope-open-text";
}
// change back to regular inbox icon
function emailChangeBack() {
  icon.className = "fa-solid fa-envelope"; 
}




// adding fade in effect to entire page 

function reveal() {
var reveals = document.querySelectorAll(".reveal");
for (var i = 0; i < reveals.length; i++) {
var windowHeight = window.innerHeight;
var elementTop = reveals[i].getBoundingClientRect().top;
var elementVisible = 150;
if (elementTop < windowHeight - elementVisible) {
reveals[i].classList.add("active");
} else {
reveals[i].classList.remove("active");
}}
}
window.addEventListener("scroll", reveal);