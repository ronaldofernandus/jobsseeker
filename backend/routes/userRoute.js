const userRoute = require("express").Router();
const userController = require("../controller/userController");

userRoute.get("/", userController.getUsers);
userRoute.post("/register", userController.register);
userRoute.post("/login", userController.login);
userRoute.put("/:id", userController.updateUser);
userRoute.get("/:id", userController.getUsersById);

module.exports = userRoute;
