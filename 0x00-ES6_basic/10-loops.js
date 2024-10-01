export default function appendToEachArrayValue(array, appendString) {
	let a = 0;
	for (let idx of array) {
	  array[a] = appendString + idx;
	  a++;
	}
  
	return array;
  }