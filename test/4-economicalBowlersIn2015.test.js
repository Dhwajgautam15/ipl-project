const top10EconomicalBowler = require('../src/server/4-economicalBowlersIn2015.js');

test('top10_Economical_Bowler', () => {
  const sampleMatches = [
    {
      id: '1',
      season: '2015',
    },
    {
      id: '2',
      season: '2009',
    },
    {
      id: '3',
      season: '2013',
    },
    {
      id: '4',
      season: '2015',
    },
    {
      id: '5',
      season: '2009',
    },
    {
      id: '6',
      season: '2013',
    },
    {
      id: '7',
      season: '2015',
    },
    {
      id: '8',
      season: '2013',
    },
    {
      id: '9',
      season: '2015',
    },
    {
      id: '10',
      season: '2009',
    },
  ];
  // id bowlername noball wide total penalty legbye bye
  const sampleDeliveries = [
    {
      match_id: '1',
      bowler: 'TS Mills',
      noball_runs: '1',
      wide_runs: '0',
      total_runs: '1',
      extra_runs: '4',
      penalty_runs: '0',
      legbye_runs: '0',
      bye_runs: '1',
    },
    {
      match_id: '2',
      bowler: 'A Choudhary',
      noball_runs: '0',
      wide_runs: '1',
      total_runs: '2',
      extra_runs: '4',
      penalty_runs: '0',
      legbye_runs: '1',
      bye_runs: '0',
    },
    {
      match_id: '3',
      bowler: 'TS Mills',
      noball_runs: '0',
      wide_runs: '1',
      total_runs: '1',
      extra_runs: '4',
      penalty_runs: '1',
      legbye_runs: '0',
      bye_runs: '1',
    },
    {
      match_id: '4',
      bowler: 'S Aravind',
      noball_runs: '1',
      wide_runs: '1',
      total_runs: '2',
      extra_runs: '4',
      penalty_runs: '0',
      legbye_runs: '0',
      bye_runs: '0',
    },
    {
      match_id: '5',
      bowler: 'A Choudhary',
      noball_runs: '1',
      wide_runs: '0',
      total_runs: '1',
      extra_runs: '5',
      penalty_runs: '0',
      legbye_runs: '0',
      bye_runs: '1',
    },
    {
      match_id: '6',
      bowler: 'TS Mills',
      noball_runs: '0',
      wide_runs: '0',
      total_runs: '2',
      extra_runs: '4',
      penalty_runs: '0',
      legbye_runs: '0',
      bye_runs: '1',
    },
    {
      match_id: '7',
      bowler: 'S Aravind',
      noball_runs: '1',
      wide_runs: '1',
      total_runs: '2',
      extra_runs: '5',
      penalty_runs: '0',
      legbye_runs: '1',
      bye_runs: '0',
    },
    {
      match_id: '8',
      bowler: 'A Choudhary',
      noball_runs: '1',
      wide_runs: '1',
      total_runs: '0',
      extra_runs: '3',
      penalty_runs: '1',
      legbye_runs: '1',
      bye_runs: '0',
    },
    {
      match_id: '9',
      bowler: 'TS Mills',
      noball_runs: '0',
      wide_runs: '0',
      total_runs: '2',
      extra_runs: '4',
      penalty_runs: '0',
      legbye_runs: '1',
      bye_runs: '0',
    },
    {
      match_id: '10',
      bowler: 'S Aravind',
      noball_runs: '1',
      wide_runs: '0',
      total_runs: '2',
      extra_runs: '4',
      penalty_runs: '1',
      legbye_runs: '0',
      bye_runs: '1',
    },
  ];

  const expectedResult = [['TS Mills', '6.00']];

  expect(top10EconomicalBowler(sampleMatches, sampleDeliveries)).toEqual(
    expectedResult,
  );
});
