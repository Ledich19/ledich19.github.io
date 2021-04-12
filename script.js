'use strict'
const answers = document.querySelector('.wrapper_answer');
const
    PYTHON = [ 'icon-python', 'PYTHON', 'Энт', 1, './Images/ent.jpg', 'Помогает иаленьким хоббитам (начинающим) разобратся в принцыпах програмированияю.<br> Помогает магам (ученым програмистам) проводить иследования ',4, 'Youtube, Instagram, Spotify'],
    JAVA = ['icon-java', 'JAVA', 'Гендальф', 3, './Images/gen.jpg', 'Несет мир и работает везде кросплатформенный', 5 , 'mail, Minecraft, Большынство Android приложений, корпоративные приложения'],
    C = ['icon-c', 'C', 'Кольцо', 3, './Images/ring.jpg', 'Сила С известна всем <br> все хотят обладать этой силой',5, 'Операционные системы и оборудование'],
    PHP = [ 'icon-php', 'PHP',2 , 'Орк', './Images/orc.jpg', 'Малопривлекательный парень (язык).Не уважает правила (противоречив и непредсказуем) <br> Да все еще доминирует в Средеземье (Самый популярный язык для Web разработки)', 4,'Wordpres, Wikipedia'],
    CPLUSPLUS = ['icon-cplusplus', 'C++', 'Саруман',4, './Images/sarjpg.jpg', 'Все думают что он отличный парень <br> Но стоит узнать его полутше, становится ясно его интересует могущество, а не добрые дела',4,'Операционные системы, оборудование и браузеры' ],
    JAVASCRIPT = ['icon-javascript','JAVASCRIPT', 'Хоббит',2, './Images/hob.jpg', 'Немного обрезаный (в плане мощности) <br> Известен своей спокойной размеренной в Шыре (web браузере)',4, 'Paypal, front-end', 'большинства сайтов'],
    CSHARP = ['icon-csharp', 'C#', 'Эльф', 3,'./Images/fary.jpg', 'Прекрасные создания (язык) жили в своей стране Ривенделл (платформа Microsoft). Однако, совсем недавно, открыли свое общество для соседей (open sourse)'],
    RUBY = ['icon-rubygems', 'RUBY', 'Человек(Средеземье)',2 ,'./Images/hum.jpg','Очень эмоциональное создание <br> Уверены что они (Некоторые Ruby разработчики) особенные, и должны управлять Средеземьем', 3, 'Hulu, Groupon, Slideshare'],
    SWIFT = ['icon-swift', 'SWIFT', 'Смауг', 3, './Images/smoug.jpg', 'Одинок и алчен', 3, 'Большынство IOS приложений и Mac OS']

class Info {
    constructor(
        icon,
        name,
        personage,
        complexity,
        photo,
        descr,
        popularity,
        usedBy
    ) {
        this.icon = icon;
        this.name = name;
        this.personage = personage;
        this.complexity = complexity;
        this.photo = photo;
        this.descr = descr;
        this.popularity = popularity;
        this.usedBy = usedBy;
        this.complexity = this.createComplexity();
        this.popularity = this.createPopularity();
    }
    createCard() {
        document.querySelector('.queshtion').innerHTML = this.name;
        answers.innerHTML = `
            <div class="info">
                <span class="${this.icon} info_icon"></span>
                <div class="info_header">
                    <div class="info_header_name">${this.name}<br><span>${this.personage}</span></div>
                    <div class="info_header_complexityy">${this.complexity}</div>
                </div>
                <img src=${this.photo} alt="${this.personage}">
                <div class="info_descr">${this.descr}</div>
                <div class="info_footer">
                    <div class="popularity"><span>Популярность </span>${this.popularity}</div>
                    <div class="usedBy"><span>Используется в:<br></span>${this.usedBy}</div>
                </div>
                `
    }
    createComplexity() {
        let element = '';
        for (let index = 0; index < this.complexity; index++) {
            element += '&#9733;';
        }
        for (let index = 0; index < 5 - this.complexity; index++) {
            element += '&#9734;';
        }
        return (element)
    }

    createPopularity() {
        let element = '';
        for (let index = 0; index < this.popularity; index++) {
            element += '&#9733;';
        }
        for (let index = 0; index < 5 - this.popularity; index++) {
            element += '&#9734;';
        }
        return (element)
    }
}


function createQueshtion(queshtion, ...answer) {
    document.querySelector('.queshtion').innerHTML = `${queshtion}`;
    console.log(...answer);

    answer.forEach(e => {
        answers.insertAdjacentHTML('beforeend', `<a class="answer">${e}</a>`);
    });
}

answers.addEventListener('click', (e) => {
    if (e.target.classList.contains('answer')) {
        e.preventDefault()
        console.log(e.target.text);
        answers.innerHTML = '';
        sww(e.target.text);
    }
    console.log(e);
})


