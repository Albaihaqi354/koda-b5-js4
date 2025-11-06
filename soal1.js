let arr = [1, "Hallo", true, { key: "Bian" }, [1]];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    console.log("number");
  } else if (typeof arr[i] === "string") {
    console.log("string");
  } else if (typeof arr[i] === "boolean") {
    console.log("boolean");
  } else if (arr[i] instanceof Array) {
    console.log("array");
  } else if (arr[i] instanceof Object) {
    console.log("object");
  } else {
    console.log("Invalid");
  }
}
