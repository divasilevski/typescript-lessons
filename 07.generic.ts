const arrayOfBumbers: Array<number> = [1, 1, 2, 3, 5, 8, 13];
const arrayOfStrings: Array<string> = ["Good", "job"];

function reverse<T>(array: T[]): T[] {
  return array.reverse()
}

reverse(arrayOfBumbers);
reverse(arrayOfStrings);