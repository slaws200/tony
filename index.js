
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const navlist = document.querySelector('.nav-list'),
    navlistItem = document.querySelectorAll('.nav-list .nav-list_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        navlist.classList.toggle('nav-list_active');
    });

    navlistItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            navlist.classList.toggle('nav-list_active');
        })
    })

const scrollToTopButton = document.getElementById('scrollToTop');

// Показать кнопку, когда пользователь прокручивает страницу вниз
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Если прокрутка больше 300px
        scrollToTopButton.classList.add('visible');
    } else {
        scrollToTopButton.classList.remove('visible');
    }
});

// Плавный скролл наверх
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Смена языка
const engText = ['Hello, investor! I’m Tony the bear, and I’m thrilled to welcome you to my token’s world. Here, you’ll find everything you need to know about our project, goals, plans, and unique tokenomics. Welcome to the community where dreams turn into reality!', 'Tony is a groundbreaking meme project on the TON platform, born in the Blum memepad and entirely owned by its community. Our mission? To become the top meme token on TON, and then challenge the competition to claim the crown of the best meme token across all blockchain platforms. We blend fun, experimentation, and a passion for crypto innovation.', 'Our tokenomics is an experiment and a bold challenge to the system. We’re committed to buying back $TONY regardless of its price to maintain its value. This project isn’t about profit—it’s about community, fun, and testing what happens when no one is selling. It’s our way of proving the power of unity and trust.', 'Currently, $TONY is available exclusively on the Blum memepad. But this is just the beginning! Soon, we’ll expand to decentralized exchanges (DEX), making it easy for everyone to join our project. Stay tuned for updates!', `Phase 1: Achieve top positions in the Blum memepad.
<br><br>
Phase 2: Launch on decentralized exchanges (DEX).
<br><br>
Phase 3: Execute an active marketing campaign to boost recognition.
<br><br>
Phase 4: Get listed on centralized exchanges (CEX).`];

const ruText = ['Привет, инвестор! Я — медведь Tony, рад приветствовать тебя в мире моего токена. Здесь ты найдешь всю необходимую информацию о нашем проекте, целях, планах и уникальной токеномике. Добро пожаловать в сообщество, где мечты становятся реальностью!', 'Tony — это уникальный мем-проект на платформе TON, рожденный в мемпаде Blum и полностью принадлежащий своему комьюнити. Наша цель — стать лучшим мем-токеном на TON, а затем бросить вызов и занять место среди топовых мем-монет на всех блокчейн-платформах. Мы объединяем веселье, эксперименты и страсть к криптоинновациям.', 'Наша токеномика — это эксперимент и вызов системе. Мы планируем выкупать токен $TONY независимо от его цены, чтобы сохранить его курс. Этот проект создан не ради наживы, а для комьюнити, веселья и проверки, что будет, если никто не будет продавать токен. Это наш способ доказать силу единства и доверия.', 'На данный момент токен $TONY доступен только через мемпад Blum, но это лишь начало. Скоро мы выйдем на децентрализованные биржи (DEX), чтобы каждый мог легко присоединиться к нашему проекту. Следите за обновлениями!', `Этап 1: Достижение топовых позиций в мемпаде Blum.
<br><br>
Этап 2: Выход на децентрализованные биржи (DEX).
<br><br>
Этап 3: Активная маркетинговая кампания для роста узнаваемости.
<br><br>
Этап 4: Листинг на централизованных биржах (CEX).`];

const textArray = document.querySelectorAll('section .text p');

const langSwitcher = document.querySelector('#lang');

const langToggle = document.querySelector('#lang-toggle');

function switchLanguage() {
    // Проверяем текущий язык и переключаем
    const currentLang = langSwitcher.dataset.lang; // Данные хранят текущий язык
    const newLang = currentLang === 'eng' ? 'ru' : 'eng';
    langSwitcher.dataset.lang = newLang; // Обновляем текущий язык

    // Выбираем соответствующий массив текста
    const selectedText = newLang === 'eng' ? engText : ruText;

    // Обновляем текст в секциях
    textArray.forEach((element, index) => {
        element.innerHTML = selectedText[index];
    });
}

const navTextEng = ['Home', 'About', 'Tokenomics', 'How to Buy', 'Roadmap'];
const navTextRu = ['Главная', 'О проекте', 'Токеномика', 'Как купить', 'Роадмап'];

const navItems = document.querySelectorAll('.nav-list_item');

langToggle.addEventListener('change', () => {
    const lang = langToggle.checked ? 'ru' : 'eng'; // Проверяем, какой язык выбран
    switchLanguage(lang);
    updateNavText(lang);
    updateHText(lang);
});

function updateNavText(lang) {
    const navText = lang === 'ru' ? navTextRu : navTextEng;
    navItems.forEach((item, index) => {
        item.textContent = navText[index];
    });
}

const hTextEng = ['Welcome to Tony world', 'About project', 'Tokenomics', 'How to Buy', 'Roadmap'];
const hTextRu = ['Добро пожаловать в мир Tony', 'О проекте', 'Токеномика', 'Как купить', 'Роадмап'];

const hItems = document.querySelectorAll('section .text h2');

function updateHText(lang) {
    const hText = lang === 'ru' ? hTextRu : hTextEng;
    hItems.forEach((item, index) => {
        item.textContent = hText[index];
    });
}

// Инициализация начального языка
langSwitcher.dataset.lang = 'eng'; // Установить начальный язык
    