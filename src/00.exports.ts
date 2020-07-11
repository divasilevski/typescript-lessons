console.log("App.ts")
const btn = document.querySelector("#btn")!

btn.addEventListener("click", () => {
  console.log("btn clicked");
})



// EXPORTS
const nnn = 123;
export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements IStringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export interface IStringValidator {
  isAcceptable(s: string): boolean;
}

export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator }


export default class ExportTest {

}

// export = nnn; // throw CommonJS 