function extraRunConcedePerTeam(matches, deliveries) {
    let ids2016 = [];

// console.log(deliveries);



    matches.map((match) => {
        if(match.season == 2016) {
            ids2016.push(match.id)
        }
    });
    // console.log(ids2016);

    let extraRunConcedePerTeam2016 = {};
   
    deliveries.map((delivery) => {
        // console.log(ids2016.includes(delivery.match_id));

        if (ids2016.includes(delivery.match_id)) {
            // console.log("enterd");

            extraRunConcedePerTeam2016[delivery.bowling_team] = (extraRunConcedePerTeam2016[delivery.bowling_team] || 0) + parseInt(delivery.extra_runs)
        }

    });

    // console.log(extraRunConcedePerTeam2016);
    return extraRunConcedePerTeam2016;
}



module.exports = extraRunConcedePerTeam;





//   console.log(extraRunConcedePerTeam(sampleMatches,sampleDeliveries));