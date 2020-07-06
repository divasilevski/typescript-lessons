function Log(constructor: Function) {
  console.log(Function) // return class
}

function Log2(target: any, propName: string | Symbol) {
  console.log(target) // return constructor
  console.log(propName) // return name
}

function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log(target) // return constructor
  console.log(propName) // return logName
  console.log(descriptor) // return descriptor as object
}

@Log
class TestComponent {
  @Log2
  name: string

  @Log3
  get componentName() {
    return this.name
  }

  constructor(name: string) {
    this.name = name
  }

  @Log3
  logName(): void {
    console.log(this.name)
  }
}



// Angular component
interface IComponentDecorator {
  selector: string
  template: string
}

function AngularComponent(config: IComponentDecorator) {
  return function
    <T extends { new(...args: any[]): object }>
    (Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args)

        const el = document.querySelector(config.selector)!
        el.innerHTML = config.template
      }
    }
  }
}

function Bind(_:any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
  const original = descriptor.value

  return {
    configurable: true,
    enumerable: true,
    get() {
      return original.bind(this)
    }
  }
}

@AngularComponent({
  selector: "#card",
  template: `
  <div class="card">
    <div class="card-content">
      <span class="card-title">Card Component</span>
    </div>
  </div>
  `
})
class CardComponent {
  constructor(public name: string) { }

  @Bind
  logName(): void {
    console.log(this.name)
  }
}

const card = new CardComponent("My card component")

const BTN = document.querySelector('#btn')!

BTN.addEventListener('click', card.logName)