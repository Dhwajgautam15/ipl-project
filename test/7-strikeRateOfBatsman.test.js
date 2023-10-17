const getStrikeRate = require('../src/server/7-strikeRateOfBatsman.js');

test('StrikeRate of each batsmans in each season', () => {
  const sampleMatches = [
    {
      id: '101',
      season: '2008',
    },
    {
      id: '201',
      season: '2010',
    },
    {
      id: '301',
      season: '2008',
    },
    {
      id: '401',
      season: '2012',
    },
    {
      id: '501',
      season: '2010',
    },
    {
      id: '601',
      season: '2008',
    },
    {
      id: '701',
      season: '2012',
    },
    {
      id: '801',
      season: '2008',
    },
    {
      id: '901',
      season: '2010',
    },
    {
      id: '1001',
      season: '2012',
    },
  ];

  const sampleDeliveries = [
    {
      match_id: '101',
      wide_runs: 1,
      batsman_runs: 4,
      batsman: 'ms dhoni',
    },
    {
      match_id: '201',
      wide_runs: 0,
      batsman_runs: 6,
      batsman: 'ms dhoni',
    },
    {
      match_id: '301',
      wide_runs: 1,
      batsman_runs: 4,
      batsman: 'ms dhoni',
    },
    {
      match_id: '401',
      wide_runs: 0,
      batsman_runs: 2,
      batsman: 'ms dhoni',
    },
    {
      match_id: '501',
      wide_runs: 1,
      batsman_runs: 4,
      batsman: 'ms dhoni',
    },
    {
      match_id: '601',
      wide_runs: 1,
      batsman_runs: 2,
      batsman: 'ms dhoni',
    },
    {
      match_id: '701',
      wide_runs: 0,
      batsman_runs: 4,
      batsman: 'ms dhoni',
    },
    {
      match_id: '801',
      wide_runs: 0,
      batsman_runs: 6,
      batsman: 'ms dhoni',
    },
    {
      match_id: '901',
      wide_runs: 1,
      batsman_runs: 2,
      batsman: 'ms dhoni',
    },
    {
      match_id: '1001',
      wide_runs: 1,
      batsman_runs: 4,
      batsman: 'ms dhoni',
    },
  ];
  const samplebatsman = 'ms dhoni';

  const expectedResult = {
    'ms dhoni': { 2008: '1600.00', 2010: '1200.00', 2012: '500.00' },
  };
  expect(getStrikeRate(sampleMatches, sampleDeliveries, samplebatsman)).toEqual(
    expectedResult,
  );
});
