function calculateGrade(scores, weights, passingGrade) {
  if (scores.length === 0 || scores.length !== weights.length) {
    return "Invalid input";
  }

  let weightedTotal = 0;

  for (let i = 0; i < scores.length; i++) {
    weightedTotal += scores[i] * (weights[i] / 100);
  }

  const average = weightedTotal;

  const status = average >= passingGrade ? "Pass" : "Fail";

  const distinction = average >= 90 ? "Yes" : "No";

  let letterGrade;

  if (average >= 90) {
    letterGrade = "A";
  } else if (average >= 80) {
    letterGrade = "B";
  } else if (average >= 70) {
    letterGrade = "C";
  } else if (average >= 60) {
    letterGrade = "D";
  } else {
    letterGrade = "F";
  }

  return {
    average,
    status,
    letterGrade,
    distinction,
  };
}

console.log(calculateGrade([80, 90, 100], [30, 30, 40], 50));
