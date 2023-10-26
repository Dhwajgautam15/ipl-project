function highestNoPlayerDismissed(deliveries) {
  let batsmanDismisal = [];
  deliveries.forEach((delivery) => {
    if (
      delivery.player_dismissed != null &&
      delivery.dismissal_kind != 'run out'
    ) {
      if (
        batsmanDismisal[delivery.bowler] &&
        batsmanDismisal[delivery.bowler][delivery.batsman]
      ) {
        batsmanDismisal[delivery.bowler][delivery.batsman]++;
      } else if (
        batsmanDismisal[delivery.bowler] &&
        !batsmanDismisal[delivery.bowler][delivery.batsman]
      ) {
        batsmanDismisal[delivery.bowler][delivery.batsman] = 1;
      } else {
        batsmanDismisal[delivery.bowler] = {};
        batsmanDismisal[delivery.bowler][delivery.batsman] = 1;
      }
    }
  });

  let highestBatsmanDismisal = {};

  for (let bowler in batsmanDismisal) {
    let max = 0;
    let batsmancount = {};
    for (let batsman in batsmanDismisal[bowler]) {
      if (batsmanDismisal[bowler][batsman] > max) {
        max = batsmanDismisal[bowler][batsman];
      }
    }
    for (let batsman in batsmanDismisal[bowler]) {
      if (batsmanDismisal[bowler][batsman] == max) {
        batsmancount[batsman] = max;
      }
    }
    highestBatsmanDismisal[bowler] = batsmancount;
  }
  return highestBatsmanDismisal;
}

module.exports = highestNoPlayerDismissed;
