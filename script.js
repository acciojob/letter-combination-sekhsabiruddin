function letterCombinations(input_digit) {
  //Complete the function
	let obj ={
		2:"abc",
		3:"def",
		5:"ghi",
		6:"jkl",
		7:"mno",
		8:"tuv",
		9:"wxyz"
	}
	let ans =obj[input_digit];
	return ans;
	
}

module.exports = letterCombinations;
