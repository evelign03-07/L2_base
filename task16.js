Array.prototype.square = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(this[i] * this[i]);
  }
  return result;
};

Array.prototype.cube = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(this[i] * this[i] * this[i]);
  }
  return result;
};

Array.prototype.sum = function () {
  let total = 0;
  for (let i = 0; i < this.length; i++) {
    total += this[i];
  }
  return total;
};

Array.prototype.average = function () {
  return this.sum() / this.length;
};

Array.prototype.even = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 === 0) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.odd = function () {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (this[i] % 2 !== 0) {
      result.push(this[i]);
    }
  }
  return result;
};