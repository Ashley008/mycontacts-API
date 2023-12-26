const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref:"User",
    },
    name: {
        type: String,
        required: [true,"pleases add contact name"],
    },
    email:{
        type: String,
        required: [true,"pleases add email"],
    },
    phone:{
        type: String,
        required: [true,"pleases add phone number"],
    },
}, {
    timestamps:true,
}
);
module.exports = mongoose.model("contact" , contactSchema);