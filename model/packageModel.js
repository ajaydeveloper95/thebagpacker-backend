const mongoose = require("mongoose");

const packageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    redirectLink: {
      type: String,
      require: true,
    },
    isActive: {
      type: Boolean,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// create model of using this schema

const packageModel = new mongoose.model("Package", packageSchema);
module.exports = packageModel;
