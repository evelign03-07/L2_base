function whatCentury(year)
{
  const century = Math.ceil(Number(year) / 100);

  if (century >= 11 && century <= 13) {
    return century + "th";
  }
  
  const lastDigit = century % 10;
  
  if (lastDigit === 1) {
    return century + "st"; 
  } else if (lastDigit === 2) {
    return century + "nd";
  } else if (lastDigit === 3) {
    return century + "rd";
  } else {
    return century + "th"; 
  }
}