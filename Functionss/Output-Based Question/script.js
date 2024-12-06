// Input: [1, 2, 3]

// Expected Output: [2, 4, 6]

function Doublevalue(arr) {
    let res = [];
    arr.forEach(element => {
        res.push(element*2)
    });
    return res
}
let arr = [1, 2, 3];
let result = Doublevalue(arr)
console.log(result)