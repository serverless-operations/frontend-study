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
  res.status(200).json({
    id: user.id,
    name: user.name,
    role: user.role,
    username: user.username,
  });
};
