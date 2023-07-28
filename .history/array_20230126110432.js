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

const maxSubArray = (array, num) => {
    const temp = 0;
    const maxSum = 0;
    for (let i = 0; i<num; i++) {

    }
}