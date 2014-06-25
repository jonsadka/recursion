// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (obj === undefined){
    return 'You need to input something... silly';
  }

  var string = '';

  if (Object.prototype.toString.call(obj) === '[object Object]'){
    string = '{';
    for (key in obj){
      string = string + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    return string.slice(0,-1) + '}';
    console.log('Object! Woo!');
  } else if (Object.prototype.toString.call(obj) === '[object Array]'){
    string = '[';
    for (var i=0; i<obj.length; i++){
      string = string + stringifyJSON(obj[i]) + ',';
    }
    return string.slice(0,-1) + ']';
  } else if (typeof obj === 'string'){
    return '\"' + obj + '\"';
  } else {
    return obj;
  }

  return stringifyJSON(obj);

};
