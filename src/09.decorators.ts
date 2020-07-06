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
class AngularComponent {

  name: string


  get componentName() {
    return this.name
  }

  constructor(name: string) {
    this.name = name
  }

  logName(): void {
    console.log(this.name)
  }
}