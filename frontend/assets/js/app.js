import "../css/app.scss";

// BACON SCRIPT START
const button = document.querySelector("button");
const baconSection = document.querySelectorAll("section")[1];
const baconImage = document.querySelector("img");
let baconStorage = 11;

button.addEventListener("click", () => {
  const copyBaconImage = baconImage.cloneNode(true);

  if (baconStorage > 0) {
    baconSection.appendChild(copyBaconImage);
    baconStorage--;
  } else {
    alert("Out of bacon. Contact admin for more!");
  }
});
// BACON SCRIPT END
