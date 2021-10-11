// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(num1, num2)
{
  return(num1 > num2 ? num1 : num2)
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord (words)
{
  var lengthyWord
  
  if(words.length == 0)
  {
  return null;
  }
  else if(words.length == 1)
  {
    return words[0];
  }
  else
  {
    lengthyWord = words[0]
    for(let i=1; i<words.length; i++)
    {   
      if(words[i].length > lengthyWord.length )
      {
        lengthyWord = words[i]
      }
    }
    return lengthyWord
}
}

// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(price)
{
  let net_price = 0
  if(price.length == 0)
  return 0
  
  for (let i=0; i<price.length; i++)
  {
    if(price[i] == 0)
    {
      return 0
    }
    else
    {
      net_price += price[i] 
    }
  }
  return net_price
}

// Progression #4: Calculate the average
function add(sumOfArray)
{
  let sum = 0
  
    for(let i=0; i<sumOfArray.length; i++)
    {
      if(typeof sumOfArray[i] === "number")
      {
        sum += sumOfArray[i]
      }
      else if(typeof(sumOfArray[i]) == "string")
      {
        sum += sumOfArray[i].length
      }
      else if(sumOfArray[i] == true)
      {
        sum += 1
      }
      else if(sumOfArray[i] == false)
      {
        sum += 0
      }
      else 
      {
        throw Error("Unsupported data type sir or ma'am")
      }
    }
    return sum
  }

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(arrayOfNumbers)
{
  let sum = 0
  let avg = 0
  
  if(arrayOfNumbers.length != 0)
  {
    for(let i=0; i<arrayOfNumbers.length; i++)
    {
      if(typeof arrayOfNumbers[i] === "number")
      {
        sum += arrayOfNumbers[i]
      }
      else if(typeof(arrayOfNumbers[i]) == "string")
      {
        sum += arrayOfNumbers[i].length
      }
      else if(arrayOfNumbers[i] == true)
      {
        sum += 1
      }
      else if(arrayOfNumbers[i] == false)
      {
        sum += 0
      }
      else 
      {
        throw Error("Unsupported data type sir or ma'am")
      }
    }
    avg = sum / arrayOfNumbers.length
    return avg
  }
  else
  return null
}

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
 
function averageWordLength(wordsArr)
{
  let sum = 0
  let avg = 0  
  // let wordsArr.length = len
  if(wordsArr.length != 0)
  {
    for(let i=0; i<wordsArr.length; i++)
    {
      sum = sum + wordsArr[i].length
    }
    avg = sum / wordsArr.length
    return avg
  }
  else
  return null
}


// Progression #4.3 (Bonus): A generic avg() function
function avg(arr)
{
  let sum = 0
  let avg = 0
  
  if(arr.length != 0)
  {
    for(let i=0; i<arr.length; i++)
    {
      if(typeof arr[i] === "number")
      {
        sum += arr[i]
      }
      else if(typeof(arr[i]) == "string")
      {
        sum += arr[i].length
      }
      else if(arr[i] == true)
      {
        sum += 1
      }
      else if(arr[i] == false)
      {
        sum += 0
      }
      else 
      {
        throw Error("Unsupported data type sir or ma'am")
      }
    }
    avg = sum / arr.length
    return parseFloat(avg.toFixed(2))
  }
  else
  return null
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique)
{
  var uniquified=[]
  if(wordsUnique.length==0)
  return null
  else
  {
    for(let i=0;i<wordsUnique.length;i++)
    {
     if(uniquified.indexOf(wordsUnique[i])==-1)
     {
       uniquified.push(wordsUnique[i]); 
     }
    }
  }
  return uniquified
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,element)
{
//  Return Null if Array is Empty
if(wordsFind.length==0)
{
  return null
}
else
{
// Search the element in Array
  for(i=0;i<wordsFind.length;i++)
  {
    if(wordsFind[i]==element)
    {
    return true
    }
  }
}
}

// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
let count=0
function howManyTimesElementRepeated(wordsCount,searchElement)
{
//  Return Null if Array is Empty
if(wordsCount.length==0)
{
  return 0
}
else
{
// Search the element in Array
  for(i=0;i<wordsCount.length;i++)
  {
    if(wordsCount[i]==searchElement)
    {
    count=count+1  
    }
  } 
    if(count==1)
    {
    return 1
    }
    else if(count==0)
    {
    return 0
    }
    else
    {
    return count
  }
}
}
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
