// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// function Tag(name, description) {
//     this.name = name;
//     this.description = description;
//     this.attributes = [];
//
//     this.addAttribute = (title, description) => {
//         let attribute = {title: title, description: description};
//         this.attributes.push(attribute);
//     }
// }
//
// let aTag = new Tag('Тег <a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. ');
// aTag.addAttribute('href', 'Задает адрес документа, на который следует перейти.');
// aTag.addAttribute('name', 'Устанавливает имя якоря внутри документа.');
//
// let divTag = new Tag('Тег <div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.')
// divTag.addAttribute('align', 'Задает выравнивание содержимого тега <div>.');
// divTag.addAttribute('title', 'Добавляет всплывающую подсказку к содержимому.');
//
// let h1Tag = new Tag('Тег <h1>', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.')
// h1Tag.addAttribute('align', 'Определяет выравнивание заголовка.');
//
// let spanTag = new Tag('Тег <span>', 'Тег <span> предназначен для определения строчных элементов документа.');
// spanTag.addAttribute('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.');
// spanTag.addAttribute('contextmenu', 'Устанавливает контекстное меню для элемента.');
//
// let inputTag = new Tag('Тег <input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.')
// inputTag.addAttribute('autocomplete', 'Включает или отключает автозаполнение.');
// inputTag.addAttribute('autofocus', 'Устанавливает фокус в поле формы.');
//
// let formTag = new Tag('Тег <form>', 'Тег <form> устанавливает форму на веб-странице.');
// formTag.addAttribute('action', 'Адрес программы или документа, который обрабатывает данные формы.');
// formTag.addAttribute('method', 'Метод протокола HTTP');
//
// let optionTag = new Tag('Тег <option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ')
// optionTag.addAttribute('disabled', 'Заблокировать для доступа элемент списка.');
// optionTag.addAttribute('label', 'Указание метки пункта списка.');
//
// let selectTag = new Tag('Тег <select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.')
// selectTag.addAttribute('size', 'Количество отображаемых строк списка.');
// selectTag.addAttribute('tabindex', 'Определяет последовательность перехода между элементами при нажатии на клавишу');
//
// console.log(aTag, divTag, h1Tag, spanTag);
// console.log(inputTag, formTag, optionTag, selectTag);



// ==============================================
//     -  Створити класс  для об'єкту який описує теги
// Властивості
// -назва тегу
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результату
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// ==============================================
// class Tag {
//     constructor(name, description) {
//         this.name = name;
//         this.description = description;
//         this.attributes = [];
//     }
//
//     addAttribute(title, description) {
//         let newAttr = {title: title, description: description};
//         this.attributes.push(newAttr);
//     }
// }
// let aTag = new Tag('Тег <a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. ');
// aTag.addAttribute('href', 'Задает адрес документа, на который следует перейти.');
// aTag.addAttribute('name', 'Устанавливает имя якоря внутри документа.');
//
// let divTag = new Tag('Тег <div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.')
// divTag.addAttribute('align', 'Задает выравнивание содержимого тега <div>.');
// divTag.addAttribute('title', 'Добавляет всплывающую подсказку к содержимому.');
//
// let h1Tag = new Tag('Тег <h1>', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.')
// h1Tag.addAttribute('align', 'Определяет выравнивание заголовка.');
//
// let spanTag = new Tag('Тег <span>', 'Тег <span> предназначен для определения строчных элементов документа.');
// spanTag.addAttribute('accesskey', 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.');
// spanTag.addAttribute('contextmenu', 'Устанавливает контекстное меню для элемента.');
//
// let inputTag = new Tag('Тег <input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.')
// inputTag.addAttribute('autocomplete', 'Включает или отключает автозаполнение.');
// inputTag.addAttribute('autofocus', 'Устанавливает фокус в поле формы.');
//
// let formTag = new Tag('Тег <form>', 'Тег <form> устанавливает форму на веб-странице.');
// formTag.addAttribute('action', 'Адрес программы или документа, который обрабатывает данные формы.');
// formTag.addAttribute('method', 'Метод протокола HTTP');
//
// let optionTag = new Tag('Тег <option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. ')
// optionTag.addAttribute('disabled', 'Заблокировать для доступа элемент списка.');
// optionTag.addAttribute('label', 'Указание метки пункта списка.');
//
// let selectTag = new Tag('Тег <select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.')
// selectTag.addAttribute('size', 'Количество отображаемых строк списка.');
// selectTag.addAttribute('tabindex', 'Определяет последовательность перехода между элементами при нажатии на клавишу');
//
// console.log(aTag, divTag, h1Tag, spanTag);
// console.log(inputTag, formTag, optionTag, selectTag);



