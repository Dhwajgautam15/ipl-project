const playerOfmatchPerYear = require('../src/server/6-playerOfMatches.js');
test('Man of match per year', () => {
  const Player0fmatch = [
    {
      id: '1',
      season: '2008',
      player_of_match: 'Yuvraj Singh',
    },
    {
      id: '2',
      season: '2009',
      player_of_match: 'Sachin Tendulkar',
    },
    {
      id: '3',
      season: '2010',
      player_of_match: 'MS Dhoni',
    },
    {
      id: '4',
      season: '2011',
      player_of_match: 'Virat Kohli',
    },
    {
      id: '5',
      season: '2008',
      player_of_match: 'Yuvraj Singh',
    },
    {
      id: '6',
      season: '2010',
      player_of_match: 'MS Dhoni',
    },
    {
      id: '7',
      season: '2008',
      player_of_match: 'Yuvraj Singh',
    },
    {
      id: '8',
      season: '2010',
      player_of_match: 'MS Dhoni',
    },
    {
      id: '9',
      season: '2016',
      player_of_match: 'David Warner',
    },
    {
      id: '10',
      season: '2008',
      player_of_match: 'Yuvraj Singh',
    },
    {
      id: '11',
      season: '2016',
      player_of_match: 'David Warner',
    },
    {
      id: '12',
      season: '2009',
      player_of_match: 'Sachin Tendulkar',
    },
  ];

  const expectedResult = {
    2008: 'Yuvraj Singh',
    2009: 'Sachin Tendulkar',
    2010: 'MS Dhoni',
    2011: 'Virat Kohli',
    2016: 'David Warner',
  };
  expect(playerOfmatchPerYear(Player0fmatch)).toEqual(expectedResult);
});
