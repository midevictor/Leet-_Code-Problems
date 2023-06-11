function defangIPaddr(address: string): string {
    let IP = address.split("");
    for(let i = 0; i < IP.length; i++){
        if(IP[i] === "."){
            IP[i] = "[.]";
        }
    }
    return IP.join("");

};