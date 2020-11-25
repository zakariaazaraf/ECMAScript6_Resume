const username = 'zaaria ben salek';

const myArr = [1, 2, 7, 89, 5, 90];

let helloWorld = name =>{
    return `hellow ${name} this is from moduel function`;
}

export {
    username,
    myArr as arr,// export as alias
    helloWorld
};

let defaultOne = 'test the default module';

export default defaultOne; // THIS IS THE DEFAULT MODULE, IT COULD BE ANYTHING