type Result = string;

const calculateBmi = (h: number, w: number): Result => {
  const bmi: number = (w / (h / 100)**2);
  const bmiFixed: string = bmi.toFixed(1);
  console.log('Your BMI: ' + bmiFixed);
  

  if (h <= 0 || w <= 0) {
    return 'Please enter positive height and weight values.'
  }
  
  if (bmi < 16.0) {
    return 'Underweight (Severe thinness)'
  } else if (bmi >= 16 && bmi < 17) {
    return 'Underweight (Moderate thinness)'
  } else if (bmi >= 17 && bmi < 18.5) {
    return 'Underweight (Mild thinness)'
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal (Healthy weight)'
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight (Pre-obese)'
  } else if (bmi >= 30 && bmi < 35) {
    return 'Overweight (Class I)'
  } else if (bmi >= 35 && bmi < 40) {
    return 'Overweight (Class II)'
  } else if (bmi >= 40) {
    return 'Overweight (Class III)'
  }
}

console.log(calculateBmi(180, 74));