function sww(params) {
    if (params == 'Для своих детей') {
        new Info(...PYTHON).createCard();
    } else if (params == 'Найти работу') {
        createQueshtion('Платформа/Область?', 'Хочу работать в большой технической компании', 'Мне все равно просто хочу $$$', 'WEB', 'Энтерпрайз', 'Мобильные', '3D/Игры');
    } else if (params == 'Идея стартапа') {
        createQueshtion('Под какую платформу?', 'под WEB', 'Энтерпрайз', 'Мобильные', '3D/Игры');
    } else if (params == 'Я не знаю, просто посоветуйте мне') {
        new Info(...PYTHON).createCard();
    } else if (params == 'Просто так') {
        createQueshtion('Придумали отличную идею?', 'Нет просто хочу начать', 'Да есть идея');
    } else if (params == 'Мне интересно') {
        createQueshtion('Придумали отличную идею?', 'Нет просто хочу начать', 'Да есть идея');
    } else if (params == 'Проверить себя') {
        createQueshtion('Придумали отличную идею?', 'Нет просто хочу начать', 'Да есть идея');
    } else if (params == 'Хочу работать в большой технической компании') {
        createQueshtion('Какой?', 'Фейсбук', 'Виндовс', 'Гугл', 'яблоко');
    } else if (params == 'Мне все равно просто хочу $$$') {
        new Info(...JAVA).createCard();
    } else if (params == 'WEB') {
        createQueshtion('Какоое направление ?', 'backend', 'frontend');
    } else if (params == 'Энтерпрайз') {
        createQueshtion('Как вы относитесь к майкрософт', 'Фанат', 'Ну норм...', 'Отстой');
    } else if (params == 'Мобильные') {
        createQueshtion('Какая ОС', 'IOS', 'Android');
    } else if (params == '3D/Игры') {
        new Info(...CPLUSPLUS).createCard();
    } else if (params == 'Фейсбук') {
        new Info(...PYTHON).createCard();
    } else if (params == 'Виндовс') {
        new Info(...CSHARP).createCard();
    } else if (params == 'Гугл') {
        new Info(...PYTHON).createCard();
    } else if (params == 'яблоко') {
        new Info(...SWIFT).createCard();
    } else if (params == 'backend') {
        createQueshtion('Хочу работать в ...', 'Корпорации', 'Стартапе');
    } else if (params == 'frontend') {
        new Info(...JAVASCRIPT).createCard();
    } else if (params == 'Корпорации') {
        createQueshtion('Как вы относитесь к майкрософт', 'Фанат', 'Ну норм...', 'Отстой');
    } else if (params == 'Стартапе') {
        createQueshtion('Хотите опробовать чтото новое с большим потенциалом, но менее надежное', 'Да', 'Нет', 'Не уверен');
    } else if (params == 'Фанат') {
        new Info(...CSHARP).createCard();
    } else if (params == 'Ну норм...') {
        new Info(...JAVA).createCard();
    } else if (params == 'Отстой') {
        new Info(...JAVA).createCard();
    } else if (params == 'да') {
        new Info(...JAVASCRIPT).createCard();
    } else if (params == 'нет') {
        createQueshtion('Ваша любимая игрушка', 'Lego', 'Пластилин', 'У меня старая уродливая игрушка но я ее обожаю');
    } else if (params == 'Не уверен') {
        createQueshtion('Ваша любимая игрушка', 'Lego', 'Пластилин', 'У меня старая уродливая игрушка но я ее обожаю');
    } else if (params == 'Lego') {
        new Info(...PYTHON).createCard();
    } else if (params == 'Пластилин') {
        new Info(...RUBY).createCard();
    } else if (params == 'IOS') {
        new Info(...SWIFT).createCard();
    } else if (params == 'Android') {
        new Info(...JAVA).createCard();
    } else if (params == 'под WEB') {
        createQueshtion('Ваше приложение работает в реальном времени , как твитер ?', 'да', 'Не так');
    } else if (params == 'Не так') {
        createQueshtion('Хотите опробовать чтото новое с большим потенциалом, но менее надежное', 'Да', 'Нет', 'Не уверен');
    } else if (params == 'У меня старая уродливая игрушка но я ее обожаю') {
        new Info(...PHP).createCard();
    } else if (params == 'Нет просто хочу начать') {
        createQueshtion('Предпочитаю учить новое', 'по быстрому', 'Правильно', 'Немного попотеть', 'Самым сложным путем (но так, чтобы была отличная база для перехода на другой язык в будуещем)');
    } else if (params == 'Да есть идея') {
        createQueshtion('Под какую платформу?', 'под WEB', 'Энтерпрайз', 'Мобильные', '3D/Игры');
    } else if (params == 'по быстрому') {
        new Info(...PYTHON).createCard();
    } else if (params == 'Правильно') {
        new Info(...PYTHON).createCard();
    } else if (params == 'Немного попотеть') {
        createQueshtion('Автоматическая или механическая КПП', 'Авто', 'Мех');
    } else if (params == 'Самым сложным путем (но так, чтобы была отличная база для перехода на другой язык в будуещем)') {
        new Info(...CPLUSPLUS).createCard();
    } else if (params == 'Авто') {
        new Info(...JAVA).createCard();
    } else if (params == 'Мех') {
        new Info(...C).createCard();
    }
}

createQueshtion('Почему вы решыли изучать програмиррование ?', 'Для своих детей', 'Найти работу', 'Идея стартапа', 'Я не знаю, просто посоветуйте мне', 'Просто так', 'Мне интересно', 'Проверить себя');