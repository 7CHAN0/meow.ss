const themeSwitcher = document.getElementById('themeSwitcher');
const languageSwitcher = document.getElementById('languageSwitcher');
const htmlElement = document.documentElement;

// Проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    themeSwitcher.textContent = savedTheme === 'dark' ? '🌞' : '🌙';
}

// Функции перевода
function switchToEnglish() {
    document.getElementById('subtitle').textContent = 'femboy • gamer • streamer';
    document.getElementById('bio').innerHTML = 'Hello~ 💖 I love games, anime and all things cute.<br>Write if you want to chat or play together!';
    document.getElementById('interests-title').textContent = 'INTERESTS';
    document.getElementById('interests-content').textContent = '🌸 MEOW :3';
    document.getElementById('games').textContent = '🎮 CS2, DOTA2, GMOD, TF2';
    document.getElementById('music').textContent = '🎵 Music lover, I listen to everything';
    document.getElementById('about-title').textContent = 'ABOUT ME';
    document.getElementById('age').textContent = '18 years old';
    document.getElementById('tech').textContent = 'I love technology (PC, phones, etc.)';
    document.getElementById('collection').textContent = 'Collecting cute things';
}

function switchToRussian() {
    document.getElementById('subtitle').textContent = 'фембой • геймер • стример';
    document.getElementById('bio').innerHTML = 'Привет~ 💖 Люблю игры, аниме и всё милое.<br>Пиши если хочешь пообщаться или поиграть вместе!';
    document.getElementById('interests-title').textContent = 'ИНТЕРЕСЫ';
    document.getElementById('interests-content').textContent = '🌸 MEOW :3';
    document.getElementById('games').textContent = '🎮 CS2, DOTA2, GMOD, TF2';
    document.getElementById('music').textContent = '🎵 Меломан слушаю все';
    document.getElementById('about-title').textContent = 'О СЕБЕ';
    document.getElementById('age').textContent = '18 лет';
    document.getElementById('tech').textContent = 'Люблю технику (пк,телефоны, т.п)';
    document.getElementById('collection').textContent = 'Коллекционирую милые вещи';
}

// Переключатель темы
themeSwitcher.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        htmlElement.removeAttribute('data-theme');
        themeSwitcher.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.setAttribute('data-theme', 'dark');
        themeSwitcher.textContent = '🌞';
        localStorage.setItem('theme', 'dark');
    }
});

// Переключатель языка
languageSwitcher.addEventListener('click', () => {
    if (languageSwitcher.textContent === 'EN') {
        switchToEnglish();
        localStorage.setItem('lang', 'en');
        languageSwitcher.textContent = 'RU';
    } else {
        switchToRussian();
        localStorage.setItem('lang', 'ru');
        languageSwitcher.textContent = 'EN';
    }
});

// Инициализация языка при загрузке
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en') {
        switchToEnglish();
        languageSwitcher.textContent = 'RU';
    } else {
        languageSwitcher.textContent = 'EN';
    }
});