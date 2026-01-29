const questions = [
  {
    id: 1,
    text: 'Начнем с главного. Галерея в твоем телефоне — это...',
    options: [
      { text: '10 000+ фоток, и 90% из них — это я (ну, может, еще мой питомец).', points: 10 },
      { text: 'Документы и скриншоты переписок.', points: 2 },
      { text: 'Теплые сердцу воспоминания о поездках и селфи.', points: 5 },
      { text: 'Только самое нужное.', points: 1 },
      { text: 'Скриншоты карт, видео с крутыми местами для посещения в новой стране и много-много достопримечательностей.', points: 6 },
    ],
  },
  {
    id: 2,
    text: 'Зачем тебе камера?',
    options: [
      { text: 'Снимать видео в 4K и делать самые красивые фото.', points: 10, image: 'https://cdn.poehali.dev/projects/2c16233a-d920-45af-aa57-1586918a652b/files/ecca2e5d-6ed9-4b04-8a8f-16bcbfbb97e9.jpg' },
      { text: 'Какая камера? Я звоню и переписываюсь по нему.', points: 2, image: 'https://cdn.poehali.dev/projects/2c16233a-d920-45af-aa57-1586918a652b/files/c28bcebb-a37a-4bb9-80e1-5d5783143361.jpg' },
      { text: 'Чтобы фоткать любимых и делать эстетичные кадры для Пинтерест.', points: 5, image: 'https://cdn.poehali.dev/projects/2c16233a-d920-45af-aa57-1586918a652b/files/0252c258-4442-4795-b196-8e0a20eeec85.jpg' },
      { text: 'Фотографировать счетчики и сохранять мемы.', points: 1, image: 'https://cdn.poehali.dev/projects/2c16233a-d920-45af-aa57-1586918a652b/files/454edac8-ff02-4e99-b959-55a0bcf570be.jpg' },
      { text: 'Чтобы запечатлеть каждое мгновение путешествия.', points: 6, image: 'https://cdn.poehali.dev/projects/2c16233a-d920-45af-aa57-1586918a652b/files/f4c5c32c-b045-448e-84c3-12e1177e1ca9.jpg' },
    ],
  },
  {
    id: 3,
    text: 'Какой размер экрана предпочитаешь?',
    options: [
      { text: 'Большой! Чем больше, тем лучше для контента.', points: 10, image: 'https://cdn.poehali.dev/projects/2c16233a-d920-45af-aa57-1586918a652b/files/a192728f-e13c-4759-99d8-11e29cb5aed4.jpg' },
      { text: 'Обычный, лишь бы в карман влезал.', points: 2, image: 'https://cdn.poehali.dev/projects/2c16233a-d920-45af-aa57-1586918a652b/files/f478e2b8-d548-49b7-9831-3ae8233ed82a.jpg' },
      { text: 'Средний — золотая середина между удобством и размером.', points: 5, image: 'https://cdn.poehali.dev/projects/2c16233a-d920-45af-aa57-1586918a652b/files/bdb1b754-541c-4dd2-a12c-4da011f6fbce.jpg' },
      { text: 'Компактный, я минималист.', points: 1, image: 'https://cdn.poehali.dev/projects/2c16233a-d920-45af-aa57-1586918a652b/files/5bc95dfb-914a-445c-b8ab-b1a189750dcb.jpg' },
      { text: 'Не важно, главное чтоб фотки были четкие.', points: 6, image: 'https://cdn.poehali.dev/projects/2c16233a-d920-45af-aa57-1586918a652b/files/4d7be84d-ead5-4edf-b274-a33e15d242e1.jpg' },
    ],
  },
  {
    id: 4,
    text: 'Как относишься к автономности?',
    options: [
      { text: 'Должен держать весь день с запасом — снимаю много видео.', points: 10 },
      { text: 'Хватит до конца дня на звонки и мессенджеры.', points: 2 },
      { text: 'Важно, чтоб не подводил в течение дня.', points: 5 },
      { text: 'Всегда рядом с розеткой, не проблема.', points: 1 },
      { text: 'Нужен мощный аккумулятор — я постоянно в движении.', points: 6 },
    ],
  },
  {
    id: 5,
    text: 'Что важнее всего в телефоне?',
    options: [
      { text: 'Камера и производительность — я создатель контента.', points: 10 },
      { text: 'Надежность и стабильность работы.', points: 2 },
      { text: 'Баланс цены и качества.', points: 5 },
      { text: 'Простота использования.', points: 1 },
      { text: 'Универсальность — должен справляться со всем.', points: 6 },
    ],
  },
];

const results = [
  {
    range: [0, 12],
    emoji: '🧘',
    title: 'Простота и надёжность',
    description: 'Для тебя телефон — просто рабочий инструмент. Подойдут бюджетные модели с хорошей надёжностью.',
  },
  {
    range: [13, 25],
    emoji: '⚖️',
    title: 'Золотая середина',
    description: 'Ты ценишь баланс функций и цены. Средний сегмент с хорошей камерой и автономностью — твой выбор.',
  },
  {
    range: [26, 35],
    emoji: '✈️',
    title: 'Путешественник',
    description: 'Тебе нужен универсальный смартфон с отличной камерой и батареей для приключений.',
  },
  {
    range: [36, 50],
    emoji: '📸',
    title: 'Создатель контента',
    description: 'Камера и производительность — твои приоритеты. Флагманы с топовыми характеристиками созданы для тебя!',
  },
];

let currentQuestion = 0;
let totalScore = 0;
let selectedOption = null;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const progress = document.getElementById('progress');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const resultEmoji = document.getElementById('result-emoji');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');

startBtn.addEventListener('click', startQuiz);
restartBtn.addEventListener('click', resetQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.text;
    selectedOption = null;
    
    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    progress.style.width = progressPercent + '%';
    
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        
        if (option.image) {
            button.innerHTML = `
                <div class="option-with-image">
                    <div class="option-image-wrapper">
                        <img src="${option.image}" alt="" class="option-image">
                        <div class="option-check">
                            <svg class="check-icon" viewBox="0 0 24 24">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                    </div>
                    <div class="option-text-wrapper">
                        <div class="option-text">${option.text}</div>
                    </div>
                </div>
            `;
        } else {
            button.innerHTML = `
                <div class="option-without-image">
                    <div class="option-check-left">
                        <svg class="check-icon" viewBox="0 0 24 24">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </div>
                    <div class="option-text-large">${option.text}</div>
                </div>
            `;
        }
        
        button.addEventListener('click', () => handleAnswer(option.points, index, button));
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(points, index, button) {
    if (selectedOption !== null) return;
    
    selectedOption = index;
    totalScore += points;
    
    button.classList.add('selected');
    
    const allButtons = optionsContainer.querySelectorAll('.option-btn');
    allButtons.forEach(btn => btn.disabled = true);
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 800);
}

function showResult() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    const result = results.find(r => totalScore >= r.range[0] && totalScore <= r.range[1]);
    
    resultEmoji.textContent = result.emoji;
    resultTitle.textContent = result.title;
    resultDescription.textContent = result.description;
}

function resetQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    selectedOption = null;
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}