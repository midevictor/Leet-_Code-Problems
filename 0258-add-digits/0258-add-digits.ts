function addDigits(num: number): number {    
    if (num < 10){
        return num;
    } else{
        num = [...num.toString()].reduce((a, c) => a + Number(c), 0);
        return addDigits(num);
    }

};





// if (isNaN(num) || num === 0) return 0;
//     if (num < 10) return num;
//     return num % 9 === 0 ? 9 : num % 9;