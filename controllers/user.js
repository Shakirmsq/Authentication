const User = require("../models/user");

async function handleGetAllUsers(req,res){
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
};

//create get user by id route
async function handleGetUserById(req,res){
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ error: "Not Found" });
        return res.json(user);
    
};

//Edit user with id
//entry should come from front end
async function handleUpdateUserById(req,res){
    await User.findByIdAndUpdate(req.params.id,{lastName: "changed"});
    return res.json({ status: "Success" });
};


//Delete user with id
async function handleDeleteUserById(req,res){
     await User.findByIdAndDelete(req.params.id);
     return res.json({ status: "success" });
   
};

//Create new user
async function handleCreateNewUser(req,res){
    const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.job_title ||
    !body.gender
  ) {
    return res.status(400).json({ msg: "All fields are required" });
  }

  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    jobTitle: body.job_title,
  });

  console.log("result", result);
  return res.status(201).json({ msg: "success", id:result._id });

};



//export
module.exports ={
    handleGetAllUsers,
    handleGetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser,
};