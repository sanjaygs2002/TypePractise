var partialPrice = {
    id: 1,
    name: "Barath",
};
console.log(partialPrice);
////////////////////////////////////////
function getUser() {
    return { id: 1, name: "Ram" };
}
function getOrders() {
    return [{ id: 101, total: 50 }];
}
console.log("getUser returns:", getUser());
console.log("getOrders returns:", getOrders());
var routes = {
    home: "/",
    about: "/about",
    // contact:"contact",
};
console.log(routes);
// How would you design a generic function that accepts any object and a key, and only allows access to valid keys of that object while preserving the correct return type?
function getValue(obj, key) {
    return obj[key];
}
var user = {
    id: 2,
    name: "Pradeep",
    sub: "Reg- WFH Request",
};
console.log("Using generic to define object", getValue(user, "id"));
