const highestNoPlayerDismissed = require('../src/server/8-highestTimePlayerDismissed.js');

test('highest_No_Player_Dismissed', () => {
  const sampleDelivery = [
    {
      match_id: '101',
      bowler: 'TS Mills',
      player_dismissed: 'DA Warner',
      batsman: 'DJ Hooda',
    },
    {
      match_id: '201',
      bowler: 'A Choudhary',
      player_dismissed: 'S Dhawan',
      batsman: 'Mandeep Singh',
    },
    {
      match_id: '301',
      bowler: 'SR Watson',
      player_dismissed: 'MC Henriques',
      batsman: 'CH Gayle',
    },
    {
      match_id: '401',
      bowler: 'TS Mills',
      player_dismissed: 'DA Warner',
      batsman: 'Mandeep Singh',
    },
    {
      match_id: '501',
      bowler: 'SR Watson',
      player_dismissed: 'MC Henriques',
      batsman: 'CH Gayle',
    },
    {
      match_id: '601',
      bowler: 'A Choudhary',
      player_dismissed: 'S Dhawan',
      batsman: 'Mandeep Singh',
    },
    {
      match_id: '701',
      bowler: 'TS Mills',
      player_dismissed: 'DA Warner',
      batsman: 'Mandeep Singh',
    },
    {
      match_id: '801',
      bowler: 'SR Watson',
      player_dismissed: 'MC Henriques',
      batsman: 'DJ Hooda',
    },
    {
      match_id: '901',
      bowler: 'A Choudhary',
      player_dismissed: 'S Dhawan',
      batsman: 'Mandeep Singh',
    },
    {
      match_id: '1001',
      bowler: 'TS Mills',
      player_dismissed: 'DA Warner',
      batsman: 'CH Gayle',
    },
  ];

  const expectedResult = {
    'TS Mills': { 'Mandeep Singh': 2 },
    'A Choudhary': { 'Mandeep Singh': 3 },
    'SR Watson': { 'CH Gayle': 2 },
  };
  expect(highestNoPlayerDismissed(sampleDelivery)).toEqual(expectedResult);
});
