export interface BmiValues {
  height: number;
  weight: number;
}

const parseBmiArguments = (args: Array<string>): BmiValues => {
  if (args.length < 2) throw new Error('Not enough arguments');
  if (args.length > 2) throw new Error('Too many arguments');

  if (!isNaN(Number(args[0])) && !isNaN(Number(args[1]))) {
    return {
      height: Number(args[0]),
      weight: Number(args[1])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

export const calculateBmi = (height: number, weight: number): string => {
  const bmi: number = weight / (height / 100) ** 2;

  if (height <= 0 || weight <= 0) {
    return 'Please enter positive height and weight values.';
  }

  if (bmi < 16.0) {
    return 'Underweight (Severe thinness)';
  } else if (bmi >= 16 && bmi < 17) {
    return 'Underweight (Moderate thinness)';
  } else if (bmi >= 17 && bmi < 18.5) {
    return 'Underweight (Mild thinness)';
  } else if (bmi >= 18.5 && bmi < 25) {
    return 'Normal (Healthy weight)';
  } else if (bmi >= 25 && bmi < 30) {
    return 'Overweight (Pre-obese)';
  } else if (bmi >= 30 && bmi < 35) {
    return 'Overweight (Class I)';
  } else if (bmi >= 35 && bmi < 40) {
    return 'Overweight (Class II)';
  } else if (bmi >= 40) {
    return 'Overweight (Class III)';
  }

  return 'Undefined';
};

const BmiCalculator = (h: any, w: any): string => {
  try {
    const { height, weight } = parseBmiArguments([h, w]);
    return calculateBmi(height, weight);
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    return errorMessage;
  }
};

export default BmiCalculator;
