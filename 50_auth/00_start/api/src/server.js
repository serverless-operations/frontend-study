import express from 'express';
import { handleLogin } from './handlers/handleLogin';
import { handleListTasks, handleUpdateTask } from './handlers/handleTasks';

const app = express();
const port = 8888;

// content-typeがapplication/jsonのリクエストをパースする
app.use(express.json());
// content-typeがapplication/x-www-form-urlencodedのリクエストをパースする
app.use(express.urlencoded({ extended: true }));

app.post('/login', handleLogin);

app.get('/tasks', handleListTasks);

app.put('/tasks/:taskId', handleUpdateTask);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
