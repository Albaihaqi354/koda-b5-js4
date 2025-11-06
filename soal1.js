let arr = [1, "Hallo", true, { key: "Bian" }, [1]];

let number = 0
let string = 0
let boolean = 0
let array = 0
let object = 0

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    number++
  } else if (typeof arr[i] === "string") {
    string++
  } else if (typeof arr[i] === "boolean") {
    boolean++
  } else if (arr[i] instanceof Array) {
    array++
  } else if (arr[i] instanceof Object) {
    object++
  } else {
    console.log("Invalid");
  }
}

console.log("number:", number)
console.log("string:", string)
console.log("boolean:", boolean)
console.log("array:", array)
console.log("object:", object)
