is_array = function(input) {
    if (toString.call(input) === "[object Array]")
      return true;
    return false;   
    };
console.log(is_array('hello'));
console.log(is_array([1, 2, 3, 4]));