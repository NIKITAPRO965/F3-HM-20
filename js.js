// Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури (наприклад, вліво / вправо)

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




























// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. При натисканні на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає 1 параметр amount — число. Функція створює стільки div, скільки вказано в amount і додає їх в div#boxes.

// Кожен створений div:

// Має випадковий rgb колір фону
// Розміри найпершого div — 30px на 30px
// Кожен наступний div після першого, повинен бути ширше і вище попереднього на 10px

// Створи функцію destroyBoxes(), яка очищає div#boxes.




const controls = document.querySelector("#controls");
const input = controls.querySelector("input");
const renderBtn = controls.querySelector('[data-action="render"]');
const destroyBtn = controls.querySelector('[data-action="destroy"]');
const boxes = document.querySelector("#boxes");

renderBtn.addEventListener("click", (e) => {
  const amount = Number(input.value);
  createBoxes(amount);
});

destroyBtn.addEventListener("click", (e) => {
  destroyBoxes();
});

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomColor();

    elements.push(div);
    size += 10;
  }

  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = "";
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}







