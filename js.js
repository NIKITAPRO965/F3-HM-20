const listRef = document.querySelector(".gallery");
const itemRef = document.querySelectorAll(".image");
const modal = document.querySelector(".full-image-container");
const modalImage = document.querySelector(".full-image");

let currentIndex = 0;
let position = 0;
const maxLeft = -(itemRef.length - 1) * 500;


itemRef.forEach((img, index) => {
  img.addEventListener("click", (e) => {
    currentIndex = index;
    position = -500 * currentIndex
    modal.style.display = "block";
    modalImage.src = e.target.src;
  });
});

modal.addEventListener("click", (e) => {
  modal.style.display = "none";
});


document.addEventListener("keydown", (e) => {
if (modal.style.display === "block") {
  if (e.code === "ArrowRight") {
    if (position > maxLeft) {
      position -= 500;
        currentIndex++;
    //   listRef.style.transform = `translateX(${position}px)`;
      modalImage.src = itemRef[currentIndex].src;
    }
  }

  if (e.code === "ArrowLeft") {
    if (position < 0) {
      position += 500;
        currentIndex--;
    //   listRef.style.transform = `translateX(${position}px)`;
      modalImage.src = itemRef[currentIndex].src;
    }
  }
}
});






































