"use strict";

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const hidden = document.getElementsByClassName(".hidden");

let i = 0;

prev.addEventListener("click", function () {
  const prevbtn = document.getElementById(`${i}`).classList;
  prevbtn.remove("selected");
  prevbtn.add("hidden");
  if (i === 0) {
    i = 4;
  }
  i--;

  const nextbtn = document.getElementById(`${i}`).classList;
  nextbtn.remove("hidden");
  nextbtn.add("selected");
});

next.addEventListener("click", function () {
  const prevbtn = document.getElementById(`${i}`).classList;
  prevbtn.remove("selected");
  prevbtn.add("hidden");
  if (i === 4) {
    i = 0;
  }
  i++;
  const nextbtn = document.getElementById(`${i}`).classList;
  nextbtn.remove("hidden");
  nextbtn.add("selected");
});
