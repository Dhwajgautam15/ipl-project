// Modules Import / csv and fs file
const csv = require("csv-parser");
const fs = require("fs");

// Import from Functions / server

const totalMatchesPlayedPerYear = require('./src/server/1-matches_per_year');
const mathchesWonPerteam = require("./src/server/2-matches_wonPer_team.js");
const extraRunConcedePerTeam = require("./src/server/3-Extra_run_perteam.js");
const top10EconomicalBowler = require('./src/server/4-economical_bowlers_in_2015.js')
const teamWonTossAndMatch = require("./src/server/5-TeamWonTossAndMatch.js");
const playerOfmatchPerYear = require('./src/server/6-player_of_matches.js');
const getStrikeRate = require('./src/server/7-strike_Rate_of_batsman.js');
const highestNoPlayerDismissed = require('./src/server/8-highest_time_Player_Dismissed.js');
const bestEconomicalBowlerInSuperOver = require('./src/server/9-best_Economy_In_Super_Overs.js');


// All json saved file paths name

const jsonFileName1 = "./src/public/output/1-matchesPerYear.json";
const jsonFileName2 = "./src/public/output/2-matchesWonperTeam.json";
const jsonFileName3 = "./src/public/output/3-Extra_run_perteamm.json";
const jsonFileName4 = "./src/public/output/4-economical_bowlers_in_2015.json"
const jsonFileName5 = "./src/public/output/5-TeamWonTossAndMatch.json";
const jsonFileName6 = "./src/public/output/6-player_of_matches.json";
const jsonFileName7 = "./src/public/output/7-strike_Rate_of_batsman.json";
const jsonFileName8 = "./src/public/output/8-highest_time_Player_Dismissed.json";
const jsonFileName9 = "./src/public/output/9-best_Economy_In_Super_Overs.json";

// Read matches.csv File
const matches = [];
fs.createReadStream("./src/data/matches.csv")
  .pipe(csv({}))
  .on("data", (data) => matches.push(data))
  .on("end", () => {

    // Read deliveries.csv File
    const deliveries = [];
    fs.createReadStream('./src/data/deliveries.csv')
      .pipe(csv({}))
      .on("data", (data) => deliveries.push(data))
      .on("end", () => {
        // console.log(deliveries);

        // 1-Matches per year
        const getTotalMatchesPlayedPerYear = totalMatchesPlayedPerYear(matches);
        fs.writeFileSync(
        jsonFileName1,
        JSON.stringify(getTotalMatchesPlayedPerYear, null, 2)
        );
        console.log(`Problem-01: totalPlayedMatchesInYear.json File saved`);

        //2-matches won per_team per_Year
        const TotalmathchesWonPerteam = mathchesWonPerteam(matches);
        fs.writeFileSync(
          jsonFileName2,
          JSON.stringify(TotalmathchesWonPerteam, null, 2)
        );
        console.log(`problem-02:TotalmathchesWonPerteam.json File saved`);

        //3-per team in the year 2016

        const extraRunConcedePerTeamms = extraRunConcedePerTeam(matches, deliveries);
        fs.writeFileSync(
          jsonFileName3,
          JSON.stringify(extraRunConcedePerTeamms, null, 2)
        );
        console.log(`problem-03:ExtraRunConcedeTeam.json File saved`);

        //4- top 10 bowler economy

        const getTop10EconomicalBowler = top10EconomicalBowler(matches, deliveries);
        fs.writeFileSync(
          jsonFileName4,
          JSON.stringify(getTop10EconomicalBowler, null, 2)
        );
        console.log(`problem-04:gettop10EconomicalBowler.json File saved`);

        //5-each team won the toss and also won the match
        const wonTossAndMatchBoth = teamWonTossAndMatch(matches);
        fs.writeFileSync(
          jsonFileName5,
          JSON.stringify(wonTossAndMatchBoth, null, 2)
        );
        console.log(`problem-05:wonTossAndMatchBoth  .json File saved`);

        //6.-highest man of match in season 
        const wonPlayerOfmatchPerYear = playerOfmatchPerYear(matches);
        // console.log(wonPlayerOfmatchPerYear)
        fs.writeFileSync(
          jsonFileName6,
          JSON.stringify(wonPlayerOfmatchPerYear, null, 2)
        );
        console.log(`problem-06:wonPlayerOfmatchPerYear.json File saved`);


        //7-Strike Rate for each batsman in each season:

        const getStrikeRateResult = getStrikeRate(matches, deliveries, "DA Warner");
        fs.writeFileSync(
          jsonFileName7,
          JSON.stringify(getStrikeRateResult, null, 2)
        );

        console.log(`problem-07:GetStrikerateResult.json File saved`);

        //8-highest number of times one player has been dismissed:

        const getHighestNoPlayerDismissed = highestNoPlayerDismissed(deliveries);
        fs.writeFileSync(
          jsonFileName8,
          JSON.stringify(getHighestNoPlayerDismissed, null, 2)
        );

        console.log(`problem-08:getHighestNoPlayerDismissed.json File saved`);

        //9-bowler with best economy in super overs:

        const getbestEconomicalBowlerInSuperOver = bestEconomicalBowlerInSuperOver(deliveries);
        fs.writeFileSync(
          jsonFileName9,
          JSON.stringify(getbestEconomicalBowlerInSuperOver, null, 2)
        );

        console.log(`problem-09:getbestEconomicalBowlerInSuperOver.json File saved`);

      });
  });


