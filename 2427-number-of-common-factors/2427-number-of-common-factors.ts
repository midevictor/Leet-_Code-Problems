function commonFactors(a: number, b: number): number {
    let factors = [];
    for(let i = 1; i <= b; i++){
        a%i === 0 && b % i === 0 ? factors.push(i) : null;
    }
    return factors.length;

};
