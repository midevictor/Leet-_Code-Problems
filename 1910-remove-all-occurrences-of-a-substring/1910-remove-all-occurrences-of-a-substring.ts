function removeOccurrences(s: string, part: string): string {
    // while(s.includes(part)){
    //     s = s.replace(part, "");
    // }
    // return s;
  let res = s;
  for(let i = 0; i < s.length; i++) {
    res = res.replace(part, "");
  }
  return res;

};
