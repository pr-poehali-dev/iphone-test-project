import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Question {
  id: number;
  text: string;
  options: Array<{
    text: string;
    points: number;
  }>;
}

interface Result {
  range: [number, number];
  title: string;
  description: string;
  model: string;
}

const questions: Question[] = [
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
      { text: 'Снимать видео в 4K и делать самые красивые фото.', points: 10 },
      { text: 'Какая камера? Я звоню и переписываюсь по нему.', points: 2 },
      { text: 'Чтобы фоткать любимых и делать эстетичные кадры для Пинтерест.', points: 5 },
      { text: 'Фотографировать счетчики и сохранять мемы.', points: 1 },
      { text: 'Чтобы запечатлеть каждое мгновение путешествия.', points: 6 },
    ],
  },
  {
    id: 3,
    text: 'Какой размер экрана предпочитаешь?',
    options: [
      { text: 'Большой! Чем больше, тем лучше для контента.', points: 10 },
      { text: 'Обычный, лишь бы в карман влезал.', points: 2 },
      { text: 'Средний — золотая середина между удобством и размером.', points: 5 },
      { text: 'Компактный, я минималист.', points: 1 },
      { text: 'Не важно, главное чтоб фотки были четкие.', points: 6 },
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

const results: Result[] = [
  {
    range: [0, 12],
    title: 'iPhone 15',
    description: 'Просто база. Ты спокоен, уверен в себе и тебе вообще по барабану на гонку технологий. Ты умеешь радоваться простым вещам, практичный, спокойный и уже года два копишь на отпуск.',
    model: 'iPhone 15',
  },
  {
    range: [13, 20],
    title: 'iPhone 17',
    description: 'Не гонишься за тремя камерами, тебе нужен надежный телефон для реальных дел. Звонки, зумы, таблицы, навигатор — телефон для тебя инструмент, а не игрушка. Ты ценишь скорость, качество и сдержанный дизайн.',
    model: 'iPhone 17',
  },
  {
    range: [21, 35],
    title: 'iPhone 16 Pro',
    description: 'Ты ценишь качество во всем. Любишь красивые вещи и понимаешь в технологиях. Для тебя важен баланс между стилем и функциональностью. Твой телефон — продолжение твоего образа жизни.',
    model: 'iPhone 16 Pro',
  },
  {
    range: [36, 50],
    title: 'iPhone 16 Pro Max',
    description: 'Ты — профессионал своего дела. Снимаешь контент, путешествуешь, всегда в движении. Тебе нужно лучшее из лучшего: мощная камера, огромный экран и батарея, которая не подведет. Ты не экономишь на инструментах.',
    model: 'iPhone 16 Pro Max',
  },
];

export default function Index() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [started, setStarted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (points: number, optionIndex: number) => {
    setSelectedOption(optionIndex);
    
    setTimeout(() => {
      const newScore = score + points;
      setScore(newScore);

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 400);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setStarted(false);
    setSelectedOption(null);
  };

  const getResult = (): Result => {
    return results.find(
      (result) => score >= result.range[0] && score <= result.range[1]
    ) || results[0];
  };

  if (!started) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 md:p-12 text-center animate-fade-in border-0 shadow-xl">
          <div className="mb-8">
            <Icon name="Smartphone" size={64} className="mx-auto mb-6 text-[#87C737]" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#313434] mb-4">
              Какой ты iPhone?
            </h1>
            <p className="text-lg text-[#313434]/70">
              Ответь на 5 вопросов и узнай, какая модель iPhone подходит твоему характеру
            </p>
          </div>
          <Button
            onClick={handleStart}
            size="lg"
            className="bg-[#87C737] hover:bg-[#76b62f] text-white text-lg px-8 py-6 rounded-2xl transition-all hover:scale-105"
          >
            Начать тест
          </Button>
        </Card>
      </div>
    );
  }

  if (showResult) {
    const result = getResult();
    
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-8 md:p-12 animate-scale-in border-0 shadow-xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-[#87C737] rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Sparkles" size={40} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#313434] mb-4">
              Ты — {result.title}
            </h2>
            <p className="text-lg text-[#313434]/80 leading-relaxed mb-8">
              {result.description}
            </p>
            <div className="bg-[#87C737]/10 rounded-2xl p-6 mb-8">
              <p className="text-sm text-[#313434]/60 mb-2">Твой результат</p>
              <p className="text-2xl font-bold text-[#87C737]">{score} баллов</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={handleRestart}
              variant="outline"
              size="lg"
              className="flex-1 rounded-2xl border-2 border-[#313434]/20 hover:border-[#87C737] hover:text-[#87C737]"
            >
              <Icon name="RotateCcw" size={20} className="mr-2" />
              Пройти еще раз
            </Button>
            <Button
              size="lg"
              className="flex-1 bg-[#87C737] hover:bg-[#76b62f] text-white rounded-2xl"
            >
              <Icon name="Share2" size={20} className="mr-2" />
              Поделиться
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-[#313434]/60">
              Вопрос {currentQuestion + 1} из {questions.length}
            </span>
            <span className="text-sm font-medium text-[#87C737]">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-2 w-full bg-[#313434]/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[#87C737] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <Card className="p-8 md:p-10 animate-fade-in border-0 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-[#313434] mb-8">
            {question.text}
          </h2>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.points, index)}
                disabled={selectedOption !== null}
                className={`
                  w-full p-5 text-left rounded-2xl border-2 transition-all
                  ${
                    selectedOption === index
                      ? 'border-[#87C737] bg-[#87C737]/10 scale-[0.98]'
                      : 'border-[#313434]/10 hover:border-[#87C737] hover:bg-[#87C737]/5'
                  }
                  ${selectedOption !== null && selectedOption !== index ? 'opacity-50' : ''}
                  disabled:cursor-not-allowed
                `}
              >
                <div className="flex items-start gap-4">
                  <div className={`
                    flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center
                    ${selectedOption === index ? 'border-[#87C737] bg-[#87C737]' : 'border-[#313434]/20'}
                  `}>
                    {selectedOption === index && (
                      <Icon name="Check" size={16} className="text-white" />
                    )}
                  </div>
                  <span className="text-[#313434] text-base md:text-lg flex-1">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}