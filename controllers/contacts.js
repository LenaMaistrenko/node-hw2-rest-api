const { Contact } = require("../models/contacts");

const { HttpError } = require("../helpers");
const { ctrlWrapper } = require("../middlewares");

const listContacts = async (_, res) => {
  const result = await Contact.find();
  res.json({
    status: "succes",
    code: 200,
    data: { result },
  });
};
const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json({
    status: "succes",
    code: 201,
    data: { result },
  });
};
const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findById(id);
  if (!result) {
    throw HttpError(404, `Contact with id: ${id} was not found`);
  }
  res.json(result);
};
const updateContact = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, `Contact with id: ${id} was not found`);
  }
  res.json(result);
};
const updateStatusContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!result) {
    throw HttpError(404, { message: "Not found" });
  }
  res.json({
    status: "succes",
    code: 200,
    data: { result },
  });
};
const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove(id);
  if (!result) {
    throw HttpError(404, { message: "Not found" });
  }
  res.json({
    message: "Delete success",
  });
};
module.exports = {
  listContacts: ctrlWrapper(listContacts),
  getContactById: ctrlWrapper(getContactById),
  removeContact: ctrlWrapper(removeContact),
  addContact: ctrlWrapper(addContact),
  updateContact: ctrlWrapper(updateContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};
