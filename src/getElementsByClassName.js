// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var webpage = document.childNodes;
	var result = [];
 	
 	var find = function(collection, className){
 		 		
 		for (var i=0; i<collection.length; i++){
			
			//first case runs if no child nodes are present, oterwise case two applies
			if (!collection[i].hasChildNodes()){
				if ( (collection[i].outerHTML !== undefined) && (collection[i].outerHTML.search('class=\"targetClassName\"') > -1) ){
	 				result.push(collection[i]);
	 				console.log(collection[i]);
	 				console.log("~~~~SUCCESS!"); 										
				}
			} else {
	 			var nodes = collection[i].childNodes;
				for (var j=0; j<nodes.length; j++){

					//check each current node for correct classname
					if (nodes[j].toString() === "[object Text]"){
					} else if ( nodes[j].outerHTML.search('class=\"' + className + '\"') > -1){
		 					result.push(nodes[j]);
		 					console.log(nodes[j]);
		 					console.log("~~~~SUCCESS!"); 							
	 				}								
	 			
	 				//applies recursion for nodes contained within nodes
	 				if (nodes[j].childNodes.length !== 0){
	 					find(nodes[j].childNodes); 
	 				}
	 			}				
			}
 		}
	 }

 	find(webpage, 'targetClassName');

 	//console.log("XXXXXXXXXXXXXRESULTXXXXXXXXXXX");
 	console.log(result);
 	//return result;

};