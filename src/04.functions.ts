function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}



interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

function position(): MyPosition;
function position(a: number): MyPosition | MyPositionWithDefault;
function position(a: number, b: number): MyPosition;

function position(a?: number, b?: number) {
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString() };
  }

  return { x: a, y: b };
}

console.log("Empty ", position());
console.log("One param ", position(7));
console.log("Two param ", position(7, 14));



// From handbook
function buildName1(firstName: string, lastName?: string) { }  // optional parameters

function buildName2(firstName: string, ...restOfName: string[]) { // rest parameters
  return firstName + " " + restOfName.join(" ");
}

function f(this: void) { } // make sure `this` is unusable in this standalone function

interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card; // this Deck / we can transfer context to func
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

interface UIElement { // callback example | this is optional
  addClickListener(onclick: (this: void, e: Event) => void): void;
}