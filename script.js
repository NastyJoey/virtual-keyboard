let buttonsArrRu = [
  { value: 'ё', code: 192 },
  { value: '1', code: 49, alt: '!' },
  { value: '2', code: 50, alt: '@' },
  { value: '3', code: 51, alt: '#' },
  { value: '4', code: 52, alt: '$' },
  { value: '5', code: 53, alt: '%' },
  { value: '6', code: 54, alt: '^' },
  { value: '7', code: 55, alt: '&' },
  { value: '8', code: 56, alt: '*' },
  { value: '9', code: 57, alt: '(' },
  { value: '0', code: 48, alt: ')' },
  { value: '-', code: 189 },
  { value: '=', code: 187 },
  { value: 'Backspace', code: 8 },
  { value: 'Tab', code: 9 },
  { value: 'й', code: 81 },
  { value: 'ц', code: 87 },
  { value: 'у', code: 69 },
  { value: 'к', code: 82 },
  { value: 'е', code: 84 },
  { value: 'н', code: 89 },
  { value: 'г', code: 85 },
  { value: 'ш', code: 73 },
  { value: 'щ', code: 79 },
  { value: 'з', code: 80 },
  { value: 'х', code: 219 },
  { value: 'ъ', code: 221 },
  { value: '\\', code: 220 },
  { value: 'DEL', code: 46 },
  { value: 'Caps Lock', code: 20 },
  { value: 'ф', code: 65 },
  { value: 'ы', code: 83 },
  { value: 'в', code: 68 },
  { value: 'а', code: 70 },
  { value: 'п', code: 71 },
  { value: 'р', code: 72 },
  { value: 'о', code: 74 },
  { value: 'л', code: 75 },
  { value: 'д', code: 76 },
  { value: 'ж', code: 186 },
  { value: 'э', code: 222 },
  { value: 'ENTER', code: 13 },
  { value: 'Shift', code: 16 },
  { value: 'я', code: 90 },
  { value: 'ч', code: 88 },
  { value: 'с', code: 67 },
  { value: 'м', code: 86 },
  { value: 'и', code: 66 },
  { value: 'т', code: 78 },
  { value: 'ь', code: 77 },
  { value: 'б', code: 188 },
  { value: 'ю', code: 190 },
  { value: '.', code: 191 },
  { value: '▲', code: 38 },
  { value: 'Shift', code: 16 },
  { value: 'Ctrl', code: 17 },
  { value: 'Win', code: 91 },
  { value: 'Alt', code: 18 },
  { value: ' ', code: 32 },
  { value: 'Alt', code: 18 },
  { value: 'Ctrl', code: 17 },
  { value: '◄', code: 37 },
  { value: '▼', code: 40 },
  { value: '►', code: 39 },
];

let buttonsArrEng = [
  { value: 'ё', code: 192 },
  { value: '1', code: 49, alt: '!' },
  { value: '2', code: 50, alt: '@' },
  { value: '3', code: 51, alt: '#' },
  { value: '4', code: 52, alt: '$' },
  { value: '5', code: 53, alt: '%' },
  { value: '6', code: 54, alt: '^' },
  { value: '7', code: 55, alt: '&' },
  { value: '8', code: 56, alt: '*' },
  { value: '9', code: 57, alt: '(' },
  { value: '0', code: 48, alt: ')' },
  { value: '-', code: 189 },
  { value: '=', code: 187 },
  { value: 'Backspace', code: 8 },
  { value: 'Tab', code: 9 },
  { value: 'q', code: 81 },
  { value: 'w', code: 87 },
  { value: 'e', code: 69 },
  { value: 'r', code: 82 },
  { value: 't', code: 84 },
  { value: 'y', code: 89 },
  { value: 'u', code: 85 },
  { value: 'i', code: 73 },
  { value: 'o', code: 79 },
  { value: 'p', code: 80 },
  { value: '[', code: 219 },
  { value: ']', code: 221 },
  { value: '\\', code: 220 },
  { value: 'DEL', code: 46 },
  { value: 'Caps Lock', code: 20 },
  { value: 'a', code: 65 },
  { value: 's', code: 83 },
  { value: 'd', code: 68 },
  { value: 'f', code: 70 },
  { value: 'g', code: 71 },
  { value: 'h', code: 72 },
  { value: 'j', code: 74 },
  { value: 'k', code: 75 },
  { value: 'l', code: 76 },
  { value: ';', code: 186 },
  { value: "'", code: 222 },
  { value: 'ENTER', code: 13 },
  { value: 'Shift', code: 16 },
  { value: 'z', code: 90 },
  { value: 'x', code: 88 },
  { value: 'c', code: 67 },
  { value: 'v', code: 86 },
  { value: 'b', code: 66 },
  { value: 'n', code: 78 },
  { value: 'm', code: 77 },
  { value: ',', code: 188 },
  { value: '.', code: 190 },
  { value: '/', code: 191 },
  { value: '▲', code: 38 },
  { value: 'Shift', code: 16 },
  { value: 'Ctrl', code: 17 },
  { value: 'Win', code: 91 },
  { value: 'Alt', code: 18 },
  { value: ' ', code: 32 },
  { value: 'Alt', code: 18 },
  { value: 'Ctrl', code: 17 },
  { value: '◄', code: 37 },
  { value: '▼', code: 40 },
  { value: '►', code: 39 },
];

