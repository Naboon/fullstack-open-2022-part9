interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

interface trainingData {
  initialTarget: number;
  trainingHours: Array<number>;
}

const parseExerciseArguments = (args: Array<string>): trainingData => {
  if (args.length < 4) throw new Error('Not enough arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    let trainingArray: number[] = [];

    for (let i = 3; i < args.length; i++) {
      if (isNaN(Number(args[i])))
        throw new Error('All provided values were not numbers!');
      trainingArray.push(Number(args[i]));
    }

    return {
      initialTarget: Number(args[2]),
      trainingHours: trainingArray,
    };
  } else {
    throw new Error('All provided values were not numbers!');
  }
};

const calculateExercises = (
  exerciseArray: number[],
  target: number
): Result => {
  const periodLength: number = exerciseArray.length;
  const trainingDays: number = exerciseArray.filter(
    (exerciseHours) => exerciseHours > 0
  ).length;

  const average: number =
    exerciseArray.reduce((sum, exerciseHours) => sum + exerciseHours, 0) /
    periodLength;

  let rating: number;
  let ratingDescription: string;

  if (average / target < 0.5) {
    rating = 1;
    ratingDescription = 'not enough exercise';
  } else if (average / target >= 0.5 && average / target < 1) {
    rating = 2;
    ratingDescription = 'not too bad but could be better';
  } else if (average / target > 1) {
    rating = 3;
    ratingDescription = 'good work, you have met your target';
  }

  return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: rating === 3,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average,
  };
};

try {
  const { initialTarget, trainingHours } = parseExerciseArguments(process.argv);
  console.log(calculateExercises(trainingHours, initialTarget));
} catch (error: unknown) {
  let errorMessage = 'Something bad happened.';
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}
