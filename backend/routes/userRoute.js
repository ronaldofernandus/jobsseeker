const userRoute = require("express").Router();
const userController = require("../controller/userController");

const authentication = require("../middleware/tokenMiddleWare");

userRoute.get("/", userController.getUsers);
userRoute.post("/register", userController.register);
userRoute.post("/login", userController.login);
// userRoute.put("/:id", userController.updateUser);
userRoute.get("/userLogin", authentication, userController.getUsersById);

module.exports = userRoute;
