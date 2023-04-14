

let numInput = document.getElementById("userNum")
let usernumTimesNine = document.getElementById("numResult")

let sumDigits = document.getElementById("sumResult")

let treeBranch1 = document.getElementById("tree1")

let treeBranch3 = document.getElementById("tree3")
let treeBranch31 = document.getElementById("tree3-1")
let treeBranch4 = document.getElementById("tree4")

let randomNum = document.getElementById("randomNum")
let inputBox = document.querySelector(".box")

let resultSums = document.getElementById("tree0")
let answerOut = document.querySelector(".sumDigi")
let revealText = document.querySelector(".info4")


const firstButton = document.getElementById("firstButton")
const replacementText = document.getElementById("replacementText")
const challengeText = document.getElementById("challenge")
const sumButton = document.getElementById("sumButton")
const magicButton = document.querySelector(".magicButton")

const limitOneClick = document.getElementById("magicButton")
const resetBtn = document.getElementById("resetBtn")

let treeOutput = document.querySelector(".treeOutput")



 //Function for when input box is active
inputBox.addEventListener("input", function() {
	if(getNum() < 10) {
		firstButton.disabled = true
	} else if (getNum() >= 10){
		firstButton.disabled = false
	} 

	treeBranch1.textContent = " "
	resultSums.innerHTML = " "
	treeBranch3.textContent = " "
	treeBranch31.textContent = " "
	treeBranch4.textContent = " "
	answerOut.style.backgroundColor = '#7149C6';
	replacementText.innerHTML = " "
	challengeText.innerHTML = " "
	resultSums.innerHTML = " "
})





//DETECT WHEN USER IS TYPING IN INPUT

//Trigger Button Click on Enter
numInput.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
	  event.preventDefault();
	  firstButton.click();
	}

  });


function getNum() {
	userNumber = parseInt(numInput.value)
	return userNumber
}


//Summing digits variable: sumOneDigit
function sumOfDigits() {
	let getSum = getNum()
	let = treeResult1()
	let sumOneDigit = getSum % 9 || 9; // Casting out nines
	//sumDigits.textContent = sumOneDigit

	//treeBranch1.textContent = treeResult1()

	return sumOneDigit
}



//To string for resuse variable: numArr
function numString() {
	let getSum = getNum()
	let numArr = getSum.toString().split("").map(Number)

	return numArr
} 


//Joinging array variable: treeFun
function treeResult1() {
	let numToString = numString()
	let joinArray = numToString.join(" + ") // .split vs .join ???

	return joinArray
}


let slicePart = []

function treeResult3(n) {
	
			let sum = n[0] + n[1]
			slicePart = n.slice(2, 100)
			 slicePart.unshift(sum)
			 result1 = slicePart.join(" + ")

		treeBranch31.innerHTML += result1 + "<br>"
		

		if(slicePart[0] < 10) {
			treeSlice(slicePart)
		} else {
			treeSlice(slicePart)
			treeDigits(slicePart)
		}
		
		

}


function treeSlice(n) {
	while(n.length > 1) {
		let result2 = treeResult3(n)
		return result2
	}
		}

let lastDigits = []

function treeDigits(n) {

	lastDigits = n.toString().split("").map(Number)	
	let joinDigits2 = lastDigits.join(" + ")

	let sum2 = lastDigits[0] + lastDigits[1]//WHAT IF THIS RESULT IS 2 DIGITS??? WHAT If it needs to add three digits?

let sumString = []
sumString = sum2.toString().split("").map(Number)

let joinDigits3 = sumString.join(" + ")

if (lastDigits.length == 3) {
		
	let sum4 = lastDigits[0] + lastDigits[1] + lastDigits[2]
	
	return treeBranch4.innerHTML = joinDigits2 + "<br>" + joinDigits3 + " + " + lastDigits[2] + "<br>" + sum4
	
} else if (sumString.length == 2) {
		
		let sum3 = sumString[0] + sumString[1]
		
		return treeBranch4.innerHTML = joinDigits2 + "<br>" + sum2 + "<br>" + joinDigits3 + "<br>" + sum3
} else { 
		return treeBranch4.innerHTML = joinDigits2 + "<br>" + sum2
	}

	
}

//Random number from 1-9
function ranNumber() {
    let firstNum = Math.floor(Math.random() * 8) + 2
	//console.log(firstNum)
	return firstNum
}
randomNum.textContent = ranNumber()

let ranNumberVar = randomNum.textContent


function matchTest() {

	if (ranNumberVar == sumOfDigits() && numString().length < 3) {
		answerOut.style.backgroundColor = '#48A14D';

		challengeText.innerHTML = "Challenge: Try a number with more than two digits.";

		treeBranch1.innerHTML = "Excellent!";

		resultSums.innerHTML =  ranNumberVar + " " + "=" + " " + sumOfDigits();

	} else if (ranNumberVar == sumOfDigits()) {
		answerOut.style.backgroundColor = '#48A14D';
		treeBranch1.textContent = "You know your digits!";

		resultSums.innerHTML =  ranNumberVar + " " + "=" + " " + sumOfDigits();

	} else if (ranNumberVar != sumOfDigits()) {
		answerOut.style.backgroundColor = '#D61A3C';
		treeBranch1.innerHTML = "Oops! Try again or select &ldquo;Reset&rdquo; to get a new digit!";

		resultSums.innerHTML =  ranNumberVar + " " + "&ne;" + " " + sumOfDigits();

	}

}

answerOut.style.display = "none";
//Full Tree
function treeResult4() {

	answerOut.style.display = "initial";
	
	matchTest()
	//treeBranch1.textContent = treeResult1()
	treeBranch3.textContent = treeResult1()
	let numArrResult = numString()
	treeResult3(numArrResult)

	revealText.style.color = '#7149C6';
	firstButton.disabled = true; 

	replacementText.innerHTML = "Sum of all digits&hellip;"
	
	//limitOneClick.disabled = true
}


function reset() {
	//randomNum.textContent = ranNumber()
	location.reload();

	numInput.value = " "
	//usernumTimesNine.textContent = " "
	//sumDigits.textContent = " "
	//treeOutput.textContent = " "
	treeBranch1.textContent = " "
	treeBranch3.textContent = " "
	treeBranch31.textContent = " "
	treeBranch4.textContent = " "

	answerOut.style.backgroundColor = '#7149C6';
	replacementText.innerHTML = " "
	challengeText.innerHTML = " "
	resultSums.innerHTML = " "

	firstButton.disabled = true
/*	firstButton.disabled = true
	sumButton.disabled = true
	magicButton.disabled = true
	
	inputBox.disabled = false

	resetBtn.disabled = true
*/

	//limitOneClick.disabled = true
	//firstButton.disabled = true; 

}