import express from 'express';

import BmiCalculator from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const weight = req.query.weight;
  const height = req.query.height;

  if (weight === undefined || height === undefined) {
    res.send({ error: 'malformatted parameters' });
  }

  res.send({ weight, height, bmi: BmiCalculator(height, weight) });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
