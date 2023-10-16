const teamWonTossAndMatch = require('../src/server/5-TeamWonTossAndMatch');

test("Team won toss and match",() =>{

    const samplewonTeam = [
        {
            id: "1",
            toss_winner: "Royal Challengers Bangalore",
            winner: "Mumbai Indians"
        },
        {
            id: "2",
            toss_winner: "Kolkata Knight Riders",
            winner: "Chennai Super Kings"
        },
        {
            id: "3",
            toss_winner: "Delhi Capitals",
            winner: "Rajasthan Royals"
        },
        {
            id: "4",
            toss_winner: "Sunrisers Hyderabad",
            winner: "Kings XI Punjab"
        },
        {
            id: "5",
            toss_winner: "Mumbai Indians",
            winner: "Royal Challengers Bangalore"
        },
        {
            id: "6",
            toss_winner: "Kolkata Knight Riders",
            winner: "Kolkata Knight Riders"
        },
        {
            id: "7",
            toss_winner: "Rajasthan Royals",
            winner: "Delhi Capitals"
        },
        {
            id: "8",
            toss_winner: "Kings XI Punjab",
            winner: "Sunrisers Hyderabad"
        },
        {
            id: "9",
            toss_winner: "Royal Challengers Bangalore",
            winner: "Mumbai Indians"
        },
        {
            id: "10",
            toss_winner: "Chennai Super Kings",
            winner: "Chennai Super Kings"
        },
    
      
    ];
    const expectedwonTeam = { 'Kolkata Knight Riders': 1, 'Chennai Super Kings': 1 };
    
    expect(teamWonTossAndMatch(samplewonTeam)).toEqual(expectedwonTeam);
      

    
});