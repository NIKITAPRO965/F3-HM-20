// Створити галерею зображень, яку можна прогортати за допомогою клавіш клавіатури (наприклад, вліво / вправо)

const listRef = document.querySelector(".gallery");
const itemRef = document.querySelectorAll(".image");

let position = 0;
const maxLeft = -(itemRef.length - 1) * 320;


window.addEventListener("keydown", (e) => {
  if (e.code === "ArrowRight") {
    if (position > maxLeft) {
      position -= 320;

      if (position < maxLeft) {
        position = maxLeft;
      }
      listRef.style.transform = `translateX(${position}px)`;
    }
  }

  if (e.code === "ArrowLeft") {
    if (position < 0) {
      position += 320;

      if (position > 0) {
        position = 0;
      }
      listRef.style.transform = `translateX(${position}px)`;
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

function createBoxes(amount) {
  destroyBoxes();

  let size = 30;
  const elements = [];

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    elements.push(div);
    size += 10;
  }

  boxes.append(...elements);
}

destroyBtn.addEventListener("click", (e) => {
  destroyBoxes();
});

function destroyBoxes() {
  boxes.innerHTML = "";
}








