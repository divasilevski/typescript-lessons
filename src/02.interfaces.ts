interface Rect {
  readonly id: string;
  color?: string; // optional property
  size: {
    width: number;
    height: number;
  }
}

const rect1: Rect = {
  id: "1234",
  size: {
    width: 20,
    height: 30
  },
  color: "#ccc"
}

const rect2: Rect = {
  id: "4321",
  size: {
    width: 10,
    height: 5
  }
}
 
rect2.color = "black";

const rect3 = {} as Rect;
const rect4 = <Rect>{};



// EXTENDS another interface
interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "1212",
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
}



// IMPLEMENTS class
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}



// [key: type]
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
  borderRadius: "5px"
}



// From handbook
let ro1: ReadonlyArray<number> = [1, 2, 3, 4];
let ro2 = ro1 as number[];


interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
}


interface StringArray {
  [index: number]: string;
}
let myArray: StringArray = ["Bob", "Fred"];
let myStr: string = myArray[0];


interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number;    // ok, length is a number
  name: string;      // ok, name is a string
}


interface ClockConstructor {
  new (hour: number, minute: number): any;
}
interface ClockInterface {
  tick() : void
}
const ClockNotStatic: ClockConstructor = class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
      console.log("beep beep");
  }
}