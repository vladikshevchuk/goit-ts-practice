"use strict";
// Задайте правильные ts типы, для классических js;
// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };
let age;
age = 50;
let firstName;
firstName = 'Max';
let toggle;
toggle = true;
let empty;
empty = null;
let notInitialize;
notInitialize = undefined;
let callback = (a) => { return 100 + a; };
// Задавайте тип для переменной в которую можно сохранить любое значение.
// let anything = -20;
// anything = 'Text';
// anything = {};
let anything;
anything = -20;
anything = 'Text';
anything = {};
// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;
let some;
some = 'Text';
let str;
if (typeof some === 'string') {
    str = some;
}
// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
// let person = ['Max', 21];
let person;
person = ['Max', 21];
// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).
var Load;
(function (Load) {
    Load[Load["LOADING"] = 0] = "LOADING";
    Load[Load["READY"] = 1] = "READY";
})(Load || (Load = {}));
;
const page = {
    load: Load.READY
};
if (page.load === Load.LOADING) {
    console.log('Страница загружается');
}
if (page.load === Load.READY) {
    console.log('Страница загружена');
}
// Сделайте переменную, которая может принимать или строку или число.
let something;
// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'
let literal;
// Укажите типы для следующих функций
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
const page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: new Date('2021-01-01'),
        updateAt: new Date('2021-05-01'),
    }
};
const page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close',
};
