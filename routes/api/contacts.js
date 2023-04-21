const express = require("express");
const { schemas } = require("../../models/contacts");
const { validateBody, isValidId, authenticate } = require("../../middlewares");

const router = express.Router();
const {
  listContacts,
  removeContact,
  updateContact,
  updateStatusContact,
  getContactById,
  addContact,
} = require("../../controllers/contacts");

router.get("/", authenticate, listContacts);
router.get("/:id", authenticate, isValidId, getContactById);
router.post("/", authenticate, validateBody(schemas.addSchema), addContact);
router.put(
  "/:id",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updateContact
);
router.patch(
  "/:id/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);
router.delete("/:id", authenticate, isValidId, removeContact);

module.exports = router;
