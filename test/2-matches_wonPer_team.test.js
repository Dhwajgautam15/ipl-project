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
            season: "2011",
            winner: "Kolkata Knight Riders"
        },
        {
            id: "5",
            season: "2012",
            winner: "Rajasthan Royals"
        },
        {
            id: "6",
            season: "2013",
            winner: "Mumbai Indians"
        },
        {
            id: "7",
            season: "2014",
            winner: "Kings XI Punjab"
        },
        {
            id: "8",
            season: "2015",
            winner: "Mumbai Indians"
        },
        {
            id: "9",
            season: "2016",
            winner: "Sunrisers Hyderabad"
        },
        {
            id: "10",
            season: "2017",
            winner: "Mumbai Indians"
        },
        {
            id: "11",
            season: "2018",
            winner: "Chennai Super Kings"
        },
    ];
    const expectedResult = {
        '2008': { 'Rising Pune Supergiant': 1 },
        '2009': { 'Mumbai Indians': 1 },
        '2010': { 'Chennai Super Kings': 1 },
        '2011': { 'Kolkata Knight Riders': 1 },
        '2012': { 'Rajasthan Royals': 1 },
        '2013': { 'Mumbai Indians': 1 },
        '2014': { 'Kings XI Punjab': 1 },
        '2015': { 'Mumbai Indians': 1 },
        '2016': { 'Sunrisers Hyderabad': 1 },
        '2017': { 'Mumbai Indians': 1 },
        '2018': { 'Chennai Super Kings': 1 }
      }
expect(mathchesWonPerteam (WonPerYear)).toEqual(expectedResult);
});



