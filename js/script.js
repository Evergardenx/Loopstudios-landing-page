//nav-bar

const navCollapse = document.querySelector("button.navbar-toggler");
const navButtonOpen = document.querySelector("span.open");
const navButtonClose = document.querySelector("span.close");
const bgNavSm = document.querySelector("nav.navbar");
navCollapse.addEventListener("click", function () {
  console.log("clicked");
  navButtonOpen.classList.toggle("hide");
  navButtonClose.classList.toggle("hide");
  if (navButtonClose.classList.contains("hide")) {
    bgNavSm.classList.remove("bg-collo");
  } else {
    bgNavSm.classList.add("bg-collo");
  }
});

const creation = [
  {
    id: 1,
    name: "Deep earth",
    img: "./images/desktop/image-deep-earth.jpg",
    imgS: "./images/mobile/image-deep-earth.jpg",
    class: "desktop",
  },
  {
    id: 2,
    name: "Night arcade",
    img: "./images/desktop/image-night-arcade.jpg",
    imgS: "./images/mobile/image-night-arcade.jpg",
    class: "desktop",
  },
  {
    id: 3,
    name: "Soccer team VR",
    img: "./images/desktop/image-soccer-team.jpg",
    imgS: "./images/mobile/image-soccer-team.jpg",
    class: "desktop",
  },
  {
    id: 4,
    name: "The grid",
    img: "./images/desktop/image-grid.jpg",
    imgS: "./images/mobile/image-grid.jpg",
    class: "desktop",
  },
  {
    id: 5,
    name: "From up above VR",
    img: "./images/desktop/image-from-above.jpg",
    imgS: "./images/mobile/image-from-above.jpg",
    class: "desktop",
  },
  {
    id: 6,
    name: "Pocket borealis",
    img: "./images/desktop/image-pocket-borealis.jpg",
    imgS: "./images/mobile/image-pocket-borealis.jpg",
    class: "desktop",
  },
  {
    id: 7,
    name: "The curiosity",
    img: "./images/desktop/image-curiosity.jpg",
    imgS: "./images/mobile/image-curiosity.jpg",
    class: "desktop",
  },
  {
    id: 8,
    name: "Make it fisheye",
    img: "./images/desktop/image-fisheye.jpg",
    imgS: "./images/mobile/image-fisheye.jpg",
    class: "desktop",
  },
];

const addContent = document.getElementById("addContent");

window.addEventListener("DOMContentLoaded", function () {
  diplayMenuItems(creation);
});

function diplayMenuItems(creationItem) {
  let displayMenu = creationItem.map(function (item) {
    return `<div class="col-lg-3 col-md-4 col-sm-4 col-6">
      <div class="catalogue d-none d-lg-block d-md-block" style = "background:linear-gradient(to bottom,rgba(0, 0, 0,0.5),rgba(0, 0, 0,0.7)), url(${item.img}) no-repeat center center / cover; height: 400px; margin-top:10px;margin-bottom : 10px;">  
        <div class="span">
        <span class="text-uppercase">${item.name}</span>
        </div>
      </div>
      <div class="catalogue d-block d-lg-none d-md-none" style = "background:linear-gradient(to bottom,rgba(0, 0, 0,0.5),rgba(0, 0, 0,0.7)), url(${item.imgS}) no-repeat center center / cover; height: 400px; margin-top:10px;margin-bottom : 10px;">  
        <div class="span">
        <span class="text-uppercase">${item.name}</span>
        </div>
      </div>
    </div>`;
  });
  displayMenu = displayMenu.join("");

  addContent.innerHTML = displayMenu;
}
