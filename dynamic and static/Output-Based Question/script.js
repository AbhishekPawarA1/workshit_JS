// Input: ["10", 20, "30"]

// Expected Output: 60

function Addition(n, arr) {
    let res=0
    for (let i = 0; i < n; i++) {
       res += Number(arr[i])   
    }
    return res;
}
let arr = ["10", 20, "30"];
let n=arr.length
let result = Addition(n, arr)
console.log(result)