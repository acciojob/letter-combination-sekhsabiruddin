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
	// let ans =obj[input_digit];
	// return ans;
	if(input_digit.length===0)return [];	
	let ouput = [];
	let backtract =(current,i)=>{
		if(i>input_digit.length-1){
			ouput.push(current);
			return ;
		}
		const letter = map[input_digit[i]];
		for(let l of letter){
			backtract(current+l,i+1);
		}
	}
	return ouput;
}

module.exports = letterCombinations;
