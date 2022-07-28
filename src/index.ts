
let myName: string = "mike";
let age: number = 32;
let hire: boolean = true; 
let all:any = 100; 

all = "test"

function add(num1:string, num2: number | string) {
    return num1 + num2;
}
console.log(add("test",5))

let array1:number[] = [1,2,3,4,5]
let array2: string[] = ["a", "b","c","d"]
let array3: (string | number)[] = [1,2,3,4,5,"a","b","c"]

let array4: (string | number | string[])[] = [1,2,3,4,5,"a","b","c", ["a","f"]]

let array5 = [1,2,3,4,5,"a","b","c", ["a","f"], false]