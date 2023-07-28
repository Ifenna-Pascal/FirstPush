const array  = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
} 

console.log()