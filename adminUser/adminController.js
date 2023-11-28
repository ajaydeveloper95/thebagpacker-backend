const Package = require("../model/packageModel");

exports.getPackage = async (req, res) => {
  try {
    let AllPackage = await Package.find();
    return res.status(200).json({
      message: "Success",
      data: AllPackage,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.packageAdd = async (req, res) => {
  try {
    let DataSave = await Package.create(req.body);
    return res.status(200).json({
      message: "Success",
      data: DataSave,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.updatePackage = async (req, res) => {
  try {
    let DataSave = await Package.findByIdAndUpdate(req.body._id, req.body, {
      new: true,
    });
    return res.status(200).json({
      message: "Success",
      data: DataSave,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

exports.deletePackage = async (req, res) => {
  try {
    let DataSave = await Package.findByIdAndDelete(req.body._id);
    return res.status(200).json({
      message: "Success",
      data: DataSave,
    });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
