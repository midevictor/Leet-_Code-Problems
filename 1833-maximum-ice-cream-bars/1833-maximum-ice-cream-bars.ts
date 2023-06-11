function maxIceCream(costs: number[], coins: number): number {
    let total = 0;
    costs.sort((a,b) => a-b);
    for(let i = 0; i < costs.length; i++){
        if(coins - costs[i]  >= 0){
            coins = coins - costs[i];
            total++;     
        }
        else{
            break
        }
    }
    return total;

};