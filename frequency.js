function Frequency () {
    // const hashTable = {};
    // for ( let i = 0; i < array.length; i++) {
    //     let element = array[i];
    //     if (hashTable[element] !== undefined) {
    //         hashTable[element] += 1;
    //     }else {
    //         hashTable[element] = 1
    //     }
    // }
    const hashTable = {
        "sub1": 56,
        "sub2": 67,
        "sub3": 98,
        "sub4": 54,
        "sub5": 87
     };
const sorter = (a, b) => {
    return hashTable[a] - hashTable[b];
}
const keys =  Object.keys(hashTable).sort(sorter);
const ress = {};
keys.forEach(key => {
    console.log(key)
    // console.log(hashTable[key])
    ress[key] = hashTable[key];
 });
return {ress};
}


function longestUniqueSubsttr(str)
{
    var n = str.length;
     
    // Result
    var res = 0;
     
    for(var i = 0; i < n; i++)
    {
         
        // Note : Default values in visited are false
        var visited = new Array(256);
         
        for(var j = i; j < n; j++)
        {
             
            // If current character is visited
            // Break the loop
            if (visited[str.charCodeAt(j)] == true)
                break;
 
            // Else update the result if
            // this window is larger, and mark
            // current character as visited.
            else
            {
                res = Math.max(res, j - i + 1);
                visited[str.charCodeAt(j)] = true;
            }
        }
    }
    return res;
}
console.log(longestUniqueSubsttr("abcabcbb"))