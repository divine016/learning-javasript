//code that takess two numbers in the array and add upto all the numbers in between them including those two numbers
function sumAll(arr) {
    let i = 0;
    let start;
    let end;
    let sum = 0 ;
    if(arr[i] > arr[i + 1]){
       start = arr[i + 1];
       end = arr[i]
    } else{
       start = arr[i]
       end = arr[i+1]
    }
    for(start ; start <= end;start++){
      sum += start;
    }
  
    return sum;
  }
  
  console.log(sumAll([5, 10]));

// code that takes two  arrays and checks if there is any number found in one that is not in the other.
function diffArray(arr1, arr2) {
   const newArr = [];
   //define another function that woukd compare bith and return a number
   function compareBoth(first, second){
      for (let i=0;i<first.length;i++){
         if(second.indexOf(first[i]) === -1){
            newArr.push(first[i])
         }
      }
   }
   compareBoth(arr1, arr2); takes the first two and compares
   compareBoth(arr2, arr1); taks it in the inverse direction and compares
   return newArr;
 }
 
 diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);