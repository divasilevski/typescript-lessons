// Primitive data type
var isFetching = true;
var isLoading = false;
var int = 7;
var float = 7.5;
var message = "Good job!";
var numArray1 = [1, 2, 3, 4, 5];
var numArray2 = [1, 2, 3, 4, 5]; // generic type
var words = ["Good", "Job!"];
// Intresting data type
var contact = ["Good", 7]; // Tuple
var variable = 42; // Any
variable = "String";
// Function data type
function sayGoodJob(name) {
    console.log("Good job, " + name + "!");
}
sayGoodJob("Dima");
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
        //
    }
}
var login = "admin";
var id1 = 1234;
var id2 = "1234";
