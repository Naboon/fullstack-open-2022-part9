interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const calculateExercises = (exerciseArr: number[], target: number): Result => {
  const periodLength: number = exerciseArr.length;
  const trainingDays: number = exerciseArr.filter(eh => eh > 0).length;
  const average: number = exerciseArr.reduce((sum, eh) => sum + eh, 0) / periodLength;
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
    average: average
  }
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));

