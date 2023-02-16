/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    let newArray1 = [];
    let newArray2 = [];
    for( let i = 0; i < s.length; i++){
        if(s[i] != "#"){
            newArray1.push(s[i])
        }
        else{
            newArray1.pop(s[i-1]);
        }
    }
    console.log(newArray1);
    
    for( let i = 0; i < t.length; i++){
        if(t[i] != "#"){
            newArray2.push(t[i])
        }
        else{
            newArray2.pop(t[i-1]);
        }
        
    }
    console.log(newArray2)
    // for(let i = 0; i < newArray1.length; i++){
    //    if(newArray1.length === newArray2.length || newArray1[i] === newArray2[i] || (newArray1 && newArray2) === ""){
    //     return true;
    // }
    // else{
    // return false;
    // } 
    // }
    if(newArray1.length !== newArray2.length ){
        return false;
    }
    while(newArray1.length > 0){
        if(newArray1.pop() !== newArray2.pop()){
            return false;
        }
    }
    
    return true;
};