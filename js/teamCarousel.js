const prevButton = document.getElementById("career_prev");
const nextButton = document.getElementById("career_next");
const imageElement = document.getElementById("photo");
const nameElement = document.getElementById("name");
const careerBeginElement = document.getElementById("career-begin");
const careerDecsriptionElement = document.getElementById("career-description");
const carrerPresentElement = document.getElementById("career-present");
const professtionElement = document.getElementById("profession");
const images = ["img/Олег.webp", "img/Мария.webp", "img/Данил.webp"];

const names = [
    'Олег Воробьёв',
    'Мария Обухова',
    'Даниил Басенков'
]

const careerBegin = [
  "В Компании с 2018 года. Начал с позиции плотника в строительной бригаде.",
  "В декабре 2018 года заступил на должность Менеджера отдела продаж",
  "В декабре 2018 года заступил на должность Менеджера отдела продаж",
];

const careerDecsription = [
  "В течение года работы Олег стал бригадиром и был приглашён в офис Компании на должность штатного Производителя строительных работ.",
  "В декабре 2018 года заступил на должность Менеджера отдела продаж. После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.",
  "В декабре 2018 года заступил на должность Менеджера отдела продаж. После 9 месяцев стабильных результатов, зарекомендовав себя как надёжный сотрудник, получил ответственную должность Логиста.",
];

const carrerPresent = [
  "На данный момент в Его подчинении находятся 9 строительных бригад. Олег вносит весомый вклад в итоговый результат Компании, а это реализация 100 объектов в год!",
  "Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчика.",
  "Через год Даниил занял должность Специалиста службы снабжения, взяв на себя помимо закупа материала ещё и крайне важную роль Сметчика.",
];

const professions = [
  "Прораб",
  "Руководитель финансовой службы",
  "Менеджер по снабжению",
];

let index = 0;

function updateContent() {
  imageElement.src = images[index];
  nameElement.textContent = names[index];
  careerBeginElement.textContent = careerBegin[index];
  careerDecsriptionElement.textContent = careerDecsription[index];
  carrerPresentElement.textContent = carrerPresent[index];
  professtionElement.textContent = professions[index];
}

nextButton.addEventListener("click", () => {
  index = (index + 1 + images.length) % images.length;
  updateContent();
});

prevButton.addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  updateContent();
});
