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
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] > arr2[i]) {
        mergedArray.push(arr2[i], arr1[i]);
      } else {
        mergedArray.push(arr1[i], arr2[i]);
      }
    }
    
  } else {
      for (let i = 0; i < arr2.length; i++) {
        if (arr1[i] === undefined) {
          mergedArray.push(arr2[i]);
        }
        else if (arr1[i] > arr2[i]) {
          mergedArray.push(arr2[i], arr1[i]);
        } else {
          mergedArray.push(arr1[i], arr2[i]);
      }

    }
  }

  return mergedArray;

}
