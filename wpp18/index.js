
function arrmaxdiff(arr) {
    var max_result = 0;   
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j !== i && j < arr.length; j++) {
            var diff = Math.abs(arr[i] - arr[j]);    
            max_result = Math.max(max_result, diff); 
        }
    }
    
    return max_result;
}

console.log(arrmaxdiff([1, 2, 3, 8, 9]));   
console.log(arrmaxdiff([1, 2, 3, 18, 9]));  

