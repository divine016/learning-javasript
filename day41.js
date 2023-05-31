//Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
//Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.
function dropElements(arr, func) {
    //while the length of the array is bif=gger than 0 and the function argument whish is the the first elemnt in the array is not true then it should keep shoping of the first element;].
    while(arr.length > 0 && !func(arr[0])){
        arr.shift();
    }
    return arr;
}
//Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr){
    let flatArr = []
    //looping over the array elemnets to check if the elements in it are arrays
    for (let i = 0; i< arr.length; i++){
        if (Array.isArray(arr[i])){
            //using recursion to go throught all the Element
            flatArr.push(...steamrollArray(arr[i]));
        }
        else{
            flatArr.push(arr[i])
        }
    }
    function steamrollArray(arr);
}
//