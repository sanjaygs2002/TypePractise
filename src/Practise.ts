 // Utility types Worked on 10-11-2025

// Record

type EmployeeName= "Ram" | "Sanjay" | "Sanjeev"

interface EmployeeDetails {
    age:number,
    date_of_Joining: Date,
    role:string
}

const EmployeeList: Record<EmployeeName,EmployeeDetails>={
    Ram:{age:21,date_of_Joining:new Date ("2021-11-20"),role:"Manager"},
    Sanjay :{age:20,date_of_Joining: new Date("2023-07-25"),role:"Developer"},
    Sanjeev : {age:30,date_of_Joining: new Date("2024-08-05"), role:"Testing"}
}

console.log(EmployeeList.Ram);




// 1. How to write type for below one. Note: startDate & endDate should be Date field instead of string?

interface Details{
    status: string,
    data:[{ id:number,name:string,startDate:Date,endDate:Date}];
}

const DetailSolution : Details={
    status:"Success",
    data:[{id:1,name:"John",startDate:new Date(2012-12-12), endDate: new Date(2012-12-13)}]
}

console.log(DetailSolution);

// 2. 4)Component A having 5 props(a,b,c,d,e) and Component B having 3 props(b,c,e)
//     How you define the types for Component A and Component B without duplication?

interface ComponentA{
    a:number,
    b:string,
    c:number,
    d:string,
    e:number
}

type ComponentB=Pick<ComponentA , "b" | "c" | "e">

const result : ComponentB={
    b:"Sanjay",
    c:12947,
    e:18,
}
console.log(result);

// Partial

interface StudentInfo{
    readonly name: string,
    age: number,
    class: string
}

const solution  :Partial<StudentInfo>={
    name:"Ram",
   // age:21,
    class:"2"
}

console.log(solution);

// Omit 

interface IceCream{
    iceCreamName:string,
    iceCreamPrice:number,
    extraFlovours:boolean
}

type IceCreamType = Omit<IceCream,"iceCreamPrice">;

const iceCreamResult: IceCreamType={
    iceCreamName:"Strawberry",
    extraFlovours:true
}
console.log(iceCreamResult);


// 6)

interface Sample {
    a: string,
    b:string,
    c:string,
    d : number,
    e:{
        e1:number,
        e2:string,
    }
}

const data : Sample={
    a:"aa",
    b:"bb",
    c:"cc",
    d:20,
    e:{
        e1:20,
        e2:"ee",
    }
}
console.log(data);

// 3)


interface ComponentBProps {
  SomeComponent: React.ComponentType<any>;
}


// 2.

interface Component{
    id : number,
data:string,
category: string,
setShowModal : (value: boolean) => void,
showModal : boolean
date : Date
onClick : () => void
}













