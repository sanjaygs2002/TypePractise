const myObj : {name: string,age:number}={
    name:"Sanjay",
    age:21
};

console.log(myObj.name);


// Arrays
const myArr: number[]=[1,2,3,4,5];
for(const item of myArr){
    if(item%2==0){
        console.log(item);
    }

}
console.log(myArr);

// Tuples

const myTuple:  [number,...string[]]=[1,"Sanjay","Ram"]

console.log(myTuple);

const toArray=<T,U,V> (a:T,b:U,c:V)=>{
    return [a,b,c];
}
const res= toArray<string,number,number>("Sanjay",2,3);
console.log(res);


const data : unknown ="Sanjay";
if(typeof data === "string"){
    data.includes("a");
  
    
}

interface Details{
   readonly id:number,
    name?:string,
    date:string,
    start_date: string,
    end_date:string,
    
}


const EmployeeArray=<T,U,V>(a:T,b:U,c:V) =>{
    return [a,b,c];
}

const resSet= EmployeeArray<string,number,number>("Ram",1,2);
console.log(resSet);


interface ComponentA{
    a:number,
    b:string,
    c:string,
    d:number,
    e:string,
}

interface ComponentB{
    b:string,
    c:string,
    e:string,
}


const partial :ComponentA<Partial>;
