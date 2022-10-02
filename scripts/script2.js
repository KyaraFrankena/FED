var menuKnop = document.querySelector("header button");
menuKnop.addEventListener("click", toggleMenu);

function toggleMenu() {
  var deHeader = document.querySelector("header");
  deHeader.classList.toggle("menuOpen");
}







/**************************/
/* DERDE STREEPJES BUTTON */
/**************************/
var derdeStreepjesButton = document.querySelector("section.streepjes li button");
derdeStreepjesButton.addEventListener("click", derdeStreepjesButtonKlik);
function derdeStreepjesButtonKlik() {
  derdeStreepjesButton.classList.toggle("menuOpen");
}







// var knoppie = document.querySelector(".pagina2 section:nth-of-type(3) ul li button");

// function knoppieBeweegt() {
//   var eenUl = document.querySelector(".pagina2 .testje ul button");
//   eenUl.classList.toggle("open");
//   console.log ("hi");
//   knoppie.addEventListener("click", knoppieBeweegt);
// };



var deKnop = document.querySelector("section:nth-of-type(3) ul li button");

deKnop.addEventListener("click", toggleThingie);

function toggleThingie() {
	var deUl = document.querySelector("section:nth-of-type(3) ul");
	deUl.classList.toggle("open");
  console.log ("hi");
}
