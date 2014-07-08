// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var result = [];
  
  var find = function(collection){
    
    var checkClass = function(item){
      if (item.classList){
        for (var h=0; h<item.classList.length; h++){
          if (item.classList[h] === className){
            result.push(item);
          }
        }
      }     
    }

    checkClass(collection);

    if (collection.hasChildNodes()){
      var nodes = collection.childNodes;
      for (var i=0; i<nodes.length; i++){

        if (nodes[i].hasChildNodes()){
          checkClass(nodes[i]);
          for (var j=0; j<nodes[i].childNodes.length; j++){
            find(nodes[i].childNodes[j]);               
          }
        } else {
          checkClass(nodes[i]);
        }
      }
    } 

   }

  find(document.body);

  return result;
};