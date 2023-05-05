const { UserModel } = require('../models/user.model.js');

const getOrdinaryUsers = async (req, res) => {
  let page = req.query.page;
  let limit = 5;
  let skip = (page - 1) * limit;
  try {
    let user = await UserModel.find({ role: 'user' }).skip(skip).limit(limit);
    return res.status(200).send(user);
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

const getAdmins = async (req, res) => {
  let page = req.query.page;
  let limit = 5;
  let skip = (page - 1) * limit;
  try {
    let user = await UserModel.find({
      $or: [{ role: 'admin' }, { role: 'superadmin' }]
    })

      .skip(skip)
      .limit(limit);
    return res.status(200).send(user);
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

const deleteOrdinaryUser = async (req, res) => {
  let id = req.params.id;
  try {
    await UserModel.findByIdAndDelete(id);
    return res.status(200).send('user deleted');
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

const deleteAdmin = async (req, res) => {
  let id = req.params.id;
  try {
    await UserModel.findByIdAndDelete(id);

    return res.status(200).send('admin deleted');
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

const addAdmin = async (req, res) => {
  try {
    let admin = new UserModel(req.body);
    await admin.save();

    return res.status(200).send('admin added');
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

const updateAdmin = async (req, res) => {
  let id = req.params.id;
  try {
    await UserModel.findByIdAndUpdate(id, req.body);

    return res.status(200).send('admin updated');
  } catch (er) {
    return res.status(400).send({ error: er.message });
  }
};

module.exports = {
  getOrdinaryUsers,
  getAdmins,
  deleteOrdinaryUser,
  deleteAdmin,
  addAdmin,
  updateAdmin
};
