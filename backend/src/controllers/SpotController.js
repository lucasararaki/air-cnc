const Spot = require('../models/Spot');
const User = require('../models/User');

async function store(req, res, next) {
  const { filename } = req.file;
  const { company, techs, price } = req.body;
  const { user_id } = req.headers;

  const user = await User.findById(user_id);

  if (!user) {
    return res.status(400).json({
      message: `User doesn't exists`
    });
  }

  const spot = await Spot.create({
    user: user_id,
    thumbnail: filename,
    company,
    techs: techs.split(',').map(tech => tech.trim()),
    price
  })

  return res.json(spot)
}


async function index(req, res, next) {
  const { tech } = req.query;

  const spots = await Spot.find({ techs: tech });

  res.json(spots);
}

module.exports = {
  store,
  index
};
