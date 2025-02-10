type Stuff<T> = T & {createdAt: Date, modifiedAt?: Date};

function sortByDate<T>(arr: Stuff<T>[]):Stuff<T>[]  {
    const now = new Date();
    
    for (let i = 0; i < arr.length; i++) {
        let index = i;
        for (let j = i; j < arr.length; j++) {
            if (getTimeDifferenceFromToday(arr[j]) > getTimeDifferenceFromToday(arr[index])) {
                index = j;
            }
        }
        const temp = arr[i];
        arr[i] = arr[index];
        arr[index] = temp;
    }

    return arr;

    function getTimeDifferenceFromToday(stuff: Stuff<T>): number {
        return (stuff.modifiedAt ? stuff.modifiedAt! : stuff.createdAt).getTime() - now.getTime();
    }
}

console.log(sortByDate([
        { name: "Faraz", createdAt: new Date("2024-02-01T10:00:00Z"), modifiedAt: new Date("2024-02-05T15:30:00Z") },
        { name: "Elyar", createdAt: new Date("2024-02-02T08:00:00Z") },
        { name: "Amir", email: "example@gmail.com", createdAt: new Date("2024-02-03T12:00:00Z") },
        { createdAt: new Date("2024-02-04T18:45:00Z") },
        { name: "Mahdi", createdAt: new Date("2024-02-03T12:00:00Z"), modifiedAt: new Date("2024-02-05T12:30:00Z") },
    ])
)