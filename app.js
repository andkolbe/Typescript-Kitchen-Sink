var myName = 'Andrew';
var numOfStates = 50;
var nine = 5 + 4;
var sayHello = function () {
    alert('Hello World!');
};
sayHello();
var checkAge = function (name, age) {
    if (age < 21)
        alert("Sorry " + name + ", you aren't old enough to view this page!");
};
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
var veggies = ['squash', 'kohlrabi', 'cabbage', 'corn', 'mustard greens'];
for (var _i = 0, veggies_1 = veggies; _i < veggies_1.length; _i++) {
    var veggie = veggies_1[_i];
    console.log(veggie);
}
var pet = {
    name: 'Odin',
    breed: 'Mutt'
};
console.log(pet.name, pet.breed);
var people = [
    {
        name: 'Kyle',
        age: 45
    },
    {
        name: 'Kelsey',
        age: 12
    },
    {
        name: 'Jonah',
        age: 32
    },
    {
        name: 'Omar',
        age: 65
    },
    {
        name: 'Jack',
        age: 88
    }
];
for (var _a = 0, people_1 = people; _a < people_1.length; _a++) {
    var person = people_1[_a];
    checkAge(person.name, person.age);
}
var getLength = function (word) {
    return word.length;
};
var helloWorld = getLength('Hello World');
helloWorld % 2 ? console.log('The world is nice and even!') : console.log('The world is an odd place!');
