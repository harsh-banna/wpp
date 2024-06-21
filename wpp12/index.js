function stringreverse(str){
    if(str === ""){
        return "";
    }else{
        return stringreverse(str.substring(1))+str[0];
    }
}

console.log(stringreverse("ab"));