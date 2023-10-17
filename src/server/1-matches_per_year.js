function totalMatchesPlayedPerYear(matches) {
  let totalMatchesInYear = {};

  matches.forEach((match) => {
    if (totalMatchesInYear[match.season]) {
      totalMatchesInYear[match.season]++;
    } else {
      totalMatchesInYear[match.season] = 1;
    }
  });

  return totalMatchesInYear;
}

module.exports = totalMatchesPlayedPerYear;
