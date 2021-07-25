import card from './menu.json'; // импортирт массива блюд
import templateCard from './template-card.hbs'; // импортирт шаблона блюд

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const THEMEKEY = 'theme';

const refs = {
    switchButton: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body'),
};

refs.body.classList.add(Theme.LIGHT);
refs.switchButton.addEventListener('change', makeAction);

// === изменение темы при условии ===
function makeAction() {

    if (refs.body.classList.contains(Theme.DARK)) {
        localStorage.setItem(THEMEKEY, Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
        refs.body.classList.add(Theme.LIGHT);
    }

    else if (!refs.body.classList.contains(Theme.DARK)) {
        localStorage.setItem(THEMEKEY, Theme.DARK);
        refs.body.classList.add(Theme.DARK);
    }
};

// === применение темы ===
function addSwitch() {
    const currentTheme = localStorage.getItem(THEMEKEY);

    if (currentTheme !== Theme.DARK) {
        refs.body.classList.add(Theme.LIGHT)
        refs.switchButton.checked = false
        // console.log(currentTheme)
    }

    else if (currentTheme === Theme.DARK) {
        refs.switchButton.checked = true
        refs.body.classList.add(Theme.DARK)
        // console.log(currentTheme)
    }
};

addSwitch();

// === добавление карточек ===
const menuEl = document.querySelector('ul.js-menu'); // доступ к списку карточек
menuEl.innerHTML = templateCard(card); // добавляем карточки
// console.log(menuEl);