const extraRunConcedePerTeam = require("../src/server/3-Extra_run_perteam");

test("get extra run per team oin 2016" ,() =>{

    const sampleMatches = [
        {
          id: "101",
          season: "2016",
        },
        {
          id: "201",
          season: "2009",
        
        },
        {
          id: "301",
          season: "2011",
        },
        {
          id: "401",
          season: "2016",
        },
        {
          id: "501",
          season: "2009",
        },
        {
          id: "601",
          season: "2016",
        },
        {
          id: "701",
          season: "2012",
        },
        {
          id: "801",
          season: "2008",
        },
        {
          id: "901",
          season: "2016",
        },
        {
          id: "1001",
          season: "2012",
        },
    
    
      ];
      
      const sampleDeliveries = [
        {
            match_id: '101',
            bowling_team: "Rising Pune Supergiant",
            extra_runs: 2
        },
        {
          match_id: '201',
            bowling_team: "Mumbai Indians",
            extra_runs: 1
        },
        {
          match_id: '301',
            bowling_team: "Chennai Super Kings",
            extra_runs: 4
        },
        {
          match_id: '401',
            bowling_team: "Delhi Capitals",
            extra_runs: 3
        },
        {
          match_id: '501',
            bowling_team: "Chennai Super Kings",
            extra_runs: 0
        },
        {
          match_id: '601',
            bowling_team: "Rajasthan Royals",
            extra_runs: 1
        },
        {
          match_id: '701',
            bowling_team: "Sunrisers Hyderabad",
            extra_runs: 0
        },
        {
          match_id: '801',
            bowling_team: "Mumbai Indians",
            extra_runs: 2
        },
        {
          match_id: '901',
            bowling_team: "Rising Pune Supergiant",
            extra_runs: 1
        },
        {
          match_id: '1001',
            bowling_team: "Kings XI Punjab",
            extra_runs: 0
        }   
      ];
    

      const expectedResult = {
        'Rising Pune Supergiant': 3,
        'Delhi Capitals': 3,
        'Rajasthan Royals': 1
      }

      expect(extraRunConcedePerTeam(sampleMatches,sampleDeliveries)).toEqual(expectedResult);
});