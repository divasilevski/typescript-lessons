/// <reference path="form-namespace.ts" />

namespace MyForm {
  class MyForm {
    private type: FormType = 'inline'
    private state: FormState = 'active'

    constructor(public email: string) {
    }

    getInfo(): FormInfo {
      return {
        type: this.type,
        state: this.state
      }
    }
  }

  export const myForm = new MyForm('divasilevski@gmail.com')
}

console.log(MyForm.myForm)