const express = require("express");
const customerSchema = require("../models/Customer");

const router = express.Router();

// create user
router.post("/customer", (req, res) => {
  const user = customerSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get all users
router.get("/customer", (req, res) => {
  customerSchema
    .find()
    .then((data) => {
      listaPacientes = data;
      res.json({listaPacientes: data})})
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/customer/:id", (req, res) => {
  const { id } = req.params;
  customerSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// delete a user
router.delete("/customer/:id", (req, res) => {
  const { id } = req.params;
  customerSchema
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a user
router.put("/customer/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  customerSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
