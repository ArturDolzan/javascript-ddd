const ioc = require('../../ioc/inversify.config');
const TYPES = require('../../ioc/types');

exports.getUser = async (req, res) => {
  const userApplication = ioc.get(TYPES.UserApplication);

  try {
    const userId = req.query.id;
    const user = await userApplication.getUserById(userId);

    if (user) {
      res.status(200).send(user);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};
