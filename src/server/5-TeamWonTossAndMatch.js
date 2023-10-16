function teamWonTossAndMatch(matches){

    let wonTossAndMatchBoth = {};

    matches.forEach((match) => {
        if(match.toss_winner == match.winner){
            if (wonTossAndMatchBoth[match.winner]){
                wonTossAndMatchBoth[match.winner]++;
            } else{
                wonTossAndMatchBoth[match.winner] = 1;
            }
        }
    });
    return wonTossAndMatchBoth;
}

module.exports = teamWonTossAndMatch;

