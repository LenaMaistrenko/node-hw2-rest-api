const express = require("express");
const router = express.Router();
const { validateBody, authenticate } = require("../../middlewares/");
const { schemas } = require("../../models/user");

const ctrl = require("../../controllers/auth");
// signup
router.post("/register", validateBody(schemas.registerSchema), ctrl.register);
// signin
router.post("/login", validateBody(schemas.loginSchema), ctrl.login);
router.get("/curent", authenticate, ctrl.getCurrent);
router.post("/logout", authenticate, ctrl.logout);

module.exports = router;
