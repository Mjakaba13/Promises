const slate = document.getElementById("poly");
const walk = document.createElement("img");
const tired = document.createElement("img");
walk.src = "./walk.gif";
tired.src = "./tired.webp";
slate.appendChild(walk);
slate.appendChild(tired);
walk.style.display = "none";
tired.style.display = "none";

let sillyWalkings = new Promise(function (resolve, reject) {
  console.log("The story of Johnny Walker.");
  setTimeout(() => {
    walk.style.display = "block";
    console.log("A journey of a mile begins with a step.");
  }, 5000);
  resolve();
  reject();
});

sillyWalkings.then(() => {
  setTimeout(() => {
    console.log("Charley,forget it. I am tired.");
    walk.style.display = "none";
    tired.style.display = "block";
  }, 20000);
});
