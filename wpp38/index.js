function union(arra1, arra2) {
  
    if ((arra1 == null) || (arra2==null)) 
      return void 0;
    
    var obj = {};
   
    for (var i = arra1.length-1; i >= 0; -- i)
       obj[arra1[i]] = arra1[i];
   
    for (var i = arra2.length-1; i >= 0; -- i)
       obj[arra2[i]] = arra2[i];
   
    var res = [];
   
    for (var n in obj)
    {
    
      if (obj.hasOwnProperty(n)) 
        res.push(obj[n]);
    }
   
    return res;
  }
  console.log(union([1, 2, 3], [100, 2, 1, 10]));