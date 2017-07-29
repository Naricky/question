
function stdev(arr) {

  var step1 = function(arr) {
    var summation = 0;
    var averageOfarr;

    for ( var i = 0 ; i < arr.length ; i++) {
      summation += arr[i];
      averageOfarr = summation / arr.length;
    }

    return averageOfarr;
  }
  // in terms of variable delcaration, what difference does it make by setting up var averrageOfarr? Does it scope it inside function step1?
  // other than that, I think step 1 ( which is to find the mean of a function) is in good shape.
  var step2 = function(arr2) {  // will I need to declare a variable inside function()? If so, setting it as "arr" be same as"arr" in function step1?
    var averageOfarr = step1(arr); // will this be able to set var averageOfarr = to return averageOfarr from func 1?
    var stepTwoarr = [];
    for ( var i = 0 ;  i < arr.length; i++){ // will arr.length reflect on initial arr from stdev? If not how can i use it?
      Math.pow(step1(arr) - averageOfarr);
      // here I am trying to access the initial array from initial input. How woudl I do this? Will this work?
      return stepTwoarr.push(arr);
      // returning the results in to stepTwoarr
    }

  var step3 = function(arr3) { // here I am trying to return stdv by finding avg of the step2 array, and then sqrting it.
    var summation = 0;
    var stepTwoarr = step2(arr3); // Being honest, I set up arr3 just because I think I need to set up variable for function.
    // question here; since variable for step2 would be result of step1(arr), do i still need to assign a variable for step2()?
    for ( var i = 0 ; i < step2(arr).length ; i++) {
      summation += arr[i];
      average = summation / arr.length;
      stdvAnswer = Math.sqrt(average);
    }
    return stdvAnswer;

  }

return step3; // Assuming step3 is correct, will this result in combination of all 3 steps?

}

console.log(stdev(1,2,3))