function getStrikeRate(matches, deliveries, batsman) {
  const objSeasons = {};

  matches.map((match) => {
    objSeasons[match.season] = {};
  });
  // console.log(objmatchId);

  const strikeRateEachYear = {};
  strikeRateEachYear[batsman] = {};

  for (let season in objSeasons) {
    const matchids = new Set();
    matches.map((match) => {
      if (match.season == season) {
        matchids.add(match.id);
      }
    });
    let noOfBalls = 0;
    let noOfRuns = 0;
    deliveries.map((delivery) => {
      if (matchids.has(delivery.match_id) && delivery.batsman == batsman) {
        if (delivery.wide_runs == 0) {
          noOfBalls++;
        }
        noOfRuns += parseInt(delivery.batsman_runs);
      }
    });
    strikeRateEachYear[batsman][season] = (
      (noOfRuns / noOfBalls) *
      100
    ).toFixed(2);
  }

  return strikeRateEachYear;
}

module.exports = getStrikeRate;
