const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const calculateGrade = (array1, array2) => {
  let grade = 0;
  for (let index = 0; index < array2.length; index += 1) {
    const studentAnswer = array1[index];
    const rightAnswer = array2[index];
    if (studentAnswer === rightAnswer && rightAnswer !== 'N.A') {
      grade += 1;
    } else if (studentAnswer !== 'N.A') {
      grade -= 0.5;
    }
  }
  return grade;
};

const hof = (studentAnswers, rightAnswers, callback) => {
  return callback(studentAnswers, rightAnswers);
};

console.log(hof(STUDENT_ANSWERS, RIGHT_ANSWERS, calculateGrade));
