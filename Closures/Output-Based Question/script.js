function createCounter(i,value) {
    if (value == 1) {
        return i+value
    }
    else if (value == -1) {
        return i+value
    }
    else if (value == 0) {
       return i=0
    }

}
let increment = 1
let decrement = -1
let reset=0

let result=createCounter(0,decrement); 

console.log(result)