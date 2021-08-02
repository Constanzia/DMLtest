var xer = document.getElementById("xer);

const fillx = e => {
  xer.style.width = e.offsetX + "px";
  xer.style.backgroundColor = "transparent";
  xer.style.border-left=" 1px solid white";

  console.log(filler.style.width);
};
var yer = document.getElementById("yer");

const filly = e => {
  yer.style.height = e.offsetY + "px";
  yer.style.backgroundColor = "transparent";
  yer.style.border-bottom=" 1px solid white";

  console.log(filler.style.width);
};

document.addEventListener("mousemove", fillx,filly);
