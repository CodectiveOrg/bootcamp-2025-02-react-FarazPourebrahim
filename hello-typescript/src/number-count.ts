function numberCount(arr: unknown[]): number {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            count++;
        }
    }
    return count;
}

console.log(numberCount([3, 6, [], 'x', { num : 6 }, 0]))

// Why not generic type?

function numberCount2<T> (arr: Array<T>): number {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            count++;
        }
    }
    return count;
}

console.log(numberCount2([3, 6, [], 'x', { num : 6 }, 0]))

// Both works the same way and unlike reverseArray function we won't need return type or anything
// so basically the T generic type won't be useful