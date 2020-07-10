// Primitive data type
const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 7;
const float: number = 7.5;

const message: string = "Good job!";

const numArray1: number[] = [1, 2, 3, 4, 5];
const numArray2: Array<number> = [1, 2, 3, 4, 5]; // generic type

const words: string[] = ["Good", "Job!"];



// Intresting data type
const contact: [string, number] = ["Good", 7]; // Tuple

let variable: any = 42; // Any
variable = "String";



// Function data type
function sayGoodJob(name: string): void { // Void
  console.log(`Good job, ${name}!`);
}
sayGoodJob("Dima");

function throwError(message: string): never { // Never
  throw new Error(message);
}

function infinite(): never {
  while (true){
    //
  }
}



// Construction -- type
type Login = string;
const login: Login = "admin";

type ID = string | number;
const id1: ID = 1234;
const id2: ID = "1234";

type SomeType = string | null | undefined;



// From handbook
let hex: number = 0xf00d
let binary: number = 0b1010

let someAny: any = "Trust me, ts"
let strLength1: number = (<string>someAny).length
let strLength2: number = (someAny as string).length

let matrix: number[][]

let input = [1, 2];
let [first1, second1] = input;
let [first2, ...rest2] = [1, 2, 3, 4];
let [, second3, , fourth3] = [1, 2, 3, 4];

[first1, second1] = [second1, first1]; // swap variables

function fff([first, second]: [number, number]): void {}
fff([1, 2])

let { a1, b1 } = { a1: "baz", b1: 101 }



// From handbook Advanced types
let zoo: (Date | number | string)[] = [10, 'dsd', new Date()];


let x1 = (a: number) => 0;
let y1 = (b: number, s: string) => 0;
y1 = x1; // OK
// x1 = y1; // Error


let x2 = () => ({name: "Alice"});
let y2 = () => ({name: "Alice", location: "Seattle"});
x2 = y2; // OK
// y2 = x2; // Error, because x() lacks a location property


enum Status { Ready, Waiting };
enum Color { Red, Blue, Green };
let status01 = Status.Ready;
// status01 = Color.Green;  // Error


interface NotEmpty<T> {
  data: T;
}
let x: NotEmpty<number>;
let y: NotEmpty<string>;
// x = y;  // Error, because x and y are not compatible