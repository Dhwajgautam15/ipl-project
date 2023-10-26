async function readJsonFile(fileName) {
  try {
    const response = await fetch(`./output/${fileName}`);
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
}

function printChart1(data) {
  Highcharts.chart('container1', {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Matches Per Year',
    },
    xAxis: {
      title: {
        text: 'Year',
      },
      categories: Object.keys(data),
    },
    yAxis: {
      title: {
        text: 'Number of Matches',
      },
    },
    series: [
      {
        name: '',
        data: Object.values(data),
      },
    ],
  });
}
function printChart2(data) {
  //  const teams={}
  // for(let num in data){
  //     for(let team in data[num]){
  //         if(team==undefined || team == null || team == ""){
  //             continue;
  //         }
  //        if(teams[team]){

  //         teams[team].push(data[num][team])
  //        }
  //        else{
  //         teams[team]=[];
  //        }
  //     }

  // }
  const teams = Object.keys(data).reduce((result, year) => {
    Object.keys(data[year]).forEach((team) => {
      if (team && team !== undefined && team !== '') {
        if (result[team]) {
          result[team].push(data[year][team]);
        } else {
          result[team] = [data[year][team]];
        }
      }
    });
    return result;
  }, {});

  const seriesData = Object.entries(teams).map(([team, win]) => ({
    name: team,
    data: win,
  }));
  Highcharts.chart('container2', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Matches Won Per Team Per Year',
    },
    xAxis: {
      title: {
        text: 'Year',
      },
      categories: Object.keys(data),
    },
    yAxis: {
      title: {
        text: 'Number of Matches',
      },
    },
    series: seriesData,
  });
}

function printChart3(data) {
  Highcharts.chart('container3', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Extra Run Conceded Per Team In 2016',
    },
    xAxis: {
      title: {
        text: 'Bowling Team',
      },
      categories: Object.keys(data),
    },
    yAxis: {
      title: {
        text: 'Extra Runs',
      },
    },
    series: [
      {
        name: ' ',
        data: Object.values(data),
      },
    ],
  });
}
function printChart4(dataArray) {
  Highcharts.chart('container4', {
    chart: {
      type: 'line',
    },
    title: {
      text: 'Top 10 Economical bowler',
    },
    xAxis: {
      title: {
        text: 'Bowlers Name',
      },
      categories: Object.keys(dataArray),
    },
    yAxis: {
      title: {
        text: 'Economy',
      },
    },
    series: [
      {
        name: ' ',
        data: Object.values(dataArray),
      },
    ],
  });
}
function printChart5(dataArray) {
  Highcharts.chart('container5', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'number of times each team won the toss and match',
    },
    xAxis: {
      title: {
        text: 'Teams Names ',
      },
      categories: Object.keys(dataArray),
    },
    yAxis: {
      title: {
        text: 'No of matches abd toss',
      },
    },
    series: [
      {
        name: ' ',
        data: Object.values(dataArray),
      },
    ],
  });
}
function printChart6(data) {
  let year = Object.keys(data).map((y) => Number(y));
  // console.log(year);
  Highcharts.chart('container6', {
    chart: {
      type: 'column',
      zoomType: 'xy',
    },
    title: {
      text: 'Player of matches per year',
    },
    xAxis: {
      title: {
        text: 'Players Name',
      },
      categories: Object.values(data),
    },
    yAxis: {
      min: 2000,
      title: {
        text: 'years',
      },
    },
    series: [
      {
        name: '',
        data: year,
      },
    ],
  });
}

function printChart7(data) {
  const years = Object.keys(data['DA Warner']);
  const values = years.map((year) => parseFloat(data['DA Warner'][year]));

  Highcharts.chart('container7', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'Strike Rates of Batsman',
    },
    xAxis: {
      title: {
        text: ' DA warner ',
      },
      categories: years,
    },
    yAxis: {
      title: {
        text: 'strike Rate',
      },
    },
    series: [
      {
        name: '',
        data: values,
      },
    ],
  });
}
// function printChart6(data) {
//   let year = Object.keys(data).map((y) => Number(y));
//   // console.log(year);
//   Highcharts.chart('container6', {
//     chart: {
//       type: 'column',
//       zoomType: 'xy',
//     },
//     title: {
//       text: 'Player of matches per year',
//     },
//     xAxis: {
//       title: {
//         text: 'Players Name',
//       },
//       categories: Object.values(data),
//     },
//     yAxis: {
//       min: 2000,
//       title: {
//         text: 'years',
//       },
//     },
//     series: [
//       {
//         name: '',
//         data: year,
//       },
//     ],
//   });
// }
function printChart8(data) {
  Highcharts.chart('container9', {
    chart: {
      type: 'column',
    },
    title: {
      text: 'number of times each team won the toss and match',
    },
    xAxis: {
      title: {
        text: 'Teams Names ',
      },
      categories: Object.keys(data),
    },
    yAxis: {
      title: {
        text: 'No of matches abd toss',
      },
    },
    series: [
      {
        name: ' ',
        data: Object.values(data),
      },
    ],
  });
}
function main() {
  let Chart1 = readJsonFile('1-totalMatchesplayedPeryear.json');
  Chart1.then((data) => {
    printChart1(data);
  });

  let Chart2 = readJsonFile('2-matchesWonPerTeam.json');
  Chart2.then((data) => {
    printChart2(data);
  });

  let chart3 = readJsonFile('3-extraRunPerTeam.json');
  chart3.then((data) => {
    printChart3(data);
  });

  let chart4 = readJsonFile('4-economicalBowlersIn2015.json');
  chart4.then((data) => {
    const dataArray = data.reduce((acc, [bowler, extraRuns]) => {
      acc[bowler] = parseFloat(extraRuns); // Convert extraRuns to a numeric value
      return acc;
    }, {});
    printChart4(dataArray);
  });

  let chart5 = readJsonFile('5-teamWonTossAndMatch.json');
  chart5.then((data) => {
    printChart5(data);
  });

  let Chart6 = readJsonFile('6-playerOfMatches.json');
  Chart6.then((data) => {
    printChart6(data);
  });

  let Chart7 = readJsonFile('7-strikeRateOfBatsman.json');
  Chart7.then((data) => {
    printChart7(data);
  });

  // let Chart8 = readJsonFile('8-highestTimePlayerDismissed.json');
  // Chart8.then((data) => {
  //   printChart8(data);
  // });

  let Chart9 = readJsonFile('9-bestEconomyInSuperOvers.json');
  Chart9.then((data) => {
    printChart9(data);
  });
}

main();
