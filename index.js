import style from "./a.scss";
import "./b.scss";
console.log(style, Date.now());

document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".c").classList.add(style.aa);
});
