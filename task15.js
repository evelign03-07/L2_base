function howManyTimes(time1, time2) {
  let start = new Date(time1.replace(" ", "T") + "Z");
  let end = new Date(time2.replace(" ", "T") + "Z");
  let count = 0;

  for (let t = start.getTime(); t < end.getTime(); t += 1000) {
    let date = new Date(t);
    let hour = date.getUTCHours() % 12;
    let minute = date.getUTCMinutes();
    let second = date.getUTCSeconds();

    if (hour === 0) {
      hour = 12;
    }

    if (minute === 0 && second < hour) {
      count++;
    }

    if (minute === 30 && second === 0) {
      count++;
    }
  }

  return count;
}