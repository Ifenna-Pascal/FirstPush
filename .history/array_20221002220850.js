// function to determine nth rarerest number

const  Rarerest =  (array, n) => {
    if(n > array.length) return "N is longer than array lenght";
    const map = {};
    for (let i = 0; i < array.length; i++) {
        if(map[array[i]]  === undefined) {
            map[array[i]] = 1;
        }else {
            map[array[i]] ++;
        }
    }

    const keys =  Object.keys(map).sort((a,b) => map[a] - map[b]);
    return [map[keys[n+1]], map];

}


console.log(Rarerest([1, 1,3,1,3,1,1,3,4,5,5,5,6,6,6,7,7], 1));