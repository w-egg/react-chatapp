const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const authRoutes = (app) => {
  app.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = await User.create({
        username,
        password: hashedPassword,
      });

      res.json({
        message: 'ユーザの作成完了',
        user: newUser,
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });

  app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return res.status(404).json({ error: 'ユーザが見つかりません' });
      }

      const validate = await bcrypt.compare(password, user.password);

      if (!validate) {
        return res.status(403).json({ error: 'パスワードが違います' });
      }

      const token = jwt.sign({ username: user.username }, 'secret', {
        expiresIn: '1h',
      });

      res.json({
        message: 'ログイン成功',
        token,
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  });
};

module.exports = authRoutes;
