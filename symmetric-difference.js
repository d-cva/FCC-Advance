
function sym(args) {
var finalArray = [];
var resultArray = [];
var new1 = [];
// 


var newArray = Array.prototype.slice.call(arguments);

for(var i = 0; i<newArray.length; i++){
	for(var j = 0; j < newArray[i].length; j++){
		
		finalArray.push(newArray[i][j]);
	
	}
}
//return finalArray;

function isDup(finalArray){
	for(var i = 0; i <finalArray.length; i++){
		if(finalArray.indexOf(finalArray[i]) === -1){
			resultArray.push(finalArray[i]);
		} else {
			new1.push(finalArray[i]);
		}
	}
}


return new1;
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));