/* Miguel Luis C. Sobreviñas
** AB-4L
** Assign 001: Programming a Number Library 
** Sources: http://stackoverflow.com/questions/70161/how-to-read-values-from-numbers-written-as-words
** 			http://blog.cordiner.net/2010/01/02/parsing-english-numbers-with-perl/
*/


//FUNCTION INC ONVERTING WORDS TO NUMBER
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

