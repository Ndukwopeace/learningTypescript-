// this is a script beacuse it has no import or export statements 
let myName : any;

myName = "Kalu John Peace";

const tryMe = 'try';


let physicist : String | number;

physicist  = Math.random() > 0.5 ? "Isaac newton" : 85 ;

if (typeof physicist === "string"){
    physicist.toUpperCase();
}

// literal Types 
// here we set the type of the  the matematicain to the initial value which is albert einstein 
// You can think of each primitive type as a union of every possible matching literal value.
let Mathematician : " Albert Einstein "; 

// you can only assign the value of a literal type to it
Mathematician =" Albert Einstein ";


// Union type annotations can mix and match between literals and primitives. A repre‐
// sentation of a lifespan, for example, might be represented by any number or one of a
// couple known edge cases:
let age : "twelve" | String | number ;

//you can also assign a literal type to another variable of the same type  ,
// here Mathematician is a String although its literal type is AAlbert Einstein  
let BestMathematician = Mathematician;



let nameMaybe = Math.random() > 0.5
 ? "Tony Hoare"
 : undefined;

console.log(nameMaybe?.toLowerCase());

let test : undefined;
// console.log(test);


//type aliases ==========================================>

// instead of 
// let myData : Boolean | String | number | null | undefined ;
// let JohnData : Boolean | String | number | null | undefined ;

// to avoid these repeatations you can simply create a type Alias like so 

type MyTypes = Boolean | String | number ;  // the name of the type should be pascal cased ;

// then 

let myData : MyTypes ;
let JohnData : MyTypes ;

// console.log(typeof(myData))

//  type aliases can also be combined like so 

type AnotherType = MyTypes | null | undefined  ;




// ObJects  ====================================================>

// const poet = {
//     born : 1997,
//     name : "Kalu Peace "
// }

// Object types may be described using a syntax that looks similar to object literals but
// with types instead of values for fields. It’s the same syntax that TypeScript shows in
// error messages about type assignability. The poet object can be written as follows 



let poet : {
    born : Number ,
    name : String 
}

poet = {
    born: 1997,
    name : "Kalu Peace"
}


/**
 *  Aliased Object Types =======================================>
Constantly writing out object types like 
{ born: number; name: string; }
would get tiresome rather quickly. It’s more common to use type aliases to assign each type shape a name.
The previous code snippet could be rewritten with a type Poet, which comes with the added benefit of making TypeScript’s assignability error message a little more direct and readable:

 */


type NewGenPoet = {
                    name : String ,
                    born : Number,
                    popular : Boolean
                }

let newPoet : NewGenPoet;

newPoet = {
    name : "Kalu ndukwo Peace ",
    born : 1997,
    popular: true
}

console.log(newPoet.name);

/**
 * Most TypeScript projects prefer using the interface keyword
to describe object types. Aliased object types and interfaces are
almost identical: everything in this chapter applies to interfaces
as well.
I bring these object types
 */


type WithFirstName = {
    firstName : String ;
}

type WithLastName = {
    lastName : String ;
}

const hasBoth =  {
    firstName : "Kalu",
    lastName : "Peace",
    age : 27
}

let WithFirstName : WithFirstName = hasBoth;

let WithLastName : WithLastName = hasBoth;


console.log(WithFirstName);

// May 02 2024

