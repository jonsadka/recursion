// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  // your code here
  // get node
  var result = [];
  node = node || document.body;

  if( node.className.split(' ').indexOf(className) != -1 ){
    // add to array
    result.push( node );
  }
  // if children
  if( node.children ){
    // iterate over children
    for(var i = 0, count = node.children.length; i < count; i++){
      // recursively call on children
      result = result.concat( getElementsByClassName(className, node.children[i]) );
    }
  }
  return result;
};