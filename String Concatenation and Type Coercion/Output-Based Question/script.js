// Input: ["Hello", 42, true]

// Expected Output: "Hello42true"

// arr = ["Hello", 42, true];
function Concatinate(arr) {
    let n = arr.length
    let str=""
    for (let i = 0; i < n; i++){
        str+=arr[i]
    }
    return str
}

let result = Concatinate(["Hello", 42, true]);
console.log(result)