describe('Split Array function', function() {
  let arr = [5, 3, 2, 1, 6, 7];
  it('is able to split an array into two halves', function() {
    expect(split(arr)).toEqual([[5, 3, 2], [1, 6, 7]]);
  });
});

describe('Merge function', function(){
  let arr1 = [4, 5, 8];
  let arr2 = [2, 3, 6];
  let arr3 = [1, 4, 8, 9];
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge(arr1, arr2)).toEqual([2, 3, 4, 5, 6, 8]);
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge(arr2, arr3)).toEqual([1, 2, 3, 4, 6, 8, 9]);
  });
});

describe('Merge sort function', function() {
  let arr = [5, 3, 2, 1, 7, 6];
  it('is able to sort an array', function() {
    expect(mergeSort(arr)).toEqual([1, 2, 3, 5, 6, 7]);
  });
});
