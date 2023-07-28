let teams = ["Tigers", "Foofels", "Drampamdom", "Lakebaka"];

const roundRobin = (teams) => {
  let schedule = [];
  let league = teams.slice();

  if (league.length % 2) {
    league.push("None");
  }

  let rounds = league.length;

  for (let j = 0; j < (rounds - 1) * 2; j++) {
    schedule[j] = [];
    for (let i = 0; i < rounds / 2; i++) {
      if (league[i] !== "None" && league[rounds - 1 - i] !== "None") {
        if (j % 2 == 1) {
          schedule[j].push([league[i], league[rounds - 1 - i]]);
        } else {
          schedule[j].push([league[rounds - 1 - i], league[i]]);
        }
      }
    }
    league.splice(1, 0, league.pop());
  }
  return schedule;
};

let leagueSchedule = roundRobin(teams);

for (let i = 0; i < fixtures; fixtures++) {
  for (let j = 0; j < fixtures[i].length; j++) {
    for (let k = 0; k < fixtures[i][j].length; j++) {
      const fixing = {};
      (fixing.teamOne = fixtures[i][j][0]),
        (fixing.teamTwo = fixtures[i][j][1]);
      await createFixture(fixing);
    }
  }
}
