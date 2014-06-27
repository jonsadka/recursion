// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (obj === undefined){
    return;
  }

  var string = '';

  if (Object.prototype.toString.call(obj) === '[object Object]'){
    string = '{';
    if (Object.getOwnPropertyNames(obj).length === 0){
      string = string + '{';
    }
    for (key in obj){
      string = string + stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }
    return string.slice(0,-1) + '}';
  } else if (Object.prototype.toString.call(obj) === '[object Array]'){
    string = '[';
    if (obj.length === 0){
      string = '[]';
    }
    for (var i=0; i<obj.length; i++){
      string = string + stringifyJSON(obj[i]) + ',';
    }
    return string.slice(0,-1) + ']';
  } else if (obj === null){
    return String(obj);
  } else if (typeof obj === 'string'){
    return '\"' + obj + '\"';
  } else {
    return obj.toString();
  }

  return stringifyJSON(obj);

};
