function reverseArray<T> (arr: Array<T>): Array<T> {
    const newArr: Array<T> = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const result = reverseArray([1, 2, 3]) // Now the result has type of number[]
const result2 = reverseArray(["1", "2", "3"]) // Now the result has type of string[]
const result3 = reverseArray([1, "2", null]) // Now the result has type of (string|number|null)[]
console.log(result);
console.log(result2);
console.log(result3);

// Why not unknown?

function reverseArray2 (arr: unknown[]):unknown[] {
    const newArr : unknown[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

const result4 = reverseArray2([1, 2, 3])
const result5 = reverseArray2(["1", "2", "3"])
const result6 = reverseArray2([1, "2", null])
// All the results get unknown type

console.log(result4);
console.log(result5);
console.log(result6);
