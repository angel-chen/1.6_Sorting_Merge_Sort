describe('Split Array function', function() {
  let arr = [5, 3, 2, 1, 6, 7];
  it('is able to split an array into two halves', function() {
    expect(split(arr)).toEqual([[5, 3, 2], [1, 6, 7]]);
  });
});

describe('Merge function', function(){
  let arr1 = [1, 4, 8];
  let arr2 = [2, 3, 6];
  let arr3 = [1, 4, 8, 9];
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge(arr1, arr2)).toEqual([1, 2, 3, 4, 6, 8]);
  });
  it('is able to merge two sorted arrays into one sorted array', function(){
    expect(merge(arr2, arr3)).toEqual([1, 2, 3, 4, 6, 8, 9]);
  });
});

