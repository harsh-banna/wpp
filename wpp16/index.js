function addfrontandback(arr){
    let curr
    curr = arr[0];
    arr[0]= arr[arr.length-1];
    arr[arr.length]= curr;
    return arr;
}

console.log(addfrontandback([1,2,3,1,1,5,4]));
console.log(addfrontandback([8,2,3,1,1,5,17]));

