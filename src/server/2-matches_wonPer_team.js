function mathchesWonPerteam(matches) {
  let totalmathchesWonPerteam = {};

  matches.forEach((match) => {
    if (
      totalmathchesWonPerteam[match.season] &&
      totalmathchesWonPerteam[match.season][match.winner]
    ) {
      totalmathchesWonPerteam[match.season][match.winner]++;
    } else if (
      totalmathchesWonPerteam[match.season] &&
      !totalmathchesWonPerteam[match.season][match.winner]
    ) {
      totalmathchesWonPerteam[match.season][match.winner] = 1;
    } else {
      totalmathchesWonPerteam[match.season] = {};
      totalmathchesWonPerteam[match.season][match.winner] = 1;
    }
  });
  return totalmathchesWonPerteam;
}

module.exports = mathchesWonPerteam;


