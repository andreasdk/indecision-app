const square = function (x) {
	return x * x;
};

//const squareArrow = (x) => {
//	return x * x;
//};

const squareArrow = (x) => x * x;

console.log(squareArrow(7));

//const getFirstName = (firstName, lastName) => {
//	return firstName;
//};

//const getFirstName = (firstName, lastName) => firstName;

//const getFirstName = (fullName) => {
//	return fullName.split(' ')[0];
//}

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Andrew Kennedy'));

const multiplier = {
	numbers: [2,4,6,8],
	multiplyBy: 5,
	multipy() {
		return this.numbers.map((number)=> number * this.multiplyBy );
	}

};
console.log(multiplier.multipy());