function playerOfmatchPerYear(matches) {
  let eachSeason = {};
  let result = {};
  // console.log(matches);

  matches.map((match) => {
    eachSeason[parseInt(match.season)] = ' ';
    //ex {2018:""}
  });
  for (season in eachSeason) {
    let manOfmatch = {};

    matches.map((match) => {
      if (parseInt(match.season) == season) {
        manOfmatch[match.player_of_match] =
          (manOfmatch[match.player_of_match] || 0) + 1;
      }
    });

    const sortedPlayer = Object.entries(manOfmatch).sort(
      (player1, player2) => player1[1] - player2[1],
    );
    result = sortedPlayer[sortedPlayer.length - 1];
    if (result != undefined) {
      eachSeason[season] = result[0];
    }
  }
  //  console.log(eachSeason);
  return eachSeason;
}

module.exports = playerOfmatchPerYear;
