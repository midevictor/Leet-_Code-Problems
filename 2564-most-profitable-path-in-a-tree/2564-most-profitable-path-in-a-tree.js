/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function(edges, bob, amount) {
    const tree = new Map();
    
    // Step 1: Build the tree as an adjacency list
    for (const [a, b] of edges) {
        if (!tree.has(a)) tree.set(a, []);
        if (!tree.has(b)) tree.set(b, []);
        tree.get(a).push(b);
        tree.get(b).push(a);
    }

    // Step 2: Find Bob’s arrival times at each node
    const bobTime = new Map();
    
    function findBobPath(node, parent, time) {
        bobTime.set(node, time);
        if (node === 0) return true; // Bob reached root
        for (const neighbor of tree.get(node)) {
            if (neighbor !== parent && findBobPath(neighbor, node, time + 1)) {
                return true;
            }
        }
        bobTime.delete(node); // If no valid path to root, remove from map
        return false;
    }

    findBobPath(bob, -1, 0);

    // Step 3: Find Alice’s optimal path
    let maxProfit = -Infinity;

    function dfsAlice(node, parent, time, totalIncome) {
        let netIncome;
        
        if (bobTime.has(node)) {
            if (time < bobTime.get(node)) {  // Alice arrives first
                netIncome = amount[node];
            } else if (time === bobTime.get(node)) {  // Both arrive at same time
                netIncome = amount[node] / 2;
            } else {  // Bob arrives first
                netIncome = 0;
            }
        } else {
            netIncome = amount[node];
        }
        
        totalIncome += netIncome;

        // If it's a leaf node, update maxProfit
        if (tree.get(node).length === 1 && node !== 0) {
            maxProfit = Math.max(maxProfit, totalIncome);
        }

        // Continue DFS for children
        for (const neighbor of tree.get(node)) {
            if (neighbor !== parent) {
                dfsAlice(neighbor, node, time + 1, totalIncome);
            }
        }
    }

    dfsAlice(0, -1, 0, 0);  // Start DFS from root (0)

    return maxProfit;
};
