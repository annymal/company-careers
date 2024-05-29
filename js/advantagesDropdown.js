const contents = document.querySelectorAll("#advantages__content");
const plusBtns = document.querySelectorAll("#plus");

const text = [
  "Мы гордимся результатами своей работы! Мы убеждены, что именно качество — это самое главное, это то, что даёт Нам уверенность в завтрашнем дне.",
  "Мы занимаем высокие позиции в поисковой выдаче и имеем многочисленные отзывы, привлекающие новых заказчиков независимо от времени года.",
  "Комфортный офис в центре г. Санкт-Петербург, оборудованный передовыми технологиями. Твой рабочий компьютер может быть даже в твоём смартфоне!",
  "Создали и постоянно улучшаем собственные автоматизированные системы обучения специалистов и повышения их квалификации внутри компании.",
];

function changeContent() {
  contents.forEach((content, i) => {
    content.textContent = text[i];
  });
}

plusBtns.forEach((plusBtn, i) => {
  plusBtn.addEventListener("click", () => {
    contents[i].classList.toggle("advantages__content-visible");
    if (contents[i].classList.contains("advantages__content-visible")) {
      plusBtn.className = "close";
    } else {
      plusBtn.className = "plus";
    }
    changeContent();
  });
});
