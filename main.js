// Declare user object 
const user = {
    name: 'zakaria',
    gender: 'male',
    age: 22,
    city: 'chichaoua',
    'country': 'morocco'
}

// destructe

const {name, gender, age, city, country} = user;

let phrase = `hello my name is: ${name} i'm a ${gender} gender, i'm ${age} yers old i live in ${city}, ${country}`;

console.log(phrase);