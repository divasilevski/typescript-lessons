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