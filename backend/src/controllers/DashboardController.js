const Spot = require('../models/Spot');

async function show(req, res, next) {

  const { user_id } = req.headers;

  const spots = await Spot.find({ user: user_id });

  return res.json(spots);
}


module.exports = {
  show
}