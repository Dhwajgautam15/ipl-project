function top10EconomicalBowler(matches, deliveries) {
  let matchIds2015 = new Set();

  matches.map((match) => {
    if (match.season == '2015') {
      matchIds2015.add(match.id);
    }
  });

  let noOfBalls = {};
  let noOfRuns = {};
  let economiesOfBowler = {};

  deliveries.map((delivery) => {
    if (matchIds2015.has(delivery.match_id)) {
      if (delivery.wide_runs == '0' && delivery.noball_runs == '0') {
        noOfBalls[delivery.bowler] = (noOfBalls[delivery.bowler] || 0) + 1;
      }

      let totalRuns = parseInt(delivery.total_runs);
      let penaltyRuns = parseInt(delivery.penalty_runs);
      let legByRuns = parseInt(delivery.legbye_runs);
      let byeRuns = parseInt(delivery.bye_runs);

      let bowlerConsiderRuns = totalRuns - penaltyRuns - legByRuns - byeRuns;
      noOfRuns[delivery.bowler] =
        (noOfRuns[delivery.bowler] || 0) + bowlerConsiderRuns;
    }
  });
  for (let bowler in noOfBalls) {
    let economy = ((noOfRuns[bowler] / noOfBalls[bowler]) * 6.0).toFixed(2);

    economiesOfBowler[bowler] = economy;
  }

  const sortedEconomy = Object.entries(economiesOfBowler).sort((a, b) => {
    return a[1] - b[1];
  });

  return sortedEconomy.slice(0, 10);
}

module.exports = top10EconomicalBowler;
