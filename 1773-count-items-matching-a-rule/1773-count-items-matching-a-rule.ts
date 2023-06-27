function countMatches(items: string[][], ruleKey: string, ruleValue: string): number {
    let ruleKeys = ["type", "color", "name"]
    return items.filter(e => e[ruleKeys.indexOf(ruleKey)] === ruleValue).length

};

