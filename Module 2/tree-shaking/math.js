export function add() {
    let sum = 0, args = [...arguments];
    sum = args.reduce((prev, curv) => prev + curv, 0);
    return sum;
}


export function multiply() {
    let sum = 1, args = [...arguments];
    sum = args.reduce((prev, curv) => prev * curv, 1);
    return sum;
}

