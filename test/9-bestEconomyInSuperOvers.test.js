const bestEconomicalBowlerInSuperOver = require('../src/server/9-bestEconomyInSuperOvers.js');

test('best_Economical_Bowler_In_SuperOver', () => {
  const sampleDeliveries = [
    {
      match_id: '1',
      bowler: 'David Warner',
      is_super_over: 0,
      total_runs: 2,
    },
    {
      match_id: '1',
      bowler: 'David Warner',
      is_super_over: 1,
      total_runs: 2,
    },
    {
      match_id: '1',
      bowler: 'DJ Bravo',
      is_super_over: 1,
      total_runs: 4,
    },
    {
      match_id: '1',
      bowler: 'DJ Bravo',
      is_super_over: 1,
      total_runs: 2,
    },
    {
      match_id: '1',
      bowler: 'David Warner',
      is_super_over: 1,
      total_runs: 1,
    },
    {
      match_id: '1',
      bowler: 'DJ Bravo',
      is_super_over: 0,
      total_runs: 2,
    },
    {
      match_id: '1',
      bowler: 'David Warner',
      is_super_over: 0,
      total_runs: 1,
    },
    {
      match_id: '1',
      bowler: 'David Warner',
      is_super_over: 1,
      total_runs: 2,
    },
    {
      match_id: '1',
      bowler: 'DJ Bravo',
      is_super_over: 1,
      total_runs: 2,
    },
    {
      match_id: '1',
      bowler: 'David Warner',
      is_super_over: 1,
      total_runs: 3,
    },
    {
      match_id: '1',
      bowler: 'DJ Bravo',
      is_super_over: 1,
      total_runs: 2,
    },
    {
      match_id: '1',
      bowler: 'David Warner',
      is_super_over: 1,
      total_runs: 1,
    },
  ];

  const expectedResult = { 'David Warner': 10.8 };

  expect(bestEconomicalBowlerInSuperOver(sampleDeliveries)).toEqual(
    expectedResult,
  );
});
