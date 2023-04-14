const express = require("express");
const { ctrlWrapper } = require("../../middlewares");
const { shemas } = require("../../models/contacts");
// const { HttpError } = require("../../helpers");
const { validateBody, isValidId } = require("../../middlewares");

const router = express.Router();
const {
  listContacts,
  removeContact,
  updateContact,
  updateStatusContact,
  getContactById,
  addContact,
} = require("../../controllers/contacts");

router.get("/", ctrlWrapper(listContacts));
router.post("/", validateBody(shemas.addSchema), addContact);
router.get("/:id", isValidId, getContactById);
router.put("/:id", isValidId, validateBody(shemas.addSchema), updateContact);
router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(shemas.updateFavoriteSchema),
  updateStatusContact
);
router.delete("/:id", isValidId, removeContact);

module.exports = router;
