function bestEconomicalBowlerInSuperOver(deliveries) {
    let allBowlersInSuperOver = {};
    deliveries.forEach((delivery) => {
        if (delivery.is_super_over == '1') {
            if (allBowlersInSuperOver[delivery.bowler]) {
                allBowlersInSuperOver[delivery.bowler]['totalRuns'] += Number(delivery.total_runs);
                allBowlersInSuperOver[delivery.bowler]['totalBalls']++;
            } else {
                allBowlersInSuperOver[delivery.bowler] = {
                    totalRuns: Number(delivery.total_runs),
                    totalBalls: 1,
                };
            }
        }
    });

    let highestEconomy = 0
    let highEconomyBowlerName = {};
    for (const bowler in allBowlersInSuperOver) {
        let economy =
            (allBowlersInSuperOver[bowler].totalRuns / allBowlersInSuperOver[bowler].totalBalls) * 6;
        allBowlersInSuperOver[bowler] = economy;
        if (highestEconomy == 0 || economy < highestEconomy) {
            highestEconomy = economy;
            highEconomyBowlerName = {}
            highEconomyBowlerName[bowler] = economy;
        }
    }
    return highEconomyBowlerName;
}


module.exports = bestEconomicalBowlerInSuperOver;