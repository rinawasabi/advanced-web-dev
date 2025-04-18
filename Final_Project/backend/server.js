const express = require('express');
const cors = require('cors');
const pool = require('./db');

// Create an Express application
const app = express();
const PORT = 3001;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

pool.query('SELECT NOW()')
  .then(result => {
    console.log('Connected to DB at:', result.rows[0].now);
  })
  .catch(err => {
    console.error('DB connection error:', err);
  });

// READ function
app.get('/api/recipes', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM recipes ORDER BY id DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching recipes from DB:', err);
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

// CREATE function
app.post('/api/recipes', async (req, res) => {
  const { title, image, ingredients, instructions, userAdded, userId } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO recipes (title, image, ingredients, instructions, user_added, user_id)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [title, image, ingredients, instructions, userAdded, userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Error saving recipe to DB:', error);
    res.status(500).json({ error: 'Failed to save recipe' });
  }
});


// DELETE function
app.delete('/api/recipes/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query('DELETE FROM recipes WHERE id = $1', [id]);
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting recipe from DB:', error);
    res.status(500).json({ error: 'Failed to delete recipe' });
  }
});

// UPDATE function
app.put('/api/recipes/:id', async (req, res) => {
  const { id } = req.params;
  const { title, image, ingredients, instructions, userAdded, userId } = req.body;

  try {
    const result = await pool.query(
      `UPDATE recipes
       SET title = $1,
           image = $2,
           ingredients = $3,
           instructions = $4,
           user_added = $5,
           user_id = $6
       WHERE id = $7
       RETURNING *`,
      [title, image, ingredients, instructions, userAdded, userId, parseInt(id)]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Recipe not found' });
    }

    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error updating recipe:', err.stack);
    res.status(500).json({ error: 'Failed to update recipe' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
