const angleA = 35;
const angleB = 23;
const angleC = 54;
const validAngles = (angleA > 0 && angleB > 0 && angleC > 0);

if (validAngles) {
  let anglesSum = angleA + angleB + angleC;
  
  if (anglesSum === 180) {
    console.log(true);
  } else {
    console.log(false);
  }
} else {
  console.log('Invalid angles.')
}
