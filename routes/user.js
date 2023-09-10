const express = require("express");

//import controller(handler) (../ means go out)
const {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser,
} = require("../controllers/user");

//dont just use app.get instead use router.get , if you are using saperate folder for routes
const router = express.Router();

// Routes...

//controller(handler)
// router.get("/", handleGetAllUser);
// router.post("/", handleCreateNewUser);
// OR group above two routers
router
.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);


router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);



//export
module.exports = router;
