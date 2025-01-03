const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let result=[];
	let currSubArray=[];
	let currSum=0;

	for(num of arr){
		if(currSum+num>n){
			result.push(currSubArray);
            currSubArray = []; 
            currSum = 0;
		}
		currSubArray.push(num);
        currSum += num;
	}

	if (currSubArray.length > 0) {
        result.push(currSubArray);
    }

    return result;
  
};

// const n = prompt("Enter n: ");
// alert(JSON.stringify(divide(arr, n)));
