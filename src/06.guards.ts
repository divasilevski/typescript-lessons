function strip(x: string | number) {
  if (typeof x === "number") {
    return x.toFixed(2)
  }
  return x.trim();
}



// ----------------- //
class MyResponse {
  header = "response header";
  result = "responce result";
}

class MyError {
  header = "error header";
  message = "error message";
}

function handle(responce: MyResponse | MyError) {
  if (responce instanceof MyResponse) {
    return {
      info: responce.header + responce.result
    }
  } else {
    return {
      info: responce.header + responce.message
    }
  }
}



// ----------------- //
type AlertType = "success" | "danger" | "warning";

function setAlertType(type: AlertType) {
  // ....
}

setAlertType("success");
setAlertType("warning");
//setAlertType("default"); // not valid



// From handbook is
function isFish(pet: string | number): pet is string {
  return pet as string !== undefined;
}


// in
function move(pet: { length: number } | any) {
  if (length in pet) {
    return pet.length;
  }
  return pet;
}


// ||
function f6(sn: string | null): string {
  return sn || "default";
}


type Name6 = string;
type NameResolver = () => string;
type NameOrResolver = Name6 | NameResolver;
function getName(n: NameOrResolver): Name6 {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}