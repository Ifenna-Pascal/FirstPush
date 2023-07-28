const longestPalidrome = (str) => {
    // return str === reverse
    let maxStr = '';
    for (let i=0; i<str.length; i++) {
        for (let j=0; j<= str.length; j++) {
            // console.log(str.substr(i, j));
            let substr = str.substr(i, j);
            let reverse = substr.split('').reverse().join('');
            if ((substr.length > maxStr.length) && substr === reverse)  {
                maxStr = substr;
            }
        }
    }
    return maxStr;
}

const Pallindrome = (str) => {
    let left = 0;
    let right = 0;
    return Math.floor(str.length / 2)
}

const Dups = (array) => {
    let map = {};
    let dups = [];
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]] !== undefined) {
            dups.push(array[i]);
        } else {
            map[array[i]] = 1;
        }
     }
     return dups;
}

const zeroSumSubArray = function (arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++) {
        for(let j=i;j<arr.length;j++) {
               sum=sum+arr[j];
                if(sum==0 ) {
                    // System.out.prletln("Start Index="+i+"  End index="+j);
                    return true;
                }
        }
        // sum=0;
    }
    return false;
}

const subArrayExists = (arr) => {
    const sumSet = new Set();
 
    // Traverse through array
    // and store prefix sums
    let sum = 0;
    for (let i = 0 ; i < arr.length ; i++)
    {
        sum += arr[i];
 
        // If prefix sum is 0
        // or it is already present
        if (sum === 0 || sumSet.has(sum))
            return true;
 
        sumSet.add(sum);
    }
    return false;
}
console.log(subArrayExists([1,3, -2 -2, 4, -2,-1]))
// console.log(Dups([2,2,4,4,5]))
// console.log(longestPalidrome("cbbd"));
// console.log(Pallindrome("ifenna"))