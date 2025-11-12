type Product={
    id: number,
    name:string,
    price?:number,
    description?:string
};

const partialPrice : Product={
    id:1,
    name:"Barath",
    
}
console.log(partialPrice);

////////////////////////////////////////

function getUser(){
    return { id: 1,name:"Ram"};
}

function getOrders(){
    return [{id:101,total:50}];
}

console.log("getUser returns:", getUser());
console.log("getOrders returns:", getOrders());
 type UserType= ReturnType<typeof getUser>;
 type OrdersType = ReturnType<typeof getOrders>;

/////////////////////////////////////////////////

type Routes ={
    [K in string]: `/${string}`;
}

const routes: Routes={
    home:"/",
    about:"/about",
   // contact:"contact",
}
console.log(routes);


// How would you design a generic function that accepts any object and a key, and only allows access to valid keys of that object while preserving the correct return type?

 function getValue<T , K extends keyof T>(obj : T, key:K):T[K]{
    return obj[key];
 }

 const user={
    id : 2,
    name: "Pradeep",
    sub:"Reg- WFH Request",
 }

 console.log("Using generic to define object:",getValue(user,"id"));


 /////////////////////////////////////////////////////////////////////////


type Status = "success" | "error" | "pending";

type ConvertObj<T extends string>= {[K in T]:boolean}

type StatusObj= ConvertObj<Status>;


// Write a conditional type that checks if a given type is never.

type NeverCond<T>= [T] extends never ? true : false; 






 