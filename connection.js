const mongoose = require("mongoose");
mongoose.set("strictQuery",true);

//connection mongoDb 
async function connectMongoDb(url){
    return mongoose.connect(url);
    // .then(() => console.log("Mongodb connected"))
    // .catch((err) => console.log("Mongo Error", err));
}

//export
module.exports = {
    connectMongoDb,
};
