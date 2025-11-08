function merge_sort(arr) {
  if (arr.length <= 1) {
    return arr; // base case
  }

  let mid = Math.floor(arr.length / 2);

  let left = merge_sort(arr.slice(0, mid));
  let right = merge_sort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let res = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  // add remaining elements
  while (i < left.length) {
    res.push(left[i]);
    i++;
  }

  while (j < right.length) {
    res.push(right[j]);
    j++;
  }

  return res;
}

console.log(merge_sort([3, 4, 6, 8, 12, 2]));
