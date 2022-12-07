import { TASKS } from '../data/tasks';

export const handleListTasks = (req, res) => {
  // 「誰」からのリクエストなのかがわかるようになったので
  // タスクが承認可能な状態かどうか、などの判断がサーバーサイドで行える
  const tasks = Object.values(TASKS).map((task) => ({
    ...task,
    isAcceptable: task.status === 'created' && req.user.role === 'manager',
  }));

  res.json(tasks);
};

export const handleUpdateTask = (req, res) => {
  const { taskId } = req.params;
  const currentTask = TASKS[taskId];
  if (!currentTask) {
    return res.sendStatus(404);
  }

  try {
    // タスクの更新処理はリクエストで受け取ったものを信じるのではなく、サーバーサイドでビジネスロジックを適用する
    const updatedTask = updateTaskStatus(
      currentTask,
      req.body.status,
      req.user
    );
    TASKS[taskId] = updatedTask;
    res.json(updatedTask);
  } catch (e) {
    console.error('error', e);
    res.sendStatus(403);
    return;
  }
};

function updateTaskStatus(currentTask, nextStatus, user) {
  switch (currentTask.status) {
    case 'created':
      if (nextStatus !== 'accepted') {
        throw new Error(
          `invalid status ${currentTask.status} -> ${nextStatus}`
        );
      }
      if (user.role !== 'manager') {
        throw new Error('forbidden');
      }
      break;

    case 'accepted':
      // 未実装
      throw new Error('not implemented');
      break;

    default:
      // 未実装
      throw new Error('not implemented');
  }

  return {
    ...currentTask,
    status: nextStatus,
  };
}
