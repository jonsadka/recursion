// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];
	console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXNEWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
 	var find = function(collection){
 		console.log(collection);
 		console.log(collection.childNodes);
 		
 		if (collection.className === className){
 			result.push(collection);
 		} 

		console.log("Collection has child nodes: " + collection.hasChildNodes());
 		if (collection.hasChildNodes()){
 			console.log("There are " +collection.childNodes.length+ " child nodes");
 			var nodes = collection.childNodes;
 			for (var i=0; i<nodes.length; i++){
 				
 				console.log('------Node-----');
 				console.log(nodes[i]);
 				console.log("Has "+nodes[i].childNodes.length+" child nodes: " + nodes[i].hasChildNodes());
 				if (nodes[i].hasChildNodes()){
 					console.log("___Run find() on these "+nodes[i].childNodes.length+" nodes___");
 					for (var j=0; j<nodes[i].childNodes.length; j++){
 						//console.log(nodes[i].childNodes[j]);
  					find(nodes[i].childNodes[j]);	 							
 					}
 				} else {
 					if (nodes[i].classList){
 						for (var k=0; k<nodes[i].classList.length; k++){
 							if (nodes[i].classList[k] === className){
 								result.push(nodes[i]);
 							}
 						}
 					}
 				}
 			}
 		} 

	 }

 	find(document.body);

 	console.log('_______________________RESULT___________________');
 	console.log(result);
 	return result;
};