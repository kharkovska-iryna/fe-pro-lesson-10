// 1. Создаем функцию-конструктор Vehicle, который принимает параметры model и year. 

// 2. У прототипа Vehicle реализуем методы: 

// start, который возвращает строку "The engine has been started"
// end, который возвращает строку "Engine was off"
// toString, который возвращает `The model is ${model}. Release year ${year}`
// 3. Создаем функцию-конструктор Car, которая принимает параметры model и year, и наследуется от функции-конструктора Vehicle. Внутри Car создаем переменную numWheels, которая равна 4.

// В прототип Car копируем все методы, которые есть у функции Vehicle. То есть ей должны быть доступны start, end, toString.

// 4. Создаем функцию-конструктор Motorcycle, которая принимает параметры model и year, и наследуется от функции-конструктора Vehicle. Внутри Motorcycle создаем переменную numWheels, которая равна 2.

// В прототип Motorcycle копируем все методы, которые есть у функции Vehicle. То есть ей должны быть доступны start, end, toString.

// 5. Используя оператор new создаем объект car и motorcycle. И вызываем их методы


function Vechicle(model, year) {
	this.model = model,
	this.year = year
};


Vechicle.prototype.start = function() {
	return "The engine has been started";
};
Vechicle.prototype.end = function() {
	return "Engine was off";
};
Vechicle.prototype.toString = function() {
	return "The model is" + " " + this.model + "." + " " + "Release year" + " " + this.year;
};

function Car(model, year) {
	Vechicle.call(this, model, year),
	this.numWheels = 4
};

Car.prototype = Object.create(Vechicle.prototype);
Car.prototype.constructor = Car;


let car = new Car('Tesla', 2020);
console.log(car.model);
console.log(car.year);
console.log(car.numWheels);
console.log(car.start());
console.log(car.end());
console.log(car.toString());


function Motorcycle(model, year) {
	Vechicle.call(this, model, year),
	this.numWheels = 2
};
Motorcycle.prototype = Object.create(Vechicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;


let motorcycle = new Motorcycle('Suzuki', 2006);
console.log(motorcycle.model);
console.log(motorcycle.year);
console.log(motorcycle.numWheels);
console.log(motorcycle.start());
console.log(motorcycle.end());
console.log(motorcycle.toString());

Vechicle.call(this, model, year);