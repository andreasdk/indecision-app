class Person {
	constructor(name = 'Anonymous', age = 0) {
		this.name = name;
		this.age = age;
	}
	getGreeting() {
		//return 'Hi. I am ' + this.name + '!';
		return `Hi. I am ${this.name}!`;
	}
	getDescription() {
		return 	`${this.name} is ${this.age} year(s) old.`
	}
}

class Student extends Person {
	constructor(name, age, major) {
		super(name, age);
		this.major = major;
	}
	hasMajor() {
		return !!this.major;
	}
	getDescription() {
		let description = super.getDescription();

		if (this.hasMajor()) {
			description += ` Their major is ${this.major}`;
		}
		return description;
	}
}

class Traveller extends Person {
	constructor(name, age, hometown) {
		super(name, age);
		this.hometown = hometown;
	}
	homeLocation() {
		return !!this.hometown;
	}
	getGreeting() {
		let greeting = super.getGreeting();

		if (this.homeLocation()) {
			greeting += ` I'm visiting from ${this.hometown}`;
		}
		return greeting;
	}
}

const me = new Traveller('Andrew Kennedy', 29, 'Dublin');

console.log(me.getGreeting());


const other = new Traveller();
console.log(other.getGreeting());

