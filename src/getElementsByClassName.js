// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node){
  var result = [];

  // identify starting node
  node = node || document.body;

  // check for className of starting node and add to results array if exists
  if( node.className.split(' ').indexOf(className) != -1 ){
    result.push( node );
  }

  // if starting node has children, check each one for className
  if( node.children ){
    // iterate over all children
    for(var i = 0, count = node.children.length; i < count; i++){
      // recursively call on children and check for className
      result = result.concat( getElementsByClassName(className, node.children[i]) );
    }
  }
  return result;
};