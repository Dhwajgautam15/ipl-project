// Modules Import / csv and fs file
const csv = require("csv-parser");
const fs = require("fs");

// Import from Functions / server

const TotalMatchesplayedPeryear = require("./src/server/1-matches_per_year.js");
const mathchesWonPerteam = require("./src/server/2-matches_wonPer_team.js");
const extraRunConcedePerTeam = require("./src/server/3-Extra_run_perteam.js");
const teamWonTossAndMatch = require("./src/server/5-TeamWonTossAndMatch.js");
const playerOfmatchPerYear = require('./src/server/6-player_of_matches.js');
const { CLIENT_RENEG_LIMIT } = require("tls");

// All json saved file paths name

const jsonFileName1 = "./src/public/output/1-matchesPerYear.json";
const jsonFileName2 = "./src/public/output/2-matchesWonperTeam.json";
const jsonFileName3 = "./src/public/output/3-Extra_run_perteamm.json";
const jsonFileName5 = "./src/public/output/5-TeamWonTossAndMatch.json";
const jsonFileName6 = "./src/public/output/6-player_of_matches.json";

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
        const totalPlayedMatchesInYear = TotalMatchesplayedPeryear(matches);
        fs.writeFileSync(
          jsonFileName1,
          JSON.stringify(totalPlayedMatchesInYear, null, 2)
        );
        console.log(`Problem-01: totalPlayedMatchesInYear.json File saved`);

        //2-matches won per_team per_Year
        const TotalmathchesWonPerteam = mathchesWonPerteam(matches);
        fs.writeFileSync(
          jsonFileName2,
          JSON.stringify(TotalmathchesWonPerteam, null, 2)
        );
        console.log(`problem-02:TotalmathchesWonPerteam.json File saved`);
      });

    //3-per team in the year 2016
    // console.log(deliveries);
    
    const extraRunConcedePerTeamms = extraRunConcedePerTeam(matches, deliveries);
    fs.writeFileSync(
      jsonFileName3,
      JSON.stringify(extraRunConcedePerTeamms, null, 2)
    );
    console.log(`problem-03:ExtraRunConcedeTeam.json File saved`);

    //5-each team won the toss and also won the match
    const wonTossAndMatchBoth = teamWonTossAndMatch(matches);
    fs.writeFileSync(
      jsonFileName5,
      JSON.stringify(wonTossAndMatchBoth, null, 2)
    );
    console.log(`problem-05:wonTossAndMatchBoth  .json File saved`);

    //6.-highest man of match in season 
    const wonPlayerOfmatchPerYear = playerOfmatchPerYear(matches);
    console.log(wonPlayerOfmatchPerYear)
    fs.writeFileSync(
      jsonFileName6,
      JSON.stringify(wonPlayerOfmatchPerYear,null,2)
    );
    console.log(`problem-06:wonPlayerOfmatchPerYear.json File saved`); 
  });

 
  