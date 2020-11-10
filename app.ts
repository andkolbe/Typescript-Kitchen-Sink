const myName: string = 'Andrew';
const numOfStates: number = 50;
const nine: number = 5 + 4;

const sayHello = () => {
    alert('Hello World!');
}
sayHello();

const checkAge = (name: string, age: number) => {
    if (age < 21) alert("Sorry " + name + ", you aren't old enough to view this page!")
}
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

const veggies: string[] = ['squash', 'kohlrabi', 'cabbage', 'corn', 'mustard greens'];
for (let veggie of veggies) {
    console.log(veggie);
}

const pet: { name: string, breed: string } = {
    name: 'Odin',
    breed: 'Mutt'
};
console.log(pet.name, pet.breed);

const people: { name: string, age: number }[] = [
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
]
for (let person of people) {
    checkAge(person.name, person.age);
}

const getLength = (word: string) => {
    return word.length;
}

const helloWorld = getLength('Hello World');

helloWorld % 2 ? console.log('The world is nice and even!') : console.log('The world is an odd place!')

