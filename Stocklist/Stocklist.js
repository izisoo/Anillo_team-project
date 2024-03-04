const onlineBtn = document.querySelectorAll(".online");
const offlineBtn = document.querySelectorAll(".offline");
const onlinePage = document.querySelector("#stocklist_online");
const offlinePage = document.querySelector("#stocklist_offline");

for (let i = 0; i < onlineBtn.length; i++) {
  onlineBtn[i].addEventListener("click", () => {
    onlinePage.style.display = "block";
    offlinePage.style.display = "none";
  });
}

for (let i = 0; i < offlineBtn.length; i++) {
  offlineBtn[i].addEventListener("click", () => {
    onlinePage.style.display = "none";
    offlinePage.style.display = "block";
  });
}

const moreOne = document.querySelector("#moreone");
const moreTwo = document.querySelector("#moretwo");
const detailOne = document.querySelector(".stockcont_ananti_inner");
const detailTwo = document.querySelector(".stockcont_chicor_inner");

moreOne.addEventListener("click", function () {
  detailOne.classList.toggle("view");
  const buttonText = detailOne.classList.contains("view") ? "CLOSE" : "MORE";
  moreOne.textContent = buttonText;
});
moreTwo.addEventListener("click", function () {
  detailTwo.classList.toggle("view");
  const buttonText = detailTwo.classList.contains("view") ? "CLOSE" : "MORE";
  moreTwo.textContent = buttonText;
});
