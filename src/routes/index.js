const express = require('express');
module.exports = (db) => {
  const router = express.Router();
  router.post('/submit', async (req, res) => {
    const { name, email } = req.body;
    if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Invalid data' });
    }
    await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
    res.redirect('/submissions');
  });
  router.get('/submissions', async (_req, res) => {
    const users = await db.query('SELECT * FROM users');
    res.json(users);
  });
  return router;
};
