function highestNoPlayerDismissed(deliveries) {
  let batsmanDismissal = {};

  deliveries.forEach((delivery) => {
    if (delivery.player_dismissed && delivery.dismissal_kind != 'run out') {
      const bowler = delivery.bowler;
      const batsman = delivery.player_dismissed;

      if (batsmanDismissal[bowler]) {
        if (batsmanDismissal[bowler][batsman]) {
          batsmanDismissal[bowler][batsman]++;
        } else {
          batsmanDismissal[bowler][batsman] = 1;
        }
      } else {
        batsmanDismissal[bowler] = { [batsman]: 1 };
      }
    }
  });

  let highestBatsmanDismissal = {};

  let batsmanCount = { batsman: null, bowler: [], count: 0 };
  let maxDismissals = 0;
  for (let bowler in batsmanDismissal) {
    for (let batsman in batsmanDismissal[bowler]) {
      const dismissals = batsmanDismissal[bowler][batsman];

      if (dismissals > maxDismissals) {
        maxDismissals = dismissals;

        batsmanCount.batsman = batsman;
        batsmanCount.bowler = bowler;
        batsmanCount.count = maxDismissals;
      } //else if (dismissals === maxDismissals) {
      //    batsmanCount["bowler"].push(bowler);
      // }
    }

    //highestBatsmanDismissal[bowler] = batsmanCount;
  }

  // return highestBatsmanDismissal;
  // console.log(batsmanCount);
  return batsmanCount;
}

module.exports = highestNoPlayerDismissed;
