let list = document.querySelector('.header__list');
let input = document.querySelector('.cta__input');;
let form = document.querySelector('.cta__form');
let priority = document.querySelector('.btn--priority');

priority.onclick = function () {
    priority.classList.toggle('important--item');
    if (priority.classList.contains('important--item')) {
        priority.textContent = 'Важная задача';
    } else {
        priority.textContent = 'Обычная задача';
    }
};

form.onsubmit = function (evt) {
    evt.preventDefault();
    let newTask = document.createElement('li');
    newTask.textContent = input.value; 

    if (priority.classList.contains('important--item')) {
        newTask.classList.toggle('important--item');
    }
    list.append(newTask);
    input.value = '';
};
