// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var result = [];
	console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXNEWXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
 	var find = function(collection){
 		//console.log('asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf')
 		//console.log(collection);
 		//console.log(collection.hasChildNodes());
 		
 		var checkClass = function(item){
	 		if (item.classList){
				for (var h=0; h<item.classList.length; h++){
					//console.log(item.classList[h]);
					//console.log("YAY!");
					if (item.classList[h] === className){
						result.push(item);
					}
				}
			}			
 		}

 		checkClass(collection);

		//console.log("Collection has child nodes: " + collection.hasChildNodes());
 		if (collection.hasChildNodes()){
 			//console.log("There are " +collection.childNodes.length+ " child nodes");
 			var nodes = collection.childNodes;
 			for (var i=0; i<nodes.length; i++){
 				
 				//console.log('------Node-----');
 				//console.log(nodes[i]);
 				//console.log("Has "+nodes[i].childNodes.length+" child nodes: " + nodes[i].hasChildNodes());
 				//console.log(nodes[i].className);	

 				if (nodes[i].hasChildNodes()){
 					//console.log("___Run find() on these "+nodes[i].childNodes.length+" nodes___");
 					checkClass(nodes[i]);
 					for (var j=0; j<nodes[i].childNodes.length; j++){
 						//console.log(nodes[i].childNodes[j]);
  					find(nodes[i].childNodes[j]);	 							
 					}
 				} else {
 					checkClass(nodes[i]);
 				}
 			}
 		} 

	 }

 	find(document.body);

 	console.log('_______________________RESULT___________________');
 	console.log(result);
 	return result;
};