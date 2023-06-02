
function gradeCalcu() {
  var enaTotal = 0;
  var summTotal = 0;
  var studentName = prompt("Enter Student Name: ");

  for (var i = 0; i < 5; i++) {
    var enaGrade = parseFloat(prompt(`Enter enabling assessment: ${i}`));
    enaTotal += enaGrade;
  }
  var enaAvg = enaTotal / 5;

  for (var j = 0; j < 3; j++) {
    var summGrade = parseFloat(prompt(`Enter summative assessment: ${j}`));
    summTotal += summGrade;
  }
  var summAvg = summTotal / 3;

  var finalScore = parseFloat(prompt("Enter Final Grade: "));
  let finalGrade = (enaAvg * 0.3) + (summAvg * 0.3) + (finalScore * 0.4);

  var letterGrade; 

  switch (true) {
    case (finalGrade <= 70):
      letterGrade = "F";
      break;
    case (finalGrade >= 71 && finalGrade <= 80):
      letterGrade = "C";
      break;
    case (finalGrade >= 81 && finalGrade <= 90):
      letterGrade = "B";
      break;
    case (finalGrade >= 90):
      letterGrade = "A";
      break;
  }

  console.log(`Student: ${studentName} | Class Participation: ${enaAvg} | Summative Assessment: ${summAvg} | Final Grade: ${finalGrade}  | Letter Grade: ${letterGrade}`);
}

for (var i = 0; i < 5; i++) {
  gradeCalcu();
}





