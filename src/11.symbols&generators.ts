let sym1 = Symbol();

let sym2 = Symbol("key"); // optional string key
let sym3 = Symbol("key");

sym2 === sym3; // false, symbols are unique

let obj = { [sym1]: "value" };

class CCC {
  [sym1](){ // computed property
     return "CCC";
  }
}

let ccc:any = new CCC();
let className = ccc[sym1](); // "C"