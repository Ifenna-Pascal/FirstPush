function maxSum(arr,k)
{
    // // k must be smaller than n
    // if (n < k)
    // {
    //     document.write("Invalid");
    //     return -1;
    // }
 
    // Compute sum of first window of size k
    let res = 0;
    for (let i=0; i<k; i++)
    res += arr[i];
 
    // Compute sums of remaining windows by
    // removing first element of previous
    // window and adding last element of
    // current window.
    let curr_sum = res;
    for (let i=k; i<arr.length; i++)
    {
        curr_sum += arr[i] - arr[i-k];
        res = Math.min(res, curr_sum);
    }
 
    return res;
}

function LongesSubStr (str, word) {
    let longStr = "";
    // let subString;
    // const itHas = (str, word) => {
    //     for (let i in word) {
    //         str.contains(word[i]);
    //     }
    // }
    for (var i = 0; i < str.length; i++) {
        for (let j=i; j < str.length; j++) {
            // console.log(str[j]);
            subString = str.substr(i,j);
            if(subString.includes(word)) {
                longStr = subString;
                console.log("yes")
            }else {
                console.log("no")
            }
        }
    return longStr;
    }
    // return subString;
}

// console.log(maxSum([2,3,5,6,7,5,6,9], 2));

console.log(LongesSubStr("AlgoExperts", "exp"))