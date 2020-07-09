class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string){
    return `[${name}]: Typescript version is ${this.version}`
  }
}



//---------------//
// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

// === //

class Car {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {}
}



//---------------//
class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    this.go();
  }

  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice("Nya")
console.log(cat.color);
//cat.voice // error



// ABSTRACT classes
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render")
  }

  info(): string {
    return "This is info!"
  }
}



// From handbook
class Animal2 {
  name: string;
  constructor(theName: string) { this.name = theName; }
  move(distanceInMeters: number = 0) {
      console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal2 {
  constructor(name: string) { super(name); }
  move(distanceInMeters = 5) {
      console.log("Slithering...");
      super.move(distanceInMeters);
  }
}


class Animal3 {
  #name: string; // private #
  constructor(theName: string) { this.#name = theName; }
}


class Person5 {
  static payment: number = 5000;
  protected name5: string;
  protected constructor(theName: string) { this.name5 = theName; } // but we have ascess in expendng classes
}


class Employee5 {
  private _fullName: string = "Default Employee";

  get fullName(): string {
      return this._fullName;
  }

  set fullName(newName: string) {
      if (newName && newName.length > 10) {
          throw new Error("fullName has a max length of " + 10);
      }
      
      this._fullName = newName;
  }
}


