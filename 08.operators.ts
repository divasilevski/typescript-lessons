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
