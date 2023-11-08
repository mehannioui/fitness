/*
Student Name:
File Name: script.js
Date: 4/18/2023
*/

//Global variables
var video = document.getElementById("example");
var videoSource = document.getElementById("vid-src");
var descriptionsSource = document.getElementById("despsrc");

// Hamburger menu function
function hamburger() {
  var menu = document.getElementById("menu-links");
  var logo = document.getElementById("ffc-logo");
  if (menu.style.display == "block" && logo.style.display == "none") {
    menu.style.display = "none";
    logo.style.display = "block";
  } else {
    menu.style.display = "block";
    logo.style.display = "none";
  }
}

//Function to display the burpees example video
function burpees() {
  videoSource.src = "media/burpees.mp4";
  src = "media/burpees-descriptions.vtt";
  video.style.display = "block";
  video.load();
}
