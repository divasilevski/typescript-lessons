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