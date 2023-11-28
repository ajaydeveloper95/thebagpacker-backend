const express = require("express");
const router = express.Router();
const AdminController = require("./adminController");
const { celebrate, Joi } = require("celebrate");

router.get("/", AdminController.getPackage);

router.post(
  "/addPackage",
  celebrate({
    body: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      redirectLink: Joi.string().required(),
      isActive: Joi.boolean().required(),
      image: Joi.string().optional(),
    }),
  }),
  AdminController.packageAdd
);

router.post(
  "/updatePackage",
  celebrate({
    body: Joi.object({
      _id: Joi.string().required(),
      title: Joi.string().optional(),
      description: Joi.string().optional(),
      redirectLink: Joi.string().optional(),
      isActive: Joi.boolean().optional(),
      image: Joi.string().optional(),
    }),
  }),
  AdminController.updatePackage
);

router.post(
  "/deletePackage",
  celebrate({
    body: Joi.object({
      _id: Joi.string().required(),
    }),
  }),
  AdminController.deletePackage
);

// Importing the router
module.exports = router;
