// Задайте правильные ts типы, для классических js;
// let age = 50;
// let name = 'Max';
// let toggle = true;
// let empty = null;
// let notInitialize = undefined;
// let callback = (a) => { return 100 + a };

let age: number;
age = 50;

let firstName: string;
firstName = 'Max';

let toggle: boolean;
toggle = true;

let empty: null;
empty = null;

let notInitialize: undefined;
notInitialize = undefined;

let callback = (a: number): number => { return 100 + a };

// Задавайте тип для переменной в которую можно сохранить любое значение.
// let anything = -20;
// anything = 'Text';
// anything = {};

let anything: any;
anything = -20;
anything = 'Text';
anything = {};

// Исправьте код с переменной unknown, чтобы в него можно было сохранить переменную с текстом.
// let some:unknown;
// some = 'Text';
// let str: string;
// str = some;

let some:unknown;
some = 'Text';

let str: string;

if (typeof some === 'string') {
    str = some;
}

// Сделайте неизменяемый массив со строго описанными типами. Массив для примера.
// let person = ['Max', 21];

let person: [string, number];
person = ['Max', 21];

// Опишите enum условие следующее, он должен отображать статус загрузки. Загружается (LOADING) и загружена (READY).

enum Load { 'LOADING', 'READY' };

const page = {
  load: Load.READY
}

if (page.load === Load.LOADING) {
  console.log('Страница загружается');
}
if (page.load === Load.READY) {
  console.log('Страница загружена');
}

// Сделайте переменную, которая может принимать или строку или число.

let something: string | number;

// Сделайте переменную, которая может принимать только одно значение из двух 'enable' или 'disable'

let literal: 'enable' | 'disable';

// Укажите типы для следующих функций

function showMessage(message: string): void {
  console.log(message);
}


function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error('Error');
}

// Создайте свой тип данных на основе имеющихся данных.

type DatabaseDate = {
    title: string,
    likes: number,
    accounts: string[],
    status: 'open' | 'close',
    details?: {
        createAt: Date,
        updateAt: Date,
    }
}

const page1: DatabaseDate = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: new Date('2021-01-01'),
    updateAt: new Date('2021-05-01'),
  }
}

const page2: DatabaseDate = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}