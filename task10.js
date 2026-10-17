function bingo(ticket, win) {
  let miniWins = 0;

  for (let i = 0; i < ticket.length; i++) {
    let text = ticket[i][0];
    let number = ticket[i][1];

    for (let j = 0; j < text.length; j++) {
      let symbol = text.charCodeAt(j);
      if (symbol === number) {
        miniWins++;
        break;
      }
    }
  }

  if (miniWins >= win) {
    return "Winner!";
  } else {
    return "Loser!";
  }
}