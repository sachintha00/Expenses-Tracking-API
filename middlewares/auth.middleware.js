const bcrypt = require('bcrypt');
const User = require('../models/user.model');

async function authenticate(req, res, next) {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    req.user = user;

    // Continue to the next middleware or route
    next();
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { authenticate };