//функции-заготовки для создания елементов страницы
let createElement = (element) => document.createElement(element);
let addClass = (element, ...className) => element.classList.add(className); //spread для множества классов
let removeClass = (element, ...className) =>
  element.classList.remove(className);

// создаем элементы страницы
let keyboard = createElement('section');
// добавляем клавиатуре класс
addClass(keyboard, 'virtual-keyboard');
//вставляем в начало body (prepend - пред первым потомком)
document.body.prepend(keyboard);

let outputArea = createElement('h3');
addClass(outputArea, 'output-area');
keyboard.prepend(outputArea);

let btnSection = createElement('section');
addClass(btnSections, 'btns');

let btnsLine;

//добавляем секцию кнопок в конец keyboard
keyboard.append(btnSection);

// создаем div и на каждом цикле добавляем класс
for (let i = 0; i < 5; i++) {
  btnsLine = createElement('div');
  addClass(btnsLine, 'btns__line');

  if (i == 0) {
    addClass(btnsLine, 'btns__line', 'btns__line--first');
  } else if (i == 1) {
    addClass(btnsLine, 'btns__line', 'btns__line--second');
  } else if (i == 2) {
    addClass(btnsLine, 'btns__line', 'btns__line--third');
  } else if (i == 3) {
    addClass(btnsLine, 'btns__line', 'btns__line--fourth');
  } else if (i == 4) {
    addClass(btnsLine, 'btns__line', 'btns__line--fifth');
  }

  btnSection.append(btnsLine);
}

// добавляем селекторы
let firstLine = document.querySelector('.buttons__line--first');
let secondLine = document.querySelector('.buttons__line--second');
let thirdLine = document.querySelector('.buttons__line--third');
let fourthLine = document.querySelector('.buttons__line--fourth');
let fifthLine = document.querySelector('.buttons__line--fifth');

// добавляем кноки в ряды циклом
for (let i = 0; i < 64; i++) {
  let btn = createElement('p');
  addClass(btn, 'button');

  btn.textContent = buttonsArrRu[i].value; //присваиваем текст
  btn.code = buttonsArrRu[i].code; //присваиваем код

  if (i < 14) {
    firstLine.append(btn);
  } else if (i >= 14 && i < 29) {
    secondLine.append(btn);
  } else if (i >= 29 && i < 42) {
    thirdLine.append(btn);
  } else if (i >= 42 && i < 55) {
    fourthLine.append(btn);
  } else {
    fifthLine.append(btn);
  }
}

let btns = document.querySelectorAll('.button');

// функция добавления в outputArea и удаления при Backspace
keyboard.addEventlistener('click', function () {
  let target = event.target;

  if (target.tagname.toLowerCase() === 'p') {
    if (target.textContent.length <= 1) {
      outputArea.textContent += target.textContent;
    }
    if (target.textContent === 'Backspace') {
      outputArea.textContent = outputArea.textContent.slice(0, -1);
    }
  }
});

// добавляем active при mousedown
keyboard.addEventlistener('mousedown', function () {
  let target = event.target;

  if (target.tagname.toLowerCase() === 'p') {
    target.classList.addClass('active');
  }
});
//убираем active on mouseup
keyboard.addEventListener('mouseup', function () {
  let target = event.target;

  if (target.tagName.toLowerCase() === 'p') {
    target.classList.remove('active');
  }
});

// функция нажатия физической клавиатуры
document.addEventListener('keydown', function (event) {
  for (let i = 0; i < buttonsArrRu.length; i++) {
    // клик() и добавление эктива если кейкод совпал
    if (event.which === buttonsArrRu[i].code) {
      // which - returns the numeric keyCode
      btns[i].click();
      addClass(btns[i], 'active');
    }
    //если 16(шифт) и buttonsArrRu[i] имеет alt,  btns.textContent = buttonsArrRu[i].alt
    if (event.which === 16 && buttonsArrRu[i].hasOwnProperty('alt')) {
      btns[i].textContent = buttonsArrRu[i].alt;
    }
    //если 20(Caps). только для кнопок с длинной < 2
    if (event.which === 20 && btns.textContent.length < 2) {
      btns[i].textContent = btns[i].textContent.toUpperCase();
    }
    //смена языка. очередность одинаковая. просто берем значение с buttonsArrEng
    if (event.shiftKey && event.ctrlKey) {
      btns[i].textContent === buttonsArrRu[i].value
        ? (btns[i].textContent = buttonsArrEng[i].value)
        : (btns[i].textContent = buttonsArrRu[i].value);
    }
  }
});

//keyup
document.addEventListener('keyup', function (event) {
  for (let i = 0; i < buttonsArrRu.length; i++) {
    //убираем эктив
    if (event.which === buttonsArrRu[i].code) {
      removeClass(btns[i], 'active');
    }
    //если отпустить shift должно быть стандвртное значение  buttonsArrRu[i].value
    if (event.which === 16 && buttonsArrRu[i].hasOwnProperty('alt')) {
      btns[i].textContent = buttonsArrRu[i].value;
    }
    // выключаем Сaps
    if (event.which === 20 && btns.textContent.length < 2) {
      btns[i].textContent = btns[i].textContent.toLowerCase();
    }
  }
});
