import express from 'express';
import jwt from 'jsonwebtoken';
import { USERS } from './data/users';
import { handleLogin } from './handlers/handleLogin';
import { handleListTasks, handleUpdateTask } from './handlers/handleTasks';

const app = express();
const port = 8888;

const authorizeRequest = (req, res, next) => {
  // Authorizationヘッダーで渡ってきたトークンを取得する（無ければここは空文字かundefinedになる
  const token = req.headers.authorization;

  try {
    // トークンが有効なものか検証する（改ざんされていないかどうか）
    const decoded = jwt.verify(token, 'topsecret');
    // decodedには { userId: '' } という形でユーザーのIDが入っている
    console.log('decoded', decoded);
    // 後続の処理で使えるようにuserを取得してリクエストのオブジェクトに入れておく
    const user = USERS[decoded.userId];
    req.user = user;
    // 問題なければ次の処理に進む
    next();
  } catch (e) {
    console.error('error', e);
    // 問題が起きた場合は 403 Forbidden とする
    res.sendStatus(403);
  }
};

// content-typeがapplication/jsonのリクエストをパースする
app.use(express.json());
// content-typeがapplication/x-www-form-urlencodedのリクエストをパースする
app.use(express.urlencoded({ extended: true }));

// ログインは認可用のミドルウェアを適用しない（ログイン自体できなくなってしまうため）
app.post('/login', handleLogin);

// 認可をしたい場合は間にミドルウェアという形で処理をはさむ
app.get('/tasks', authorizeRequest, handleListTasks);

app.put('/tasks/:taskId', authorizeRequest, handleUpdateTask);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
