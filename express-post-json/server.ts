import express from 'express';

const app = express();

app.use(express.json());

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

let nextId = 1;

const grades: Record<number, Grade> = {};

app.get('/api/grades', (req, res) => {
  const gradesArray: Grade[] = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }
  res.json(gradesArray);
});

app.post('/api/grades', (req, res) => {
  const newGrade: Grade = req.body;

  if (!newGrade.name || !newGrade.course || !newGrade.score) {
    res.sendStatus(404);
  } else {
    const id = nextId++;
    grades[id] = { id, ...newGrade };
    res.status(201).json(grades[id]);
  }
});
app.listen(8081, () => {
  console.log('server running on port 8081');
});
