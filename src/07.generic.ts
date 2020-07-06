const arrayOfBumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const arrayOfStrings: Array<string> = ["Good", "job"];

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfBumbers);
reverse(arrayOfStrings);


// ADVANCED intro
const cars1: string[] = ["Ford", "Audi"];
const cars2: Array<string> = ["Ford", "Audi"];

const promise1 = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve('Promice resolved');
  }, 2000);
})

const promise2: Promise<string> = new Promise(resolve => {
  setTimeout(() => {
    resolve('Promice resolved');
  }, 2000);
})

promise2.then(data => {
  console.log(data.toUpperCase().trim());
})



// Generic extends
function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b);
}

const merged1 = mergeObjects({ name: "Dima" }, { age: 26 })
console.log(merged1.name);

const merged2 = mergeObjects({ model: "Ford" }, { year: 2010 })
console.log(merged2.model);



// has length property 
interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
  return {
    value,
    count: `В этом объекте ${value.length} символов`
  }
}



//  keyof
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: "Dima",
  age: 26
}

console.log(getObjectValue(person, 'name'))
console.log(getObjectValue(person, 'age'))
// console.log(getObjectValue(person, 'job')) !!!



// generic with class
class Collection<T> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

const strings = new Collection(['I', 'am', 'bad', 'strings'])
strings.add('!')
strings.remove('bad')
console.log(strings.items)

const numbers = new Collection([1, 2, 3])
numbers.add(5)
numbers.remove(2)
console.log(numbers.items)



// Partial and as
interface ICar {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): ICar {
  const car: Partial<ICar> = {}

  if (model.length > 3) {
    car.model = model
  }

  if (year > 2000) {
    car.year = year
  }
  return car as ICar
}


// only readonly for arrays
const cars: Readonly<Array<string>> = ['Ford', 'Audi']

const ford: Readonly<ICar> = {
  model: 'Ford',
  year: 2020
}

// ford.model = 'Ferrari' !!!