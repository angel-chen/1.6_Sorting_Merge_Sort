function split(wholeArray) {

  let firstHalf;
  let secondHalf;

  let midPoint = Math.floor(wholeArray.length/2)

  firstHalf = wholeArray.slice(0, midPoint);
  secondHalf = wholeArray.slice(midPoint);

  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let mergedArray = [];

  

}
