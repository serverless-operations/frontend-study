import { TASKS } from '../data/tasks';

export const handleListTasks = (req, res) => {
  res.json(Object.values(TASKS));
};

export const handleUpdateTask = (req, res) => {
  const { taskId } = req.params;
  const task = TASKS[taskId];
  if (!task) {
    return res.sendStatus(404);
  }

  const updatedTask = {
    ...task,
    ...req.body,
  };
  TASKS[taskId] = updatedTask;

  res.json(updatedTask);
};
