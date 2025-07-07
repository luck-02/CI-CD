const db = require('../src/db');
async function seed() {
  await db.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      email VARCHAR(100)
    );
  `);
  const existing = await db.query('SELECT COUNT(*) as count FROM users');
  if (existing[0].count === 0) {
    await db.query('INSERT INTO users (name, email) VALUES (?, ?)', ['Alice', 'alice@example.com']);
  }
  console.log('Fixtures executed');
  process.exit(0);
}
seed().catch((e) => {
  console.error(e);
  process.exit(1);
});
