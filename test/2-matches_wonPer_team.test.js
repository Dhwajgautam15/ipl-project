const mathchesWonPerteam = require('../src/server/2-matches_wonPer_team');

test("matches_won_per_year",() => {
    
    const WonPerYear = [
        {
            id: "1",
            season: "2008",
            winner: "Rising Pune Supergiant"
        },
        {
            id: "2",
            season: "2009",
            winner: "Mumbai Indians"
        },
        {
            id: "3",
            season: "2010",
            winner: "Chennai Super Kings"
        },
        {
            id: "4",
            season: "2008",
            winner: "Rising Pune Supergiant"
        },
        {
            id: "5",
            season: "2011",
            winner: "Rajasthan Royals"
        },
        {
            id: "6",
            season: "2010",
            winner: "Chennai Super Kings"
        },
        {
            id: "7",
            season: "2009",
            winner: "Mumbai Indians"
        },
        {
            id: "8",
            season: "2008",
            winner: "Rising Pune Supergiant"
        },
        {
            id: "9",
            season: "2009",
            winner: "Mumbai Indians"
        },
        {
            id: "10",
            season: "2010",
            winner: "Chennai Super Kings"
        },
        {
            id: "11",
            season: "2011",
            winner: "Rajasthan Royals"
        },
    ];
    const expectedResult = {
        '2008': { 'Rising Pune Supergiant': 3 },
        '2009': { 'Mumbai Indians': 3 },
        '2010': { 'Chennai Super Kings': 3 },
        '2011': { 'Rajasthan Royals': 2 }
      }
expect(mathchesWonPerteam (WonPerYear)).toEqual(expectedResult);
});



