function calculateArea(length, width) {
    if (typeof (length) !== "number" && typeof (width) !== "number") {
        console.log("width and length must be Number")
    }
    return length * width;
}
console.log(calculateArea(10, "5")); // Expected: Error-free calculation
