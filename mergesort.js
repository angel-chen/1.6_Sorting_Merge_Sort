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

  let arr1Counter = 0;
  let arr2Counter = 0;
  while (arr1Counter < arr1.length && arr2Counter < arr2.length) {
    if (arr1[arr1Counter] > arr2[arr2Counter]) {
      mergedArray.push(arr2[arr2Counter]);
      arr2Counter++;
    }
    else {
      mergedArray.push(arr1[arr1Counter]);
      arr1Counter++;
    }
  }

  return mergedArray.concat(arr1.slice(arr1Counter)).concat(arr2.slice(arr2Counter));
}

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
      let splitArray = split(array);
      let split1 = splitArray[0];
      let split2 = splitArray[1];

      return merge(mergeSort(split1), mergeSort(split2));

}
