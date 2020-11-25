/*=========================================================
=================== Destructing bojects ===================
===========================================================*/




/* // Declare user object 
const user = {
    name: 'zakaria',
    gender: 'male',
    age: 22,
    city: 'chichaoua',
    'country': 'morocco',
    languages: {
        html: '90%',
        css: '80%',
        js: '76%'
    }

}

// Destructring

//const {name, gender, age, city, country} = user;

//({name, gender, age, city, country} = user) // IF THE VARIABLES WAS DECLARING BEFORE

//const {name: n, gender: g, age: a, languages: {html, css, js} } = user;

// GETTING JUST THE LANGS

const {html, css, js} = user.languages;


//let phrase = `hello my name is: ${n} i'm a ${g} gender, i'm ${a} yers old `;

let langsPhrase = `languages progress ${html} ${css} ${js}`;

console.log(langsPhrase); */



/*=========================================================
=================== Destructing Arrays ====================
===========================================================*/

/* // DESCLARING ARRAY
const arr = ['meat', 'rice', 'chicken', 'fish', 'pizza', 'burgger'];

// DESTRUCTING
//let one = "one";

//const [one, two, three, four, five, six] = arr;

// SKIPING ELEMENT
const [one, , three, four, , six] = arr;

//[one, two, three, four, five, six] = arr;


console.log(`${one}, ${four}, ${three}`);

const fruits = ['banana', 'orange', 'apple', 'avovado', ['t1', 't2', ['tt1', 'tt2']],'blackberry', 'dates'];

const [f1, , , f2, [t1, t2, [tt1, tt2]], ,dates] = fruits;

//const [f1, two, ...others] = fruits;

console.log(`Fruits: ${f1}, ${f2}, ${t1}, ${tt2}, ${dates}`);


// SWAPPING ARRAY

let book = 'book',
    table = 'table';

console.log(`Book: ${book}, Table: ${table}`);

[book, table] = [table, book];

console.log(`Book: ${book}, Table: ${table}`);
 */


/*=========================================================
================= Destructing mixed content ===============
===========================================================*/

/* const user = {
    username: 'zakaria',
    age: 23,
    city: 'Chichaoua',
    skills: {
        html: '90%',
        css: '23%',
        js: ['VueJs', 'ReactJs', 'AngularJs']
    }
}

const {username, age, city, skills: {html, css, js: [one, two, three]}} = user;

console.log(`i'm ${username} i have ${age}, and i live in ${city}`);
console.log(`my skills are ${html} ${css}, and ${one} ${two} ${three}`); */

/*=========================================================
=============== Destructing function params ===============
===========================================================*/


/* showData = (user) => {
    return `i'm ${username} i have ${age}, and i live in ${city}
my skills are ${html} ${css}, and ${one} ${two} ${three}
This lines printed by function`;
}

console.log(showData({username, age, city, skills: {html, css, js: [one, two, three]}})) */


/*=========================================================
====================== Import & Export ====================
===========================================================*/

import {username, myArr, helloWorld} from './app.js';

console.log(username);

console.log('Printing the array');

for(let item of myArr){
    console.log(item);
}

console.log(helloWorld('hamadda'));


