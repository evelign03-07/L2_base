function expandedForm(num) {
  return String(num)
    .split('')
    .map((digit, index, arr) => digit + '0'.repeat(arr.length - index - 1))
    .filter(val => Number(val) !== 0)
    .join(' + ');
}