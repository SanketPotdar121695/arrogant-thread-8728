const { AddressModel } = require('../models/address.model');

const getAddress = async (req, res) => {
  const { userID } = req.body;

  try {
    const userAddress = await AddressModel.find({ userID });
    return res.status(200).json(userAddress);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

const addAddress = async (req, res) => {
  try {
    const newAddress = new AddressModel(req.body);
    await newAddress.save();
    return res.status(200).json(newAddress);
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

const updateAddress = async (req, res) => {
  const { userID } = req.body;
  const { addressID } = req.params;

  try {
    const addressExist = await AddressModel.findById(addressID);
    if (addressExist.userID === userID) {
      const userAddress = await AddressModel.findByIdAndUpdate(
        addressID,
        req.body,
        {
          new: true,
          strict: 'throw'
        }
      );
      return res.status(200).json(userAddress);
    } else if (Object.keys(addressExist).length > 0) {
      return res.status(401).json({ message: 'Unauthorized' });
    } else {
      return res.status(404).json({ message: 'No address found' });
    }
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

const deleteAddress = async (req, res) => {
  const { userID } = req.body;
  const { addressID } = req.params;

  try {
    const addressExist = await AddressModel.findById(addressID);
    if (addressExist.userID === userID) {
      const userAddress = await AddressModel.findByIdAndDelete(addressID);
      return res.status(200).json(userAddress);
    } else if (Object.keys(addressExist).length > 0) {
      return res.status(401).json({ message: 'Unauthorized' });
    } else {
      return res.status(404).json({ message: 'No address found' });
    }
  } catch (err) {
    return res.status(400).json({ message: err });
  }
};

module.exports = { getAddress, addAddress, updateAddress, deleteAddress };