// ==============================================
//     - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// let car = {model: "Tesla Model S", producer: "Japan", year: '1999', maxSpeed: 220, engineVolume: 3.5, driver: null,
//     drive() {
//         console.log(`We are going with the speed of ${this.maxSpeed} kilometers per hour`);
//     },
//     info() {
//         console.log(`The model of the car is ${this.model}\nThe manufacturer is ${this.producer}\n
//         This car was produced in ${this.year}\nIts max speed is ${this.maxSpeed}\nEngine volume is ${this.engineVolume}`)
//     },
//     increaseMaxSpeed(newSpeed) {this.maxSpeed += newSpeed} ,
//     changeYear(newYear) {this.year = newYear},
//     addDriver(driver) {this.driver = driver},
// }
// car.addDriver({name: "Ruslan", age: 20})
// console.log(car);


// ==============================================
//     - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car(model, producer, productionYear, maxSpeed, engineVolume) {
//     this.model = model;
//     this.producer = producer;
//     this.productionYear = productionYear;
//     this.engineVolume = engineVolume;
//     this.maxSpeed = maxSpeed;
//     this.driver = null;
//
//     this.drive = () => {
//         console.log(`We are going at speed of ${this.maxSpeed} kilometers per hour`);
//     }
//
//     this.info = () => {
//         console.log(`The model of the car is ${this.model}\nThe manufacturer is ${this.producer}\n
//         This car was produced in ${this.productionYear}\nIts max speed is ${this.maxSpeed}\nEngine volume is ${this.engineVolume}`)
//     }
//
//     this.changeYear = (newYear) => {
//         this.productionYear = newYear;
//     }
//
//     this.addDriver = driver => {
//         if (typeof driver === 'object') {
//             this.driver = driver;
//             return
//         }
//         console.log("Please add the 'object' type as a parameter")
//     }
//
//
//     this.increaseMaxSpeed = (value) => {
//         this.maxSpeed += value;
//     }
// }
// let mitsubishi = new Car('Elantra', 'China', '1999', 220, '3.5');
// console.log(mitsubishi);
// mitsubishi.addDriver({name: "Ruslan", age: 20, driver: false})
// console.log(mitsubishi);


// ==============================================
//     - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// class Car {
//     constructor(model, producer, productionYear, maxSpeed, engineVolume) {
//         this.model = model;
//         this.producer = producer;
//         this.productionYear = productionYear;
//         this.engineVolume = engineVolume;
//         this.maxSpeed = maxSpeed;
//         this.driver = null;
//     }
//
//     drive() {
//         console.log(`We are going at speed of ${this.maxSpeed} kilometers per hour`);
//     }
//
//     info() {
//         console.log(`The model of the car is ${this.model}\nThe manufacturer is ${this.producer}\n
//         This car was produced in ${this.productionYear}\nIts max speed is ${this.maxSpeed}\nEngine volume is ${this.engineVolume}`)
//     }
//
//     set changeYear(newYear) {
//         this.productionYear = newYear;
//     }
//
//     addDriver(driver) {
//         if (typeof driver === 'object') {
//             this.driver = driver;
//             return
//         }
//         console.log("Please add the 'object' type as a parameter")
//     }
//
//
//     set increaseMaxSpeed(value) {
//         this.maxSpeed += value;
//     }
// }
//
// let mitsubishi = new Car('Elantra', 'China', '1999', 220, '3.5');
// console.log(mitsubishi);
// mitsubishi.addDriver({name: "Ruslan", age: 20, driver: false})
// console.log(mitsubishi);


// ==============================================
//     -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================
// class Popelyushka {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let popelArray = [new Popelyushka("Roksolana", 18, 38), new Popelyushka("Marianna", 20, 37),
//     new Popelyushka("Katya", 23, 40), new Popelyushka("Marina", 28, 37), new Popelyushka("Iolanta", 34, 42)
// ,new Popelyushka("Olena", 18, 38), new Popelyushka("Ksenia", 18, 38), new Popelyushka("Anya", 16, 36)]
//
// let prince = {name: "Oleg", age: 23, tuffelSize: 36};
// for (const popelyushka of popelArray) {
//     if (popelyushka.footSize === prince.tuffelSize) {
//         console.log("The name of the prince's popelyushka is " + popelyushka.name);
//         break;
//     }
// }


// ==============================================
//     -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================
// function Popelyushka(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }
// let popelArray = [new Popelyushka("Roksolana", 18, 38), new Popelyushka("Marianna", 20, 37),
//     new Popelyushka("Katya", 23, 40), new Popelyushka("Marina", 28, 37), new Popelyushka("Iolanta", 34, 42)
// ,new Popelyushka("Olena", 18, 38), new Popelyushka("Ksenia", 18, 38), new Popelyushka("Anya", 16, 36)]
//
// function Prince(name, age, tuffelSize) {
//     this.name = name;
//     this.age = age;
//     this.tuffelSize = tuffelSize;
//
//     this.searchForPopelyushka = (array) => {
//         for (const popelyushka of array) {
//             if (popelyushka.footSize === prince.tuffelSize) {
//                 console.log("The name of the prince's popelyushka is " + popelyushka.name);
//                 break;
//             }
//         }
//     }
// }
// let prince = new Prince("Roman", 20, 37);
// prince.searchForPopelyushka(popelArray);

