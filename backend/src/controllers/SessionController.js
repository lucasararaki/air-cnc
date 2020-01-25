const User = require('../models/User');

async function store(req, res, next) {
  const { email } = req.body;

  // const user = await User.create({ email });
  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({ email });
  }

  res.json(user);
}


module.exports = {
  store
};  