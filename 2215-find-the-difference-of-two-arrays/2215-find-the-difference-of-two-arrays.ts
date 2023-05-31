function findDifference(a: number[], b: number[]): number[][] {
     return [[...new Set(a.filter(e=>!b.includes(e)))],[...new Set(b.filter(e =>!a.includes(e)))]];

};