/* Miguel Luis C. Sobreviñas
** AB-4L
** Assign 001: Programming a Number Library 
** Sources: http://stackoverflow.com/questions/70161/how-to-read-values-from-numbers-written-as-words
** 			http://blog.cordiner.net/2010/01/02/parsing-english-numbers-with-perl/
**			http://stackoverflow.com/questions/5529934/javascript-numbers-to-words
*/

//FUNCTIONS IN CONVERTING NUMBER TO WORDS

//magnitude of values
var ones=['','one','two','three','four','five','six','seven','eight','nine'];
var tens=['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var teens=['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];


function convertMillions(num){
    if (num >= 1000000){		//if number us greater than or equal to 1,000,000
        return convertMillions(Math.floor(num / 1000000)) + " million " + convertThousands(num % 1000000);		//convert and divide the number to 1,000,000 and get the starting digit then add the word million and call convertThousands function and get the modulo of num and 1000000
    }
    else {
        return convertThousands(num);	//if num < 1,000,000
    }
}

function convertThousands(num){
    if (num >= 1000){		//if num is greater than or equal to 1000
        return convertHundreds(Math.floor(num / 1000)) + " thousand " + convertHundreds(num % 1000);		//convert and divide number to 1000 to get the starting digits then add the word thousand and call convertHundreds function and get the modulo of num and 1000
    }
    else{
        return convertHundreds(num);	//if num < 1000
    }
}

function convertHundreds(num){
    if (num > 99){		//if num is greater than 99
        return ones[Math.floor(num / 100)] + " hundred " + convertTens(num % 100);		
    }
    else{
        return convertTens(num);
    }
}

function convertTens(num){
    if (num < 10){		//if num is less than 10
		return ones[num];		//return what number is it in words inside the tens magnitude
	}else if (num >= 10 && num < 20){		//if num is greater than 10 and less than 20
		return teens[num-10];		
    }else{
        return tens[Math.floor(num / 10)] + " " + ones[num % 10];
    }
}

function convert(num){						//main calling function
    if (num==0){
		return "zero";						//returns zero
	}
    else {
		return convertMillions(num);		//calls the convertMillions function
	}
}


//FUNCTION IN CONVERTING WORDS TO NUMBER
function convertWordsToNum(words){
	var value = {									//values
			"one": 1,
			"two": 2,
			"three": 3,
			"four": 4,
			"five": 5,
			"six": 6,
			"seven": 7,
			"eight": 8,
			"nine": 9,
			"ten": 10,
			"eleven": 11,
			"twelve": 12,
			"thirteen": 13,
			"fourteen": 14,
			"fifteen": 15,
			"sixteen": 16,
			"seventeen": 17,
			"eighteen": 18,
			"nineteen": 19,
			"twenty": 20,
			"thirty": 30,
			"forty": 40,
			"fifty": 50,
			"sixty": 60,
			"seventy": 70,
			"eighty": 80,
			"ninety": 90,
			"hundred": 100,
			"thousand": 1000,
			"million": 1000000
	}
	var splitResult = " ";
	splitResult = words.split(" ");						// splits the input by space
	var numberValue = 0;							
	var temp = 0;									//stores the current value of the current order of magnitude
	var convertedNum = 0;							//total
	
	for(var i = 0; i < splitResult.length; i++){	//for each word
		numberValue = value[splitResult[i]];			// get the numerical value of the word from the map
		if(temp == 0){								//if temp = 0
			temp = numberValue						
		}else if(temp > numberValue){				//if temp > current value
			temp = temp + numberValue;			
		}else{
			temp = temp * numberValue;			
		}
		
		if(numberValue >= 1000){								
			convertedNum = convertedNum + temp;		
				temp = 0;								
		}
	}
	covertedNum = convertedNum + temp;							
	return(convertedNum);							//returns the final answer			
}

//FUNCTION IN CONVERTING WORDS TO CURRENCY
function convertWordsToCurrency(words,currency){
	var ans;
	var validCurrency = ["JPY", "PHP", "USD"];			// valid currencies
	var num = convertWordsToNum(words);				// convert the words to numbers using the previous function (convertWordsToNum())
	var check = validCurrency.indexOf(currency)			// checks if currency is valid
	if(check!=-1){										//If currency is valid
		ans = currency + num;							// append currency
		return (ans);						
	}

}
