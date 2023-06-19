function largestAltitude(gain: number[]): number {
    let beforeNet = [0];
    for (let i = 0; i < gain.length; i++){
        beforeNet.push(beforeNet[i] + gain[i])
    }
    return Math.max(...beforeNet)

};

