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

  // リクエストで渡ってきた情報でタスクを更新する
  // req.bodyをそのまま使っているので、何が入ってきてもそれがDBに保存され得る
  // また、「誰が」リクエストしてきたのかがわからないので、権限の確認ができない
  const updatedTask = {
    ...task,
    ...req.body,
  };
  TASKS[taskId] = updatedTask;

  res.json(updatedTask);
};
