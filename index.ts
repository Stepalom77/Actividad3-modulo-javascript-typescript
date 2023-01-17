//Ejercicio 1
interface Person {
    name:string;
    age:number;
    profession:string;
}
let newArray:Array<string | number> = []

const personFunction = (person:Person):Array<string | number> => {
    let newPerson:Person = person
    newArray = Object.values(newPerson)
    console.log(newArray)
    return newArray
}

personFunction({name:'Stephano', age:29, profession:'Desarrollador web'})

//Ejercicio 2
function sumOrConcatenate(a:string | number, b:string | number): string | number{
    if(typeof a === "number" && typeof b === "number"){
        return a + b 
    } else if(typeof a === "string" && typeof b === "string"){
        return a + '-' + b 
    } else {
        return a + '+' + b 
    }
}

console.log(sumOrConcatenate(5, 5))
console.log(sumOrConcatenate('hello', 'world'))
console.log(sumOrConcatenate(5, 'pm'))

//Ejercicio 3
interface Car {
    tires:number;
    turnOnEngine():void;
    pressPedal():void;
}

interface Motorcycle {
    tires:number;
    turnOnEngine():void;
    openThrottle():void;
}

function action(newVehicle:Car | Motorcycle): newVehicle is Car{
    return (newVehicle as Car).pressPedal() !== undefined
}

function vehicle(newVehicle:Car | Motorcycle): void{
    newVehicle.turnOnEngine()
    if(action(newVehicle)){
        return newVehicle.pressPedal()
    } else {
        newVehicle.openThrottle()
    }

}

//Ejercicio 4
const removeFirstEntry = (secondArray:Array<string | number>):Array<string | number> => {
    secondArray.shift()
    return secondArray
}

const strArray: string[] = ['Stephano', 'Carlo', 'Palomino', 'Madueno', 'Back', 'End', 'Dev'];
const numArray: number[] = [22, 33, 44, 55, 66, 77, 88];
const mixedArray: Array<number|string> = ['Stephano', 'has', 3, 'new', 'tasks'];

const newStrArray = removeFirstEntry(strArray)
const newNumArray = removeFirstEntry(numArray)
const newMixedArray = removeFirstEntry(mixedArray)

console.log(newStrArray)
console.log(newNumArray)
console.log(newMixedArray)