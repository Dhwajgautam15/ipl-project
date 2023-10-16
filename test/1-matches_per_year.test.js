const TotalMatchesplayedPeryear = require('../src/server/1-matches_per_year');


test("played_matches_per_year",() => {
    
    const sampleData = [
        {
            id: "1",
            season: "2008",
            city: "Chennai Super Kings",
        },
        {
            id: "2",
            season: "2009",
            city: "Royal challenges Bangalore",
        },
        {
            id: "3",
            season: "2009",
            city: "Mumbai Indians",
        },
        {
            id: "4",
            season: "2011",
            city: "Kolkata Knight Riders",
        },
        {
            id: "5",
            season: "2008",
            city: "Kings XI Punjab",
        },
        {
            id: "6",
            season: "2013",
            city: "Delhi Daredevil",
        },
        {
            id: "7",
            season: "2014",
            city: "Hyderabad",
        },
        {
            id: "8",
            season: "2008",
            city: "Kings XI Punjab",
        },
        {
            id: "9",
            season: "2016",
            city: "Pune",
        },
        {
            id: "10",
            season: "2011",
            city: "Kolkata Knight Riders",
        },
    ]

    const expectedData = { '2008': 3, '2009': 2, '2011': 2, '2013': 1, '2014': 1, '2016': 1 };

    expect(TotalMatchesplayedPeryear(sampleData)).toEqual(expectedData);

});

