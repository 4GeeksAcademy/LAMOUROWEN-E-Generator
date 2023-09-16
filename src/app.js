/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse(); //write your code here
  });
};

let generateExcuse = () => {
  let pronoun = ["A", "My"];
  let subject = ["dog", "grandma", "turtle", "my bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let possession = ["my homework", "the keys", "the car"];
  let when = [
    "this morning",
    "last night",
    "this evening",
    "around 8 O'Clock on Tuesday",
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let pronounIndex = [Math.floor(Math.random() * pronoun.length)];
  let subjectIndex = [Math.floor(Math.random() * subject.length)];
  let actionIndex = [Math.floor(Math.random() * action.length)];
  let possessionIndex = [Math.floor(Math.random() * possession.length)];
  let whenIndex = [Math.floor(Math.random() * when.length)];

  return (
    pronoun[pronounIndex] +
    " " +
    subject[subjectIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    when[actionIndex]
  );
};
console.log();
