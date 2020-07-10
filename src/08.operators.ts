interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // "name" | "age"

let key1: PersonKeys = "name";
let key2: PersonKeys = "age";



// ------------------ //
type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
}

type UserKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt">; // "name" | "email"
type UserKeysNoMeta2 = Pick<User, "name" | "email">; // "name" | "email"



// from handbook  IS
function isFish2(pet: string | number): pet is string {
  return pet as string !== undefined;
}

type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"

type T02 = Exclude<string | number | (() => void), Function>;  // string | number
type T03 = Extract<string | number | (() => void), Function>;  // () => void

type T04 = NonNullable<string | number | undefined>;  // string | number
type T05 = NonNullable<(() => string) | string[] | null | undefined>;  // (() => string) | string[]

function f1(s: string) {
    return { a: 1, b: s };
}

class C {
    x = 0;
    y = 0;
}

type T10 = ReturnType<() => string>;  // string
type T11 = ReturnType<(s: string) => void>;  // void
type T12 = ReturnType<(<T>() => T)>;  // {}
type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type T14 = ReturnType<typeof f1>;  // { a: number, b: string }
type T15 = ReturnType<any>;  // any
type T16 = ReturnType<never>;  // never
// type T17 = ReturnType<string>;  // Error
// type T18 = ReturnType<Function>;  // Error

type T20 = InstanceType<typeof C>;  // C
type T21 = InstanceType<any>;  // any
type T22 = InstanceType<never>;  // never
// type T23 = InstanceType<string>;  // Error
// type T24 = InstanceType<Function>;  // Error

