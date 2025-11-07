var myObj = {
    name: "Sanjay",
    age: 21
};
console.log(myObj.name);
// Arrays
var myArr = [1, 2, 3, 4, 5];
for (var _i = 0, myArr_1 = myArr; _i < myArr_1.length; _i++) {
    var item = myArr_1[_i];
    if (item % 2 == 0) {
        console.log(item);
    }
}
console.log(myArr);
// Tuples
var myTuple = [1, "Sanjay", "Ram"];
console.log(myTuple);
var toArray = function (a, b, c) {
    return [a, b, c];
};
var res = toArray("Sanjay", 2, 3);
console.log(res);
var data = "Sanjay";
if (typeof data === "string") {
    data.includes("a");
    console.log(data);
}
