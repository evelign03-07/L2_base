function isCircleSorted(arr) {
  let drops = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      drops++;
    }
  }

  if (arr[arr.length - 1] > arr[0]) {
    drops++;
  }

  return drops <= 1;
}