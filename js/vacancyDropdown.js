const dropdownBtns = document.querySelectorAll('#vacancies__plus')
const dropdownContents = document.querySelectorAll('.vacancies__description')

dropdownBtns.forEach((dropdownBtn, index) => {
    dropdownBtn.addEventListener('click', () => {
      if (dropdownContents[index].style.display === 'block') {
        dropdownContents[index].style.display = 'none';
        dropdownBtn.className = "plus";
      } else {
        dropdownContents[index].style.display = 'block';
        dropdownBtn.className = "close";
      }
    });
  });