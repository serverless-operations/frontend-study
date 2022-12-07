import jwt from 'jsonwebtoken';
import { USERS } from '../data/users';

export const handleLogin = (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  const user = Object.values(USERS).find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    return res.sendStatus(404);
  }

  // 改ざんのできない署名付きのトークンを作成する（中にはユーザーのIDを入れておく）
  const token = jwt.sign({ userId: user.id }, 'topsecret');

  res.status(200).json({
    token,
    id: user.id,
    name: user.name,
    role: user.role,
    username: user.username,
  });
};
