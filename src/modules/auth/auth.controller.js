const authService = require('./auth.service');

async function register(req, res) {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}

async function login(req, res) {
  try {
    const { token, user } = await authService.login(req.body);
    res.json({ token, user });
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
}

function profile(req, res) {
  res.json({ user: req.user });
}

module.exports = { register, login, profile };